import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[28rem] max-h-[34rem] mx-auto my-38 p-14 rounded-2xl animate-scaling flex flex-col gap-8">
      <div>
        <label htmlFor="login__username" className="text-2xl">
          Username
        </label>
        <input type="text" id="login__username" />
      </div>

      <div className="relative">
        <label htmlFor="login__password">Password</label>
        <input type={showPassword ? "text" : "password"} id="login__password" />
        {showPassword ? (
          <FaEyeSlash
            className="absolute left-118 top-12 text-4xl cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaEye
            className="absolute left-118 top-12 text-4xl cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>

      <div>
        <button type="submit">Log in</button>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </form>
  );
}

export default Login;
