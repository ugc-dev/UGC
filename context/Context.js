import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "@/supabase/supabaseClient";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [cartToggle, setCart] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [smallMobileMenu, setsmallMobileMenu] = useState(true);
  const [pricing, setPricing] = useState(true);
  const [pricingTwo, setPricingTwo] = useState(true);
  const [pricingThree, setPricingThree] = useState(true);
  const [pricingFour, setPricingFour] = useState(true);

  const [isLightTheme, setLightTheme] = useState(true);

  const [isLogin, setLogin] = useState(false);
  const [session, setSession] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
  }, [cart]);

  useEffect(() => {
    const themeType = localStorage.getItem("histudy-theme");
    if (themeType === "dark") {
      setLightTheme(false);
      document.body.classList.add("active-dark-mode");
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove("active-dark-mode");
      localStorage.setItem("histudy-theme", "light");
    } else {
      document.body.classList.add("active-dark-mode");
      localStorage.setItem("histudy-theme", "dark");
    }
  }, [isLightTheme]);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLogin(!!session);

      if (session) {
        const { data: profile, error: profileError } = await supabase
          .from("profile")
          .select("*")
          .eq("id", session?.user?.id);

        setUserProfile(profile[0]);
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLogin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error.message);
      return { success: false, message: error.message };
    }

    return { success: true, userProfile };
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
    }
  };

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <CreateContext.Provider
      value={{
        toggle,
        setToggle,
        mobile,
        setMobile,
        smallMobileMenu,
        setsmallMobileMenu,
        cartToggle,
        setCart,
        search,
        setSearch,
        pricing,
        setPricing,
        pricingTwo,
        setPricingTwo,
        pricingThree,
        setPricingThree,
        pricingFour,
        setPricingFour,
        isLightTheme,
        setLightTheme,
        toggleTheme,
        isLogin,
        setLogin,
        session,
        setSession,
        handleLogin,
        handleLogout,
        userProfile,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
