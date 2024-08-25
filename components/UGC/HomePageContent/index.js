import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";
import { ParallaxProvider } from "react-scroll-parallax";

import BlogData from "../../../data/blog/blog.json";
import CourseDetails from "../../../data/course-details/courseData.json";

import client1 from "../../../public/images/testimonial/client-04.png";
import client2 from "../../../public/images/testimonial/client-05.png";
import client3 from "../../../public/images/testimonial/client-06.png";
import client4 from "../../../public/images/testimonial/client-12.png";
import languageClub from "../../../public/images/banner/language-club.png";

import CategoryFour from "@/components/Category/CategoryFour";
import Counter from "@/components/Counters/Counter";
import AboutTwo from "@/components/Abouts/About-Two";
import CountDownTwo from "@/components/Counters/CountDownTwo";

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

const ProfileShare = () => (
  <div className="rbt-like-total">
    <div className="profile-share">
      {[client1, client2, client3].map((client, index) => (
        <Link
          key={index}
          href="#"
          className="avatar"
          data-tooltip={`Client ${index + 1}`}
          tabIndex="0"
        >
          <Image src={client} width={55} height={55} alt="education" />
        </Link>
      ))}
      <div className="more-author-text">
        <h5 className="total-join-students">Join Over 3000+ Students</h5>
        <p className="subtitle">Have a new ideas every week.</p>
      </div>
    </div>
  </div>
);

const ButtonGroup = () => (
  <div className="rbt-button-group justify-content-start mt--30">
    <Link className="rbt-btn btn-gradient rbt-switch-btn" href="#">
      <span data-text="Sign Up Now">Sign Up Now</span>
    </Link>
    <Link className="rbt-btn btn-border rbt-switch-btn" href="#">
      <span data-text="Find Courses">Find Courses</span>
    </Link>
  </div>
);

const Thumbnail = () => (
  <div className="thumbnail-wrapper">
    <div className="thumbnail text-end">
      <Image
        src={languageClub}
        width={597}
        height={479}
        alt="Education Images"
      />
    </div>
    <div className="card-info bounce-slide">
      <div className="inner">
        <div className="name">
          Hillery. <span>/ USA</span>
        </div>
        <div className="rating-wrapper d-block d-sm-flex">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          <span>(Google Review)</span>
        </div>
      </div>
      <div className="notify-icon">
        <Image src={client4} width={100} height={100} alt="Client Images" />
      </div>
    </div>
  </div>
);

const Categories = () => (
  <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
    <div className="container">
      <div className="row g-5">
        <CategoryFour />
      </div>
    </div>
  </div>
);

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

const WhyChooseUs = () => (
  <div className="rbt-counterup-area rbt-section-gapBottom bg-gradient-1">
    <div className="container">
      <div className="row mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-primary-opacity">Why Choose Us</span>
            <h2 className="title">Why Choose Histudy</h2>
            <p className="description has-medium-font-size mt--20 mb--0">
              Language Academic?
            </p>
          </div>
        </div>
      </div>
      <Counter head={false} />
    </div>
  </div>
);

const About = () => (
  <div className="rbt-about-area about-style-1 rbt-section-gapTop pb--30 pb_md--80 pb_sm--80 bg-color-white">
    <div className="container">
      <ParallaxProvider>
        <AboutTwo />
      </ParallaxProvider>
    </div>
  </div>
);

const Countdown = () => (
  <div
    className="rbt-countdown-area bg_image bg_image--6 bg_image_fixed rbt-section-gap"
    data-black-overlay="5"
  >
    <div className="container">
      <CountDownTwo />
    </div>
  </div>
);

const Blog = () => (
  <div className="rbt-rbt-blog-area rbt-section-gap bg-gradient-1">
    <div className="container">
      <div className="row mb--55 row--30 align-items-end">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-pink-opacity">Our Posts</span>
            <h2 className="title">Histudy News</h2>
            <p className="description has-medium-font-size mt--20">
              Language Academy Blog.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-5">
        {BlogData.blogGrid.slice(0, 3).map((data, index) => (
          <BlogCard key={index} data={data} />
        ))}
      </div>
    </div>
  </div>
);

const BlogCard = ({ data }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
    <div className="rbt-card variation-02 rbt-hover">
      <div className="rbt-card-img">
        <Link href={`/blog-details/${data.id}`}>
          <Image
            src={data.img}
            width={450}
            height={267}
            priority
            alt="Card image"
          />
        </Link>
      </div>
      <div className="rbt-card-body">
        <h5 className="rbt-card-title">
          <Link href={`/blog-details/${data.id}`}>{data.title}</Link>
        </h5>
        <p className="rbt-card-text">{data.desc}</p>
        <div className="rbt-card-bottom">
          <Link
            className="transparent-button"
            href={`/blog-details/${data.id}`}
          >
            Learn More
            <i>
              <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#27374D" fill="none" fillRule="evenodd">
                  <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                  <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                </g>
              </svg>
            </i>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

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
