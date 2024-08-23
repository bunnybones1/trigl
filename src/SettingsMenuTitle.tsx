type SettingsMenuTitleProps = { label: string };

function SettingsMenuTitle(props: SettingsMenuTitleProps) {
  return <div className="settingsMenuTitle">{props.label}</div>;
}

export default SettingsMenuTitle;
