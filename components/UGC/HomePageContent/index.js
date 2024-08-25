import React, { useEffect } from "react";
import sal from "sal.js";
import Banner from "../Banner";
import Categories from "../Categories";
import Courses from "../Courses";
import WhyChooseUs from "../WhyChooseUs";
import About from "../About";
import Countdown from "../Countdown";
import Blog from "../Blog";

import CourseDetails from "../../../data/course-details/courseData.json";

const HomePageContent = () => {
  const getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.languageAcademy)
  );

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <Banner />
      <Categories />
      <Courses courses={getAllCourse} />
      <WhyChooseUs />
      <About />
      <Countdown />
      <Blog />
    </>
  );
};

export default HomePageContent;
