import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "@/pages/backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HomePageContent from "@/components/UGC/HomePageContent";
import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";
import FooterOne from "@/components/Footer/Footer-One";

const HomePage = () => {
  return (
    <>
      <PageHead title="Connect with Top UGC Creators and Elevate Your Brand" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEight headerSticky="rbt-sticky" />
          <Cart />

          <HomePageContent />

          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default HomePage;
