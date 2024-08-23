import { DirectionsRun } from "@mui/icons-material";

type SettingsMenuLinkProps = { label: string; href: string };

function SettingsMenuLink(props: SettingsMenuLinkProps) {
  return (
    <div className="settingsMenuLink">
      <a href={props.href}>
        <DirectionsRun />
        {props.label}
      </a>
    </div>
  );
}

export default SettingsMenuLink;
