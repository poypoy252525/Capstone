import "./LoginPage.css";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import back from "../../assets/back-icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="hero container" style={{ width: "100vw" }}>
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#"> Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don`t have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
        <img src={back} alt="" className="back" />
      </div>
    </div>
  );
};

export default Login;
