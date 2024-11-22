import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "@/pages/backToTop";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyle from "@/components/Header/HeaderStyle";
import HomePageContent from "@/components/HomePageContent";

const Home = () => {
  return (
    <>
      <PageHead title="Home Classic Lms - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyle headerSticky="rbt-sticky" headerType="" />
          <HomePageContent />
          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default Home;
