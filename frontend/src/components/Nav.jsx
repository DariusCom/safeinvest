import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./images/Logo.png";
import moon from "./images/moon.png";
import sun from "./images/sun.png";

const buttonOff = "items-start pl-2 text-black";
const buttonOn = "items-end pr-3 text-white";

const imageVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -36,
  },
};

const optionsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Nav = ({ switchToggle, toggle, location }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reset } = useSelector((state) => state.auth);

  const onLogout = () => {
    navigate("/");
    dispatch(logout());
    dispatch(reset());
  };

  const [navVisible, setNavVisible] = useState(false);

  return (
    <div
      className={`flex items-center justify-between py-4 px-6 ${
        toggle ? "bg-white" : "bg-gray-800"
      }`}
    >
      <img
        className="cursor-pointer"
        src={logo}
        alt="logo"
        width={150}
        height={100}
      />
      <div className="text-md font-bold flex items-center">
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer lg:hidden"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
            onClick={switchToggle}
          />
          <div
            className={`w-16 h-8 flex flex-col justify-center ${
              toggle ? buttonOff : buttonOn
            } bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[4px] after:left-[8px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-slate-300 select-none`}
          >
            <img
              src={`${toggle ? moon : sun}`}
              alt="moon"
              width={18}
              height={18}
            />
          </div>
        </label>
        <AnimatePresence>
          <motion.div className="w-12 h-12 ml-4">
            <motion.div
              variants={imageVariants}
              animate={navVisible ? "animate" : "initial"}
              className={`w-full h-full z-30 relative rounded-full bg-cover cursor-pointer bg-[url('../src/components/images/profiles/1.jpg')]`}
              onClick={() => setNavVisible(!navVisible)}
            ></motion.div>
            <motion.div
              variants={optionsVariants}
              animate={navVisible ? "animate" : "initial"}
              exit="initial"
              className={`absolute z-20 right-6 top-4 rounded-sm bg-slate-700 w-32 h-32 flex flex-col justify-end ${
                navVisible ? "visible" : "hidden"
              } lg:h-40`}
            >
              <button
                onClick={switchToggle}
                className={`mlg:hidden h-9 ${
                  toggle ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {toggle ? "Dark" : "Light"}
              </button>
              <Link
                className="bg-slate-700 h-9 text-stone-400 hover:bg-slate-600 border-b-2 border-gray-500"
                to={`${location === "invest" ? "/profile" : "/invest"}`}
              >
                <button className="w-full h-full">
                  {location === "invest" ? "Profile" : "Invest"}
                </button>
              </Link>
              <button
                onClick={onLogout}
                className="bg-slate-700 h-9 text-stone-400 hover:bg-slate-600 rounded-sm"
              >
                Log Out
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
