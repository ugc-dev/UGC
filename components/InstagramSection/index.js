import React from "react";
import Instagram from "../Instagram/Instagram";

const InstagramSection = () => {
  return (
    <div className="rbt-instagram-area bg-color-white rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--60">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">Instagram</span>
              <h2 className="title">
                Follow Histudy On{" "}
                <span className="color-primary">Instagram</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
    </div>
  );
};

export default InstagramSection;
