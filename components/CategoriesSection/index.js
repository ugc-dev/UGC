import Link from "next/link";
import TeamEight from "../Team/TeamEight";
import BrandThree from "../Brand/Brand-Three";

const CategoriesSection = () => {
  return (
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
};

export default CategoriesSection;
