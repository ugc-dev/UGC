import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import MainDemoBanner from "./MainDemoBanner";

const MainDemo = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner />
        </div>

        <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainDemo;
