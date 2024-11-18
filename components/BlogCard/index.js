import Image from "next/image";
import Link from "next/link";

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

export default BlogCard;
