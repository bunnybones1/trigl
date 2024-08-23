import { useState } from "react";
import { wrap } from "./utils/math/wrap";

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
  const [isDown, setIsDown] = useState(false);
  let yReset: undefined | number;
  const [y, setY] = useState(0);
  const onPointerMove = (ev: PointerEvent) => {
    pauseEvent(ev);
    if (yReset === undefined) {
      yReset = ev.clientY;
    } else {
      setY(y + ev.clientY - yReset);
    }
    console.log(yReset);
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
        <div className="interior" style={{ top: wrap(y, -420 + 60, 0) }}></div>
        <p>{props.type.toLocaleUpperCase()}</p>
      </div>
    </div>
  );
}

export default ColorSlider;
