import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <form className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[28rem] mx-auto my-34 p-14 rounded-2xl animate-scaling flex flex-col gap-8">
      <div>
        <label htmlFor="sign-up__username" className="text-2xl">
          Username
        </label>
        <input type="text" id="sign-up__username" />
      </div>

      <div className="relative">
        <label htmlFor="sign-up__password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="sign-up__password"
        />
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

      <div className="relative">
        <label htmlFor="sign-up__confirm-password">Confirm Password</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="sign-up__confirm-password"
        />
        {showConfirmPassword ? (
          <FaEyeSlash
            className="absolute left-118 top-12 text-4xl cursor-pointer"
            onClick={() => setShowConfirmPassword(false)}
          />
        ) : (
          <FaEye
            className="absolute left-118 top-12 text-4xl cursor-pointer"
            onClick={() => setShowConfirmPassword(true)}
          />
        )}
      </div>

      <div>
        <button type="submit">Sign up</button>
        <button type="button" onClick={() => navigate(-1)}>
          Back to login
        </button>
      </div>
    </form>
  );
}

export default SignUp;
