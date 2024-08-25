import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileShare from "../ProfileShare";
import ButtonGroup from "../ButtonGroup";
import Thumbnail from "../Thumbnail";

const Banner = () => (
  <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
    <div className="wrapper w-100">
      <div className="container">
        <div className="row g-5 justify-content-between align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="content">
              <div className="inner">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h1 className="title">
                  Innovative
                  <span className="theme-gradient">Language Academic</span>
                  Platform for Your Career.
                </h1>
                <ProfileShare />
                <ButtonGroup />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <Thumbnail />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
