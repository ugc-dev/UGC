import Link from "next/link";
import User from "../Offcanvas/User";
import { useAppContext } from "@/context/Context";

const HeaderRightTwo = () => {
  const { mobile, setMobile, userProfile } = useAppContext();
  return (
    <div className="header-right">
      <ul className="quick-access">
        <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href="#">
            <i className="feather-user"></i>
            {userProfile?.display_name || "Admin"}
          </Link>
          <User />
        </li>

        <li className="access-icon rbt-user-wrapper d-block d-xl-none">
          <Link className="rbt-round-btn" href="#">
            <i className="feather-user"></i>
          </Link>
          <User />
        </li>
      </ul>

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightTwo;
