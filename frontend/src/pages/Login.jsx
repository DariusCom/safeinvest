import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MobileLogin from "../components/MobileLogin";
import { login, reset } from "../features/auth/authSlice";
import signImage from "../components/images/signImage.png";
import emailImage from "../components/images/email.png";
import passwordImage from "../components/images/password.png";
import logo from "../components/images/Logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/profile");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <>
      <div className="flex h-screen lg:hidden">
        <img
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="absolute left-8 top-8"
        />
        <div className="relative flex justify-center items-center w-2/3 laptop:w-[60%] tablet:w-[55%]">
          <div className="absolute right-0 bottom-3/5 h-1/6 w-1/6 py-4 pl-5 flex flex-col text-xl laptop:w-1/5 laptop:text-lg tablet:w-[30%]">
            <div className="h-1/2 flex justify-center items-center bg-indigo-500 rounded-l-full text-white cursor-pointer">
              <p>Login</p>
            </div>
            <Link
              to="/signup"
              className="h-1/2 flex justify-center items-center rounded-l-full text-indigo-500 cursor-pointer"
            >
              <div>
                <p>SignUp</p>
              </div>
            </Link>
          </div>
          <img
            src={signImage}
            alt="investing illustrations"
            className="w-[60%] h-3/4 laptop:w-3/4 tablet:h-[60%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-indigo-500 h-full w-1/3 laptop:w-[40%] tablet:w-[45%]">
          <div className="text-white pr-5 w-2/3 mb-10 laptop:w-3/4">
            <h5 className="text-xl font-bold">Welcome back to</h5>
            <h2 className="text-3xl font-bold text-black mt-1 mb-4">
              Safe<span className="text-yellow-400">Invest</span>
            </h2>
            <p className="text-xl tablet:text-lg">
              Login and continue your search for the perfect strategy
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col mb-10 w-2/3 laptop:w-3/4"
          >
            <div className="flex w-full">
              <div className="w-1/6 bg-yellow-400 rounded-tl-lg border-b-2 border-r-2 border-opacity-50 border-black flex justify-center items-center">
                <img src={emailImage} alt="email" width={25} height={25} />
              </div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={onChange}
                required
                placeholder="Email Address"
                className="w-5/6 outline-0 rounded-tr-lg border-b-2 border-opacity-50 border-black py-4 drop-shadow-email px-5 tablet:py-3"
              />
            </div>
            <div className="flex w-full">
              <div className="w-1/6 bg-yellow-400 rounded-bl-lg border-r-2 border-opacity-50 border-black flex justify-center items-center">
                <img
                  src={passwordImage}
                  alt="password"
                  width={25}
                  height={25}
                />
              </div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                id="password"
                placeholder="Password"
                className="w-5/6 rounded-br-lg py-4 drop-shadow-email px-5 outline-0 tablet:py-3"
              />
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="rounded-full"
                />
                <p className="ml-1 tablet:text-sm">Remember me</p>
              </div>
              <p className="tablet:text-sm">Forgot password?</p>
            </div>
            <div className="w-full flex justify-center pt-10">
              <button
                type="submit"
                className="text-xl rounded-full bg-gradient-to-r from-violet-400 to-orange-600 w-2/3 py-3 ease-in duration-150 hover:scale-105 laptop:w-5/6"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <MobileLogin
        formData={formData}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </>
  );
};

export default Login;
