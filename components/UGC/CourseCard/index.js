import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ data }) => (
  <div
    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
    data-sal-delay="150"
    data-sal="slide-up"
    data-sal-duration="800"
  >
    <div className="rbt-card variation-03 rbt-hover">
      <div className="rbt-card-img">
        <Link className="thumbnail-link" href={`/course-details/${data.id}`}>
          <Image
            src={data.courseImg}
            width={355}
            height={244}
            alt="Card image"
          />
          <span className="rbt-btn btn-white icon-hover btn-md">
            <span className="btn-text">Read More</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        </Link>
      </div>
      <div className="rbt-card-body">
        <h4 className="rbt-card-title">
          <Link href={`/course-details/${data.id}`}>{data.courseTitle}</Link>
        </h4>
        <div className="rbt-card-bottom">
          <Link
            className="transparent-button"
            href={`/course-details/${data.id}`}
          >
            <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#27374D" fill="none" fillRule="evenodd">
                <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="card-information">
        <div className="card-flag">
          <Image
            src={data.countryFlag}
            width={21}
            height={21}
            alt="united-kingdom"
          />
        </div>
        <div className="card-count">{data.lesson} programs</div>
      </div>
    </div>
  </div>
);

export default CourseCard;
