import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";

import HeaderSeven from "./Headers/Header-Seven";

const HeaderStyle = ({ headerSticky }) => {
  const { isLightTheme, toggleTheme, isLogin } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-10">
        <HeaderSeven
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
          btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
          btnText="Join Now"
        />
      </header>
    </>
  );
};
export default HeaderStyle;
