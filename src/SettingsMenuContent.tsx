import { AddToQueue, RemoveFromQueue } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import { useState } from "react";
import SettingsMenuTitle from "./SettingsMenuTitle";
import { renderMetrics } from "./renderMetrics";
import { userSettings } from "./userSettings";

const marks = [
  {
    value: 1,
    label: "low"
  },
  {
    value: 2,
    label: "medium"
  },
  {
    value: 3,
    label: "high"
  }
];

function SettingsMenuContent() {
  const [graphicsResolution, setGraphicsResolution] = useState(
    userSettings.graphicsResolution()
  );
  return (
    <div className="settingsMenuContent">
      <SettingsMenuTitle label="Settings" />
      Graphics Resolution
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <RemoveFromQueue />
        <Slider
          aria-label="Graphics Resolution"
          value={graphicsResolution}
          step={null}
          marks={marks}
          min={1}
          max={3}
          onChange={(_mouseEvent, value) => {
            if (typeof value === "number") {
              localStorage.setItem("graphicsResolution", value.toString());
              setGraphicsResolution(value);
              renderMetrics.pixelDownsample.value = value;
            }
          }}
        />
        <AddToQueue />
      </Stack>
    </div>
  );
}

export default SettingsMenuContent;
