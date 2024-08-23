import { PerspectiveCamera, Raycaster, Vector2, Vector3 } from "three";
import Game from "./Game";
import ViewControls from "./ViewControls";
import { Signal } from "./utils/Signal";
import IPlayerIntent from "./types/IPlayerIntent";

const __tempVec2 = new Vector2();

const __playerBoundaryPoints: Vector3[] = [];
const __playerBoundaryPointsKeys: number[] = [];
const __playerBoundaryPointsMap = new Map<number, Vector3>();
for (let iz = -1; iz <= 1; iz++) {
  for (let iy = -1; iy <= 1; iy++) {
    for (let ix = -1; ix <= 1; ix++) {
      if (Math.abs(ix) === 1 || Math.abs(iy) === 1 || Math.abs(iz) === 1) {
        const vec = new Vector3(ix, iy, iz).normalize();
        __playerBoundaryPoints.push(vec);
        const key = iz * 100 + iy * 10 + ix;
        __playerBoundaryPointsMap.set(key, vec);
        __playerBoundaryPointsKeys.push(key);
      }
    }
  }
}

export default class Player {
  mvPlayerPos: Vector3;
  viewControls: ViewControls;
  playerIntentSignal = new Signal<IPlayerIntent>();
  constructor(
    private _game: Game,
    private _camera: PerspectiveCamera,
    canvas: HTMLCanvasElement
  ) {
    _camera.name = "player";

    this.viewControls = new ViewControls(_camera, canvas, 0.8);

    const mvPlayerPos = new Vector3();
    this.mvPlayerPos = mvPlayerPos;

    document.addEventListener("mousedown", this.startWorldEdit);
    document.addEventListener("mousemove", this.onMoveWorldEdit);
    document.addEventListener("mouseup", this.stopWorldEdit);
  }

  lastTimeClicked = 0;
  editting = false;
  startWorldEdit = (event: MouseEvent) => {
    const elapsed = event.timeStamp - this.lastTimeClicked;
    this.lastTimeClicked = event.timeStamp;
    if (elapsed > 300) {
      return;
    }
    this.editting = true;
    this.viewControls.stopLookingAround();
    this.makeCubeAtMouseEvent(event, "editStart");
  };
  raycaster = new Raycaster();
  private makeCubeAtMouseEvent(
    event: MouseEvent,
    intent: IPlayerIntent["intent"]
  ) {
    __tempVec2.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      (event.clientY / window.innerHeight) * -2 + 1
    );
    this.raycaster.setFromCamera(__tempVec2, this._camera);
    const position = this.raycaster.ray.origin
      .clone()
      .add(this.raycaster.ray.direction);
    this.playerIntentSignal.emit({ intent, position });
  }
  onMoveWorldEdit = (event: MouseEvent) => {
    if (!this.editting) {
      return;
    }
    this.makeCubeAtMouseEvent(event, "editMove");
  };
  stopWorldEdit = (event: MouseEvent) => {
    if (!this.editting) {
      return;
    }
    this.editting = false;
    this.makeCubeAtMouseEvent(event, "editEnd");
  };

  time = 0;

  simulate = (dt: number) => {
    this.time += dt;
    this.viewControls.simulate();
  };
  cleanup = () => {
    document.removeEventListener("mousedown", this.startWorldEdit);
    document.removeEventListener("mousemove", this.onMoveWorldEdit);
    document.removeEventListener("mouseup", this.stopWorldEdit);
    this.viewControls.cleanup();
  };
}
