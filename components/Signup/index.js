import React, { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/supabase/supabaseClient";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { user_name: username } },
    });

    if (error) {
      setError(error.message);
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
              <h3 className="title">Register</h3>
              <form className="max-width-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="register-email"
                    type="email"
                    placeholder="Email address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group">
                  <input
                    name="register_user"
                    type="text"
                    placeholder="Username *"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group">
                  <input
                    name="register_password"
                    type="password"
                    placeholder="Password *"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group">
                  <input
                    name="register_conpassword"
                    type="password"
                    placeholder="Confirm Password *"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>

                {error && <p className="error">{error}</p>}

                <div className="form-submit-group">
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Register</span>
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
                  Already have an account ? <Link href="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
