import BlogGrid from "../Blogs/BlogGrid";
import Link from "next/link";

const BlogSection = () => {
  return (
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
};

export default BlogSection;
