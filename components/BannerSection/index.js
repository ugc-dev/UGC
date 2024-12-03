import Link from "next/link";
import HomeCourses from "../Home-Sections/HomeCourse";

const BannerSection = () => {
  return (
    <div className="rbt-banner-area rbt-banner-1 variation-2 height-850">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="content">
              <div className="inner">
                <blockquote className="rbt-new-badge rbt-new-badge-one">
                  <span className="rbt-new-badge-icon">🎨</span> Empowering
                  Creativity, Connecting Brands with Authentic Voices
                </blockquote>
                <h1 className="title">
                  Your Creative{" "}
                  <span className="color-primary">Marketplace</span> for UGC
                  Content in Morocco
                </h1>
                <p className="description">
                  Connect with talented creators and collaborate on content that
                  elevates your brand.
                </p>
                <div className="slider-btn">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="#explore-creators"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Discover Creators</span>
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
};

export default BannerSection;
