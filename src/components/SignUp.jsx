import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AUTH_ACTIONS, useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const { CREATE_ACCOUNT } = AUTH_ACTIONS;

  const { users, dispatch } = useAuth();

  const checkUsernameAvailable = (value) => {
    return (
      !users.some(
        (user) => value.toLowerCase() === user.username.toLowerCase()
      ) || "Username is already taken"
    );
  };

  function onSubmit({ username, password }) {
    dispatch({ type: CREATE_ACCOUNT, payload: { username, password } });
    toast.success(
      `Congratulations!
      Your account has been successfully created!`,
      { duration: 4300 }
    );
    navigate("/login", { replace: true });
  }

  return (
    <form
      className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[28rem] mx-auto my-22 p-14 rounded-2xl animate-scaling flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="sign-up__username" className="text-2xl">
          Username
        </label>
        <input
          type="text"
          id="sign-up__username"
          placeholder="Choose a unique username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 2,
              message: "Username must contain minimum 2 characters",
            },
            validate: checkUsernameAvailable,
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div className="relative">
        <label htmlFor="sign-up__password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="sign-up__password"
          placeholder="Enter a strong password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must contain no more than 20 characters",
            },
            pattern: {
              value: /^(?=.*\d)[A-Za-z\d@$!%*?&]{4,20}$/,
              message:
                "Password must contain at least one digit and only letters, numbers, and @$!%*?&",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
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
          placeholder="Re-enter your password"
          {...register("confirmPassword", {
            required: "Please confirm password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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
