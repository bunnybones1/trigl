import { Vector3 } from "three";

export default interface IPlayerIntent {
  intent: "editStart" | "editMove" | "editEnd";
  position: Vector3;
}
