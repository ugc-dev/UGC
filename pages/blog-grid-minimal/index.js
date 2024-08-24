import { useEffect } from "react";
import { Provider } from "react-redux";
import sal from "sal.js";

import BlogData from "../../data/blog/blog.json";

import PageHead from "../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogGridMinimal from "@/components/Blogs/BlogGridMinimal";

const BlogGridMinimalLayout = () => {
  let getBlog = JSON.parse(JSON.stringify(BlogData.blogGrid));

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <PageHead title="Blog Grid - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner col="col-lg-12" text="All Blog" getBlog={getBlog} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogGridMinimal
                isPagination={true}
                top={true}
                start={0}
                end={9}
              />
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogGridMinimalLayout;
