import HomeCourses from "@/components/01-Main-Demo/Home-Sections/HomeCourse";
import BlogGrid from "@/components/Blogs/BlogGrid";
import BrandThree from "@/components/Brand/Brand-Three";
import CounterSix from "@/components/Counters/Counter-Six";
import Instagram from "@/components/Instagram/Instagram";
import Service from "@/components/Services/Service";
import ServiceSaven from "@/components/Services/Service-Saven";
import TeamEight from "@/components/Team/TeamEight";
import TestimonialFour from "@/components/Testimonials/Testimonial-Four";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

const BannerSection = () => (
  <div className="rbt-banner-area rbt-banner-1 variation-2 height-850">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-8">
          <div className="content">
            <div className="inner">
              <div className="rbt-new-badge rbt-new-badge-one">
                <span className="rbt-new-badge-icon">🏆</span> The Leader in
                Online Learning
              </div>
              <h1 className="title">
                The Largest{" "}
                <span className="color-primary">Online Learning</span> Platform
                for Drive Your Career.
              </h1>
              <p className="description">
                This template includes all the necessary pages of the
                onlineLorem. And you can be build Link{" "}
                <strong>education template easily</strong>.
              </p>
              <div className="slider-btn">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Course</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="content">
            <div className="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
              <HomeCourses start={0} end={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CategoriesSection = () => (
  <div className="rbt-categories-area bg-color-white">
    <div className="container">
      <div className="rbt-brand-area bg-color-white rbt-section-gap">
        <BrandThree />
      </div>
    </div>
    <div className="container">
      <div className="row g-5 align-items-start mb--30">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="section-title">
            <h4 className="title">Popular Creators this week.</h4>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="read-more-btn text-start text-md-end">
            <Link
              className="rbt-btn rbt-switch-btn bg-primary-opacity btn-sm"
              href="#"
            >
              <span data-text="View All">View All</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <TeamEight head={false} />
      </div>
    </div>
  </div>
);

const CounterSection = () => (
  <div className="rbt-counterup-area bg-color-white rbt-section-gap">
    <CounterSix />
  </div>
);

const ServiceSection = () => (
  <>
    <div className="rbt-service-area bg-color-white">
      <ServiceSaven isTitle={true} />
    </div>
    <div className="rbt-service-area bg-color-white rbt-section-gapTop">
      <Service />
    </div>
  </>
);

const TestimonialSection = () => (
  <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
    <TestimonialFour />
  </div>
);

const BlogSection = () => (
  <div className="rbt-rbt-blog-area rbt-section-gapTop bg-color-white">
    <div className="container">
      <div className="row mb--55 g-5 align-items-end">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="section-title text-start">
            <span className="subtitle bg-pink-opacity">Top News</span>
            <h2 className="title">
              Have a look on <span className="color-primary">our News</span>
            </h2>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="load-more-btn text-start text-md-end">
            <Link
              className="rbt-btn rbt-switch-btn bg-primary-opacity"
              href="/blog-list"
            >
              <span data-text="View All News">View All News</span>
            </Link>
          </div>
        </div>
      </div>
      <BlogGrid isPagination={false} top={false} start={4} end={7} />
    </div>
  </div>
);

const InstagramSection = () => (
  <div className="rbt-instagram-area bg-color-white rbt-section-gapTop">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb--60">
          <div className="section-title text-center">
            <span className="subtitle bg-secondary-opacity">Instagram</span>
            <h2 className="title">
              Follow Histudy On <span className="color-primary">Instagram</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <Instagram />
  </div>
);

const HomePageContent = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <BannerSection />
      <CategoriesSection />
      <CounterSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
      <InstagramSection />
    </>
  );
};

export default HomePageContent;
