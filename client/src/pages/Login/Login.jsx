import { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import loginScene from "../../assets/login/login-scene.svg";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // This is a fixed, non-scrolling auth screen by design — lock the
  // document's own scroll while it's mounted (a CSS class, not inline
  // styles, so a small-screen fallback in Login.css can still apply),
  // and restore it on unmount.
  useEffect(() => {
    document.documentElement.classList.add("login-no-scroll");
    document.body.classList.add("login-no-scroll");

    return () => {
      document.documentElement.classList.remove("login-no-scroll");
      document.body.classList.remove("login-no-scroll");
    };
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <AuthLayout>
      <section className="login-page">
        <div className="login-blob blob-one"></div>
        <div className="login-blob blob-two"></div>

        <div className="login-container">

          {/* LEFT SIDE */}
          <div className="login-left">

            <span className="login-badge">
              🔐 Secure Login
            </span>

            <div className="login-header">
              <h1>
                Start Your Interview Journey  <span>🚀</span>
              </h1>

              <p>
                Practice smarter, improve faster, and land your dream job with AI-powered mock interviews.
              </p>
            </div>

            <div className="login-card">
              <form onSubmit={handleSubmit}>

                {/* Email */}
                <Input
                  label="Email"
                  icon={<FaEnvelope />}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />

                {/* Password */}
                <Input
                  label="Password"
                  icon={<FaLock />}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                >
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </Input>

                {/* Remember Me & Forgot Password */}
                <div className="login-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember Me</span>
                  </label>

                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button type="submit">
                  Login
                </Button>

                {/* Divider */}
                <div className="divider">
                  <span>OR</span>
                </div>

                {/* Google Button */}
                <Button type="button" variant="secondary">
                  <FaGoogle />
                  Continue with Google
                </Button>

                {/* Register Link */}
                <p className="register-link">
                  Don't have an account?
                  <Link to="/register"> Register</Link>
                </p>

              </form>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="login-right">
            <div className="scene-wrapper">
              <img
                src={loginScene}
                alt="Illustration of a cozy reading corner with a lamp, chair and plant"
                className="scene-image"
              />

              <span className="scene-particle p1"></span>
              <span className="scene-particle p2"></span>
              <span className="scene-particle p3"></span>
            </div>
          </div>

        </div>
      </section>
    </AuthLayout>
  );
}

export default Login;