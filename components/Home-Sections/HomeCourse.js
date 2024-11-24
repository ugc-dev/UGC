import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";

import MainDemoData from "../../data/course-details/courseData.json";

const courseDetails = [
  {
    id: 1,
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    creatorName: "John Doe",
  },
  {
    id: 2,
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    creatorName: "Jane Smith",
  },
  {
    id: 3,
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    creatorName: "Ali Khan",
  },
  {
    id: 4,
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    creatorName: "Maria Garcia",
  },
];

const HomeCourses = ({ start, end }) => {
  return (
    <>
      <Swiper
        className="swiper-wrapper"
        effect={"cards"}
        modules={[Pagination, Autoplay]}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        loop={true}
        spaceBetween={0}
        style={{
          height: 650,
          // width: 450,
          marginTop: 90,
        }}
      >
        {MainDemoData &&
          courseDetails.slice(0, 4).map((data, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                style={{
                  position: "relative",
                  // width: 300,
                }}
                id={`course-${data.id}`}
              >
                <video
                  // src="https://www.w3schools.com/html/mov_bbb.mp4"
                  src={data.video}
                  autoPlay
                  loop
                  muted
                  style={{
                    width: 350,
                    height: 600,
                    objectFit: "fill",
                    padding: 5,
                    backgroundColor: "#9fb6fc",
                    borderRadius: 8,
                  }}
                ></video>
                {/* Overlay Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    display: "flex",
                    justifyContent: "space-around",
                    width: "350px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    {/* Yassine - {index + 1} */}
                    {data.creatorName}
                  </div>
                  <button
                    style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      padding: "5px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="rbt-swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default HomeCourses;
