import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/Context";

const Login = () => {
  const { handleLogin, isLogin } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleLogin(email, password);
    if (!result.success) {
      setError(result.message);
    } else {
      setError(null);
      router.push("/");
    }
  };

  return (
    <div className="rbt-banner-area rbt-banner-1 variation-2 height-950">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <h3 className="title">Login</h3>
              <form className="max-width-auto" onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password *"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>

                {error && <p className="error">{error}</p>}

                <div className="row mb--30">
                  <div className="col-lg-6">
                    <div className="rbt-checkbox">
                      <input
                        type="checkbox"
                        id="rememberme"
                        name="rememberme"
                      />
                      <label htmlFor="rememberme">Remember me</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rbt-lost-password text-end">
                      <Link className="rbt-btn-link" href="#">
                        Lost your password?
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="form-submit-group">
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Log In</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>
                  Don&apos;t have an account ?{" "}
                  <Link href="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
