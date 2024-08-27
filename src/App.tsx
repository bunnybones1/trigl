import { useState } from "react";
import "./App.css";
import ColorSlider from "./ColorSlider";
import SettingsMenu from "./SettingsMenu";
import { getLocalNumber, setLocalNumber } from "./utils/localNumber";
function App() {
  function useStoredState(subKey: string, defaultVal: number = 0) {
    const key = `color-${subKey}`;
    const [val, setVal] = useState(getLocalNumber(key, defaultVal));
    const wrappedSetValue = (val: React.SetStateAction<number>) => {
      setVal(val);
      const num = val.valueOf();
      if (typeof num === "number") {
        setLocalNumber(key, num);
        console.log(num);
      }
    };
    return [val, wrappedSetValue] as const;
  }
  const [hue, setHue] = useStoredState("hue");
  const [saturation, setSaturation] = useStoredState("saturation");
  const [value, setValue] = useStoredState("value");
  return (
    <>
      <SettingsMenu />
      <ColorSlider
        type="h"
        hue={hue}
        saturation={saturation}
        luminosity={value}
        setVal={setHue}
      />
      <ColorSlider
        type="s"
        hue={hue}
        saturation={saturation}
        luminosity={value}
        setVal={setSaturation}
      />
      <ColorSlider
        type="l"
        hue={hue}
        saturation={saturation}
        luminosity={value}
        setVal={setValue}
      />
    </>
  );
}

export default App;
