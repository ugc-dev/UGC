import { useEffect, useState } from "react";

import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Pagination from "@/components/Common/Pagination";
import FooterOne from "@/components/Footer/Footer-One";

import CourseDetails from "../../data/course-details/courseData.json";
import BackToTop from "../backToTop";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import CourseCardThree from "@/components/Category/Filter/CourseCard-Three";

const CourseCardThreeLayout = () => {
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
  );

  const startIndex = (page - 1) * 6;

  const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(getAllCourse);
    setTotalPages(Math.ceil(getAllCourse.length / 6));
  }, [setTotalPages, setCourse]);

  return (
    <>
      <PageHead title="Course Five - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHead category={getAllCourse} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row g-5">
                <CourseCardThree course={getSelectedCourse} />
              </div>

              {getAllCourse.length > 6 ? (
                <div className="row">
                  <div className="col-lg-12 mt--60">
                    <Pagination
                      totalPages={totalPages}
                      pageNumber={page}
                      handleClick={handleClick}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
            <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
          </div>

          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CourseCardThreeLayout;
