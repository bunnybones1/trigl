import { useState } from "react";
import "./App.css";
import ColorSlider from "./ColorSlider";
import SettingsMenu from "./SettingsMenu";
function App() {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <>
      <SettingsMenu />
      <ColorSlider
        type="h"
        hue={hue}
        saturation={saturation}
        value={value}
        setVal={setHue}
      />
      <ColorSlider
        type="s"
        hue={hue}
        saturation={saturation}
        value={value}
        setVal={setSaturation}
      />
      <ColorSlider
        type="v"
        hue={hue}
        saturation={saturation}
        value={value}
        setVal={setValue}
      />
    </>
  );
}

export default App;
