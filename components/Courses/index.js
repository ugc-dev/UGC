import CourseCard from "../CourseCard";

const Courses = ({ courses }) => (
  <div className="rbt-course-card-area rbt-section-gap bg-color-white">
    <div className="container">
      <div className="row align-items-center mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-pink-opacity">
              Our Language Courses
            </span>
            <h2 className="title">Language Courses</h2>
            <p className="description has-medium-font-size mt--20">
              Language Academy Courses?
            </p>
          </div>
        </div>
      </div>
      <div className="row g-5">
        {courses.map((data, index) => (
          <CourseCard key={index} data={data} />
        ))}
      </div>
    </div>
  </div>
);

export default Courses;
