import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderRightTwo from "../Header-Right/HeaderRight-Two";
import Search from "../Offcanvas/Search";
import Category from "../Category/Category";
import Nav from "../Nav";

import logo from "../../../public/images/logo/logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";
import { useAppContext } from "@/context/Context";

const HeaderSeven = ({
  headerType,
  gapSpaceBetween,
  sticky,
  headerSticky,
  navigationEnd,
  container,
  btnClass,
  btnText,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const { isLightTheme, session, userProfile } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RightBtn = () => {
    if (session !== null) {
      if (session) {
        return <HeaderRightTwo userProfile={userProfile} />;
      } else {
        return (
          <Link href="/signup" className={`rbt-btn ${btnClass}`}>
            <span data-text={`${btnText}`}>{btnText}</span>
          </Link>
        );
      }
    } else {
      return (
        <Link href="/signup" className={`rbt-btn ${btnClass}`}>
          <span data-text={`${btnText}`}>{btnText}</span>
        </Link>
      );
    }
  };
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky}  ${
          !headerType && isSticky ? `${headerSticky}` : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    {isLightTheme ? (
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    ) : (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    )}
                  </Link>
                </div>
              </div>

              <div className="header-info d-none d-lg-block">
                <Category />
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
            <RightBtn />
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeaderSeven;
