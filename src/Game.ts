import { GLTFExporter } from "three/examples/jsm/Addons.js";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  InterleavedBuffer,
  InterleavedBufferAttribute,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Uint16BufferAttribute,
  Vector2,
  Vector3,
  type OrthographicCamera,
  type WebGLRenderer
} from "three";
import { uniformTime } from "./materials/globalUniforms/time";
import Player from "./Player";
import IPlayerIntent from "./types/IPlayerIntent";
import { randFloatSpread } from "three/src/math/MathUtils";
import { saveArrayBuffer } from "./utils/saveArrayBuffer";

const __mvPlayerMatrix = new Matrix4();
const __tempVec3 = new Vector3();

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
    public camera: OrthographicCamera,
    renderer: WebGLRenderer
  ) {
    const worldContainer = new Object3D();
    this.worldContainer = worldContainer;
    this.pivot.add(worldContainer);

    this._player = new Player(this, camera, renderer.domElement);
    this._player.playerIntentSignal.listen(this.onPlayerIntent);

    if (import.meta.hot) {
      import.meta.hot.accept("./Player", (mod) => {
        this._player.cleanup();
        this._player = new mod!.default(this, camera, renderer.domElement);
        this._player.playerIntentSignal.listen(this.onPlayerIntent);
      });
    }

    window.addEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (ev: KeyboardEvent) => {
    if (ev.code === "KeyX") {
      console.log("export");
      const e = new GLTFExporter();
      e.parse(
        this.pivot.parent!,
        (gltf) => {
          if (gltf instanceof ArrayBuffer) {
            saveArrayBuffer(gltf, "test.glb");
          }
        },
        (error) => {
          void error;
          console.error(error);
        },
        {
          binary: true
        }
      );
    }
  };
  oldCubes: Mesh[] = [];
  currentInvMat = new Matrix4();
  currentMesh: Mesh | undefined;
  currentGeo: BufferGeometry | undefined;
  lastScreenPos = new Vector2();
  ribbonMaterial = new MeshBasicMaterial({ vertexColors: true });
  color = new Color();
  onPlayerIntent = (playerIntent: IPlayerIntent) => {
    const colorVariation = 1;
    const pos = playerIntent.position;
    const screenPos = playerIntent.screenPos;

    const size = (this.camera.top - this.camera.bottom) * 0.1;
    const color = this.color;

    switch (playerIntent.intent) {
      case "editStart": {
        color.set(Math.random(), Math.random(), Math.random());
        color.convertSRGBToLinear();
        const geo = new BufferGeometry();
        this.currentGeo = geo;
        const vertArr = new Float32Array(2 ** 16);
        vertArr[0] = 0;
        vertArr[1] = 0;
        vertArr[2] = 0;
        vertArr[0 + 6] = 0;
        vertArr[1 + 6] = 0;
        vertArr[2 + 6] = 0;
        vertArr[0 + 12] = 0;
        vertArr[1 + 12] = 0;
        vertArr[2 + 12] = 0;

        vertArr[3] = color.r * (1 + randFloatSpread(colorVariation));
        vertArr[4] = color.g * (1 + randFloatSpread(colorVariation));
        vertArr[5] = color.b * (1 + randFloatSpread(colorVariation));
        vertArr[3 + 6] = color.r * (1 + randFloatSpread(colorVariation));
        vertArr[4 + 6] = color.g * (1 + randFloatSpread(colorVariation));
        vertArr[5 + 6] = color.b * (1 + randFloatSpread(colorVariation));
        vertArr[3 + 12] = color.r * (1 + randFloatSpread(colorVariation));
        vertArr[4 + 12] = color.g * (1 + randFloatSpread(colorVariation));
        vertArr[5 + 12] = color.b * (1 + randFloatSpread(colorVariation));
        const b = new InterleavedBuffer(vertArr, 6);

        geo.attributes.position = new InterleavedBufferAttribute(b, 3, 0);
        geo.attributes.color = new InterleavedBufferAttribute(b, 3, 3);

        const indexArr = new Uint16Array(2 ** 16);
        indexArr[0] = 0;
        indexArr[1] = 1;
        indexArr[2] = 2;
        geo.drawRange.count = 3;
        geo.setIndex(new BufferAttribute(indexArr, 1));
        const test = new Mesh(geo, this.ribbonMaterial);
        test.scale.set(size, size, 1);
        test.position.copy(pos);
        test.position.z = this.camera.position.z;
        this.lastScreenPos.copy(screenPos);
        this.addStatic(test);
        this.currentInvMat.copy(test.matrixWorld).invert();
        this.oldCubes.push(test);
        this.currentMesh = test;
        break;
      }
      case "editMove": {
        if (!this.currentGeo) {
          return;
        }
        if (this.lastScreenPos.distanceTo(screenPos) < 10) {
          return;
        }
        const iBuffer = (
          this.currentGeo.attributes.position as InterleavedBufferAttribute
        ).data;
        const ic = this.currentGeo.drawRange.count;
        const iv = ic / 3 + 2;
        const iv6 = iv * 6;
        const vertArr = iBuffer.array;
        const side = iv % 2 === 0 ? -1 : 1;
        const angle =
          Math.atan2(
            this.lastScreenPos.y - screenPos.y,
            screenPos.x - this.lastScreenPos.x
          ) +
          side * Math.PI * 0.5;

        __tempVec3.copy(pos);
        __tempVec3.x += Math.cos(angle) * size;
        __tempVec3.y += Math.sin(angle) * size;
        __tempVec3.applyMatrix4(this.currentInvMat);

        vertArr[iv6 + 0] = __tempVec3.x;
        vertArr[iv6 + 1] = __tempVec3.y;
        vertArr[iv6 + 2] = 0;

        vertArr[iv6 + 3] = color.r * (1 + randFloatSpread(colorVariation));
        vertArr[iv6 + 4] = color.g * (1 + randFloatSpread(colorVariation));
        vertArr[iv6 + 5] = color.b * (1 + randFloatSpread(colorVariation));
        iBuffer.addUpdateRange(iv6, 6);
        iBuffer.needsUpdate = true;
        this.currentGeo.drawRange.count = ic + 3;
        const index = this.currentGeo.getIndex()!;
        const indexArray = index.array;
        if (side === 1) {
          indexArray[ic] = iv - 2;
          indexArray[ic + 1] = iv - 1;
        } else {
          indexArray[ic + 1] = iv - 2;
          indexArray[ic] = iv - 1;
        }
        indexArray[ic + 2] = iv;
        index.addUpdateRange(ic, 3);
        index.needsUpdate = true;
        this.currentGeo.boundingBox?.expandByPoint(__tempVec3);
        this.currentGeo.computeBoundingSphere();
        this.lastScreenPos.copy(screenPos);
        break;
      }
      case "editEnd": {
        if (!this.currentMesh || !this.currentGeo) {
          return;
        }
        const mesh = this.currentMesh;
        const oldGeo = this.currentGeo;
        const newGeo = new BufferGeometry();
        newGeo.setIndex(
          new Uint16BufferAttribute(
            oldGeo.getIndex()!.array.slice(0, oldGeo.drawRange.count),
            1
          )
        );
        const newBArr = (
          oldGeo.attributes.position as InterleavedBufferAttribute
        ).data.array.slice(0, (oldGeo.drawRange.count / 3 + 2) * 6);
        const newB = new InterleavedBuffer(newBArr, 6);
        newGeo.attributes.position = new InterleavedBufferAttribute(newB, 3, 0);
        newGeo.attributes.color = new InterleavedBufferAttribute(newB, 3, 3);
        mesh.geometry = newGeo;
        break;
      }
    }
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
