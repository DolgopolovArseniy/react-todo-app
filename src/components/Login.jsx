import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AUTH_ACTIONS, useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { LOGIN } = AUTH_ACTIONS;
  const { dispatch, users } = useAuth();

  function onSubmit({ username, password }) {
    const user = users.find(
      (user) => username.toLowerCase() === user.username.toLowerCase()
    );

    if (!user || password !== user.password) {
      toast.error(`Wrong username or password`, { duration: 4500 });
    } else {
      toast.success(`You're in!`, { duration: 4300 });
      dispatch({ type: LOGIN, payload: user });
      navigate(`/${user.username}/list`);
    }
  }

  return (
    <form
      className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[28rem] max-h-[34rem] mx-auto my-38 p-14 rounded-2xl animate-scaling flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="login__username" className="text-2xl">
          Username
        </label>
        <input
          type="text"
          id="login__username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div className="relative">
        <label htmlFor="login__password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="login__password"
          {...register("password", { required: "Password is required" })}
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

      <div>
        <button type="submit">Log in</button>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </form>
  );
}

export default Login;
