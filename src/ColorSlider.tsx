import { useState } from "react";
import { wrap } from "./utils/math/wrap";
import { clamp } from "./utils/math/clamp";

interface ColorSliderProps {
  open?: boolean;
  type: "h" | "s" | "v";
}

function pauseEvent(e: PointerEvent) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function ColorSlider(props: ColorSliderProps) {
  const loop = props.type === "h";
  const storageKey = `colorSlider-${props.type}`;
  const [isDown, setIsDown] = useState(false);
  let yReset: undefined | number;
  const [y, setY] = useState(
    parseFloat(localStorage.getItem(storageKey) || "0")
  );
  const onPointerMove = (ev: PointerEvent) => {
    pauseEvent(ev);
    if (yReset === undefined) {
      yReset = ev.clientY;
    } else {
      const newY = y + ev.clientY - yReset;
      setY(newY);
      localStorage.setItem(storageKey, newY.toString());
    }
  };
  const onPointerUp = (ev: PointerEvent) => {
    pauseEvent(ev);
    yReset = undefined;
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    setIsDown(false);
  };
  return (
    <div
      className={`color button ${props.type}`}
      onPointerDown={
        !isDown
          ? (ev) => {
              pauseEvent(ev.nativeEvent);
              console.log("down");
              document.addEventListener("pointermove", onPointerMove);
              document.addEventListener("pointerup", onPointerUp);
              setIsDown(true);
            }
          : undefined
      }
    >
      <div className="mask">
        <div
          className={`interior ${props.type}`}
          style={{ top: loop ? wrap(y, -420 + 60, 0) : clamp(-420 + 60, 0, y) }}
        ></div>
        <p>{props.type.toLocaleUpperCase()}</p>
      </div>
    </div>
  );
}

export default ColorSlider;
