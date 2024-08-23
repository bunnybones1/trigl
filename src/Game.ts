import {
  Color,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  type PerspectiveCamera,
  type WebGLRenderer
} from "three";
import { uniformTime } from "./materials/globalUniforms/time";
import Player from "./Player";
import { getChamferedBoxGeometry } from "./geometry/chamferedBoxGeometry";
import { randFloatSpread } from "three/src/math/MathUtils";
import IPlayerIntent from "./types/IPlayerIntent";

const __mvPlayerMatrix = new Matrix4();

export default class Game {
  worldContainer: Object3D;
  private _paused = false;
  private _player: Player;
  public get paused(): boolean {
    return this._paused;
  }
  public set paused(value: boolean) {
    this._paused = value;
    this._player.viewControls.paused = value;
  }

  constructor(
    private pivot: Object3D,
    public camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    const worldContainer = new Object3D();
    this.worldContainer = worldContainer;
    this.pivot.add(worldContainer);

    for (let i = 0; i < 100; i++) {
      const m = new Mesh(
        getChamferedBoxGeometry(1, 1, 1, 0.05),
        new MeshBasicMaterial({
          color: new Color(Math.random(), Math.random(), Math.random())
        })
      );
      m.position.set(
        randFloatSpread(50),
        randFloatSpread(50),
        randFloatSpread(50)
      );
      this.addStatic(m);
    }

    this._player = new Player(this, camera, renderer.domElement);
    this._player.playerIntentSignal.listen(this.onPlayerIntent);

    if (import.meta.hot) {
      import.meta.hot.accept("./Player", (mod) => {
        this._player.cleanup();
        this._player = new mod!.default(this, camera, renderer.domElement);
        this._player.playerIntentSignal.listen(this.onPlayerIntent);
      });
    }
  }
  oldCubes = new Map<string, Mesh>();
  onPlayerIntent = (playerIntent: IPlayerIntent) => {
    const pos = playerIntent.position;
    const key = `${pos.x};${pos.y};${pos.z}`;
    if (this.oldCubes.has(key)) {
      return;
    }

    const size = 0.1;
    const color = new Color(Math.random(), Math.random(), Math.random());

    const test = new Mesh(
      getChamferedBoxGeometry(size, size, size, 0.02),
      new MeshBasicMaterial({ color })
    );
    test.castShadow = true;
    test.receiveShadow = true;
    test.position.copy(pos);
    this.addStatic(test);
    this.oldCubes.set(key, test);
  };
  addStatic(child: Object3D) {
    this.worldContainer.add(child);
    child.updateMatrixWorld();
  }
  removeStatic(child: Object3D) {
    this.worldContainer.remove(child);
  }

  render() {
    if (this._paused) {
      return;
    }
    uniformTime.value = performance.now() * 0.001;

    this._player.mvPlayerPos
      .copy(this.camera.position)
      .applyMatrix4(__mvPlayerMatrix);
  }

  simulate = (dt: number) => {
    if (this._paused) {
      return;
    }
    this._player.simulate(dt);
  };
  cleanup = () => {
    this._player.cleanup();
  };
}
