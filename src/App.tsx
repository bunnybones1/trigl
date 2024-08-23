import "./App.css";
import ColorSlider from "./ColorSlider";
import SettingsMenu from "./SettingsMenu";
function App() {
  return (
    <>
      <SettingsMenu />
      <ColorSlider type="h" />
      <ColorSlider type="s" />
      <ColorSlider type="v" />
    </>
  );
}

export default App;
