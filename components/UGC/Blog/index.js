import BlogData from "../../../data/blog/blog.json";
import BlogCard from "../BlogCard";

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

export default Blog;
