import { useState } from "react";
import { wrap } from "./utils/math/wrap";
import { clamp } from "./utils/math/clamp";
import { generateCssGradient } from "./utils/generateCssGradient";

const labels = {
  h: "Hue",
  s: "Sat",
  l: "Lum"
};
interface ColorSliderProps {
  open?: boolean;
  type: "h" | "s" | "l";
  hue: number;
  saturation: number;
  luminosity: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
}

function pauseEvent(e: PointerEvent) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function ColorSlider(props: ColorSliderProps) {
  const { hue, saturation, luminosity: value, setVal, type } = props;
  const loop = type === "h";
  const reverse = type !== "h";
  const storageKey = `colorSlider-${type}`;
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
      const newY = y + (ev.clientY - yReset) * (reverse ? -1 : 1);
      const adjustedY = loop ? wrap(newY, -360, 0) : clamp(-420 + 60, 0, newY);
      setY(adjustedY);
      setVal(adjustedY);
      localStorage.setItem(storageKey, adjustedY.toFixed(0));
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
      className={`color button ${type}`}
      onPointerDown={
        !isDown
          ? (ev) => {
              pauseEvent(ev.nativeEvent);
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
          style={{
            top: y,
            backgroundImage: generateCssGradient(type, hue, saturation, value)
          }}
        ></div>
        <p>{labels[props.type]}</p>
      </div>
    </div>
  );
}

export default ColorSlider;
