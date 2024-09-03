import { Vector2, Vector3 } from "three";

export default interface IPlayerIntent {
  intent: "editStart" | "editMove" | "editEnd";
  position: Vector3;
  screenPos: Vector2;
}
