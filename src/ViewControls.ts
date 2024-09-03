import { type OrthographicCamera, Vector3 } from "three";
import KeyboardNavigation3D from "./KeyboardNavigation3D";

const tempVec3 = new Vector3(0, 0, -1);

type TouchJob = "move" | "look" | "fly";
const __touchMovementIntentionNormalized = new Vector3();

export default class ViewControls {
  stopLookingAround() {
    this.onMouseUp();
  }
  lastMouseX: number | null = null;
  lastMouseY: number | null = null;
  keyNav: KeyboardNavigation3D;
  movement = new Vector3();
  touchMovementIntention = new Vector3();
  movementEased = new Vector3();
  movementEasedRotated = new Vector3();
  mouseDown = false;
  touchesJobs = new Map<number, TouchJob>();
  touchesDown = new Map<number, boolean>();
  lastTouchesX = new Map<number, number>();
  lastTouchesY = new Map<number, number>();
  paused = false;
  constructor(
    private _camera: OrthographicCamera,
    private _canvas: HTMLCanvasElement,
    private _speed = 1
  ) {
    this.keyNav = new KeyboardNavigation3D();

    this.adjustZoom(1, 0, 0);

    _canvas.addEventListener("mousedown", this.onMouseDown);
    _canvas.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("touchmove", this.onTouchMove);
    window.addEventListener("touchend", this.onTouchEnd);
    document.addEventListener("mouseup", this.onMouseUp);

    document.addEventListener("wheel", this.onWheel);
  }
  onWheel = (event: WheelEvent) => {
    if (this.paused) {
      return;
    }
    const zoom = 1 + event.deltaY * 0.001;
    this.adjustZoom(zoom, event.clientX, event.clientY);
  };
  private adjustZoom(zoom: number, x: number, y: number) {
    const cam = this._camera;

    const width = cam.right - cam.left;
    const centerX = cam.left + (width * x) / window.innerWidth;
    cam.left -= centerX;
    cam.left *= zoom;
    cam.left += centerX;
    cam.right -= centerX;
    cam.right *= zoom;
    cam.right += centerX;

    const height = cam.top - cam.bottom;
    const centerY = cam.top - (height * y) / window.innerHeight;
    cam.bottom -= centerY;
    cam.bottom *= zoom;
    cam.bottom += centerY;
    cam.top -= centerY;
    cam.top *= zoom;
    cam.top += centerY;

    const dist = height * 0.5;

    cam.near = -dist * 0.99;
    cam.far = dist * 200;
    cam.position.z = -dist;
    cam.updateMatrixWorld();

    this._camera.updateProjectionMatrix();
  }
  private panCamera(deltaX: number, deltaY: number) {
    const cam = this._camera;
    const offsetX = (deltaX / window.innerWidth) * (cam.right - cam.left);
    cam.left -= offsetX;
    cam.right -= offsetX;

    const offsetY = (deltaY / window.innerHeight) * (cam.top - cam.bottom);
    cam.top += offsetY;
    cam.bottom += offsetY;

    cam.updateProjectionMatrix();
  }

  private onMouseDown = (event: MouseEvent) => {
    if (this.paused) {
      return;
    }
    this.mouseDown = true;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
    window.addEventListener("mousemove", this.onMouseMove);
  };

  private onTouchStart = (event: TouchEvent) => {
    if (this.paused) {
      return;
    }
    for (const t of event.touches) {
      const id = t.identifier;

      this.touchesDown.set(id, true);
      this.lastTouchesX.set(id, t.clientX);
      this.lastTouchesY.set(id, t.clientY);
      if (
        t.clientX < window.innerWidth * 0.15 ||
        t.clientX > window.innerWidth * 0.85
      ) {
        this.touchesJobs.set(id, "fly");
      } else if (t.clientY > window.innerHeight * 0.5) {
        this.touchesJobs.set(id, "move");
      } else {
        this.touchesJobs.set(id, "look");
      }
    }
  };

  private onMouseUp = () => {
    if (this.paused) {
      return;
    }
    this.mouseDown = false;
    this.lastMouseX = null;
    this.lastMouseY = null;
    window.removeEventListener("mousemove", this.onMouseMove);
  };

  private onTouchEnd = (_event: TouchEvent) => {
    if (this.paused) {
      return;
    }
    const trackedIds = Array.from(this.touchesDown.keys());
    const eventIds: number[] = [];

    for (const t of _event.touches) {
      const id = t.identifier;
      eventIds.push(id);
    }
    for (const id of trackedIds) {
      if (!eventIds.includes(id)) {
        this.touchesDown.delete(id);
        const job = this.touchesJobs.get(id);
        switch (job) {
          case "move": {
            this.touchMovementIntention.x = 0;
            this.touchMovementIntention.z = 0;
            break;
          }
          case "fly": {
            this.touchMovementIntention.y = 0;
            break;
          }
        }
        this.touchesJobs.delete(id);
        this.lastTouchesX.delete(id);
        this.lastTouchesY.delete(id);
      }
    }
  };

  private onMouseMove = (event: MouseEvent) => {
    if (this.paused) {
      return;
    }
    if (this.lastMouseX !== null && this.lastMouseY !== null) {
      const deltaX = event.clientX - this.lastMouseX;
      const deltaY = event.clientY - this.lastMouseY;
      this.panCamera(deltaX, deltaY);
    }
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  };

  private onTouchMove = (event: TouchEvent) => {
    if (this.paused) {
      return;
    }
    for (const t of event.touches) {
      const id = t.identifier;
      if (
        this.touchesDown.has(id) &&
        this.lastTouchesX.has(id) &&
        this.lastTouchesY.has(id)
      ) {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        const deltaX = t.clientX - this.lastTouchesX.get(id)!;
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        const deltaY = t.clientY - this.lastTouchesY.get(id)!;
        this.lastTouchesX.set(id, t.clientX);
        this.lastTouchesY.set(id, t.clientY);
        const job = this.touchesJobs.get(id);
        switch (job) {
          case "look": {
            this.panCamera(deltaX, deltaY);
            break;
          }
          case "move": {
            this.touchMovementIntention.x += deltaX;
            this.touchMovementIntention.z += deltaY;
            break;
          }
          case "fly": {
            this.touchMovementIntention.y -= deltaY;
            break;
          }
        }
      }
    }
  };

  simulate() {
    const ki = this.keyNav.intention;
    this.movement.x = (ki.strafeLeft ? -1 : 0) + (ki.strafeRight ? 1 : 0);
    this.movement.y = (ki.down ? -1 : 0) + (ki.up ? 1 : 0);
    this.movement.z = (ki.forward ? -1 : 0) + (ki.back ? 1 : 0);
    __touchMovementIntentionNormalized
      .copy(this.touchMovementIntention)
      .normalize();

    this.movement.add(__touchMovementIntentionNormalized);
    this.movement.multiplyScalar((ki.run ? 0.2 : 0.1) * this._speed);
    this.movementEased.lerp(this.movement, 0.1);
    this.movementEasedRotated
      .copy(this.movementEased)
      .applyQuaternion(this._camera.quaternion);
    this._camera.position.add(this.movementEasedRotated);
    this._camera.updateMatrix();
    tempVec3.set(0, 0, -1).applyMatrix4(this._camera.matrix);
    this._camera.lookAt(tempVec3);
    this._camera.updateMatrix();
    this._camera.updateMatrixWorld();
  }
  cleanup() {
    this._canvas.removeEventListener("mousedown", this.onMouseDown);
    this._canvas.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchEnd);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("wheel", this.onWheel);
  }
}
