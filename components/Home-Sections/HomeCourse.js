import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
        className="swiper-wrapper course-swiper"
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
      >
        {courseDetails &&
          courseDetails.slice(start, end).map((data, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="course-card" id={`course-${data.id}`}>
                <video
                  src={data.video}
                  autoPlay
                  loop
                  muted
                  className="course-video"
                />
                <div className="course-overlay">
                  <div className="creator-name">{data.creatorName}</div>
                  <button className="learn-more-btn">Learn More</button>
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
