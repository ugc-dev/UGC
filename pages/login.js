import Login from "@/components/Login";
import React from "react";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyle from "@/components/Header/HeaderStyle";
import FooterOne from "@/components/Footer/Footer-One";

const login = () => {
  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyle headerSticky="rbt-sticky" headerType="" />
        <Login />
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default login;
