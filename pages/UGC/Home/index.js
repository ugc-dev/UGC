import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "@/pages/backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HomePageContent from "@/components/UGC/HomePageContent";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import Separator from "@/components/Common/Separator";

const HomePage = () => {
  return (
    <>
      <PageHead title="Home Classic Lms - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleNine headerType="" />
          <HomePageContent />
          <Cart />
          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default HomePage;
