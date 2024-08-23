import { useState } from "react";
import SettingsButton from "./SettingsButton";
import SettingsMenuContent from "./SettingsMenuContent";
import { getGameEngine } from "./gameEngine";

function SettingsMenu() {
  const [open, setOpen] = useState(false);
  getGameEngine().renderer.domElement.className = open ? "blur" : "";
  return (
    <div className={`${open ? "settingsOpen" : "settingsClosed"} panel`}>
      <SettingsButton
        open={open}
        onClick={() => {
          setOpen(!open);
          getGameEngine().game.paused = !open;
        }}
      />
      {open && <SettingsMenuContent />}
    </div>
  );
}

export default SettingsMenu;
