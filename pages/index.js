import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "@/pages/backToTop";

import Context from "@/context/Context";

import HomePageContent from "@/components/HomePageContent";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const Home = () => {
  return (
    <>
      <PageHead title="Home Classic Lms - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleNine headerType="" />
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
