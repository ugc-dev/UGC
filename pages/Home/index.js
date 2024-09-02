import PageHead from "../Head";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

const Home = () => {
  return (
    <>
      <PageHead title="Home - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MainDemo />
        </Context>
      </Provider>
    </>
  );
};

export default Home;
