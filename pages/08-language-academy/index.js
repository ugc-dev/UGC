import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HomePageContent from "@/components/08-language-academy/LanguageAcademy";
import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";
import FooterOne from "@/components/Footer/Footer-One";

const HomePage = () => {
  return (
    <>
      <PageHead title="UGChub - Elevate Your Brand with Top UGC Creators" />
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
