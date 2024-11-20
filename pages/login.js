import Login from "@/components/Login";
import React from "react";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

const login = () => {
  return (
    <Provider store={Store}>
      <Context>
        <Login />
      </Context>
    </Provider>
  );
};

export default login;
