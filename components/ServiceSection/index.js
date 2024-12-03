import React from "react";
import ServiceSaven from "../Services/Service-Saven";
import Service from "../Services/Service";

const ServiceSection = () => {
  return (
    <>
      <div className="rbt-service-area bg-color-white">
        <ServiceSaven isTitle={true} />
      </div>
      <div className="rbt-service-area bg-color-white rbt-section-gapTop">
        <Service />
      </div>
    </>
  );
};

export default ServiceSection;
