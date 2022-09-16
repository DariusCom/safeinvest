import facebookImage from "./images/facebook.png";
import twitterImage from "./images/twitter.png";
import instagramImage from "./images/instagram.png";
import linkedinImage from "./images/linkedin.png";
import logo from "./images/Logo.png";

const Footer = () => {
  const topDivQuery = "lg:flex-col lg:w-full lg:mt-8";

  const leftDivQuery = "mt-10 lg:w-full lg:mb-5";

  const usefulTextQuery = "laptop:text-2xl tablet:text-xl lg:text-3xl";

  const svgQuery = "tablet:my-2 lg:my-3";

  const linksQuery = "laptop:text-lg tablet:text-[1rem] lg:text-lg";

  const middleDivQuery = "laptop:px-4 lg:hidden";

  const logoQuery = "tablet:w-[180px] tablet:h-[65px]";

  const mottoQuery = "laptop:text-lg tablet:text-[1rem] tablet:mt-4";

  const rightDivQuery = "laptop:px-6 lg:w-full lg:px-16 lg:mb-6 sm:px-4";

  const newsletterQuery = "laptop:text-3xl tablet:text-2xl lg:text-3xl";

  const inputQuery =
    "laptop:py-3 laptop:text-[1rem] tablet:text-sm lg:text-xl lg:my-5 sm:py-2 sm:text-lg";

  const buttonQuery =
    "laptop:text-xl laptop:py-2 tablet:w-[85%] tablet:py-1 tablet:text-lg lg:py-2 lg:text-xl";

  const bottomDivQuery = "tablet:mt-8 lg:w-[85%]";

  const socialsQuery =
    "laptop:w-[35px] laptop:h-[35px] lg:w-[50px] lg:h-[50px] sm:w-[35px] sm:h-[35px]";

  return (
    <div className="bg-blue-500 text-white flex flex-col items-center">
      <div className={`flex mt-16 ${topDivQuery}`}>
        <div
          className={`flex flex-col justify-center items-center w-1/3 ${leftDivQuery}`}
        >
          <h4 className={`font-bold text-3xl ${usefulTextQuery}`}>
            Useful Links
          </h4>
          <svg
            width="31"
            height="6"
            viewBox="0 0 31 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`my-1 ${svgQuery}`}
          >
            <path d="M0 3.00002L31 3" stroke="#DE4A4A" stroke-width="5" />
          </svg>
          <p className={`text-xl ${linksQuery}`}>Privacy & Policy</p>
          <p className={`text-xl ${linksQuery}`}>Terms & Conditions</p>
          <p className={`text-xl ${linksQuery}`}>Login Account</p>
          <p className={`text-xl ${linksQuery}`}>Create Account</p>
        </div>
        <div
          className={`flex flex-col items-center mt-5 w-1/3 px-8 ${middleDivQuery}`}
        >
          <img
            className={`w-[200px] h-[70px] ${logoQuery}`}
            src={logo}
            alt="logo"
          />
          <p className={`text-xl text-center mt-5 font-bold ${mottoQuery}`}>
            We are here to not only save you money, but significantly increase
            your chances of making money
          </p>
        </div>
        <div
          className={`flex flex-col text-center items-center justify-center w-1/3 px-16 mt-10 ${rightDivQuery}`}
        >
          <h2 className={`text-4xl font-bold ${newsletterQuery}`}>
            Newsletter
          </h2>
          <label htmlFor="emailNews"></label>
          <input
            type="email"
            name="emailNews"
            id="emailNews"
            placeholder="Email"
            className={`rounded-full shadow-lg pl-7 py-4 my-8 w-full text-lg text-black outline-blue-500 ${inputQuery}`}
          />
          <button
            className={`bg-orange-400 text-white rounded-lg w-4/5 py-3 text-2xl font-bold ease-in duration-150 hover:scale-105 ${buttonQuery}`}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className={`flex w-1/3 justify-evenly mt-4 mb-12 ${bottomDivQuery}`}>
        <img
          src={facebookImage}
          alt="facebook"
          className={`hover:scale-105 w-[50px] h-[50px] transition ease-in-out duration-100 ${socialsQuery}`}
        />
        <img
          src={instagramImage}
          alt="instagram"
          className={`hover:scale-105 w-[50px] h-[50px] transition ease-in-out duration-100 ${socialsQuery}`}
        />
        <img
          src={twitterImage}
          alt="twitter"
          className={`hover:scale-105 w-[50px] h-[50px] transition ease-in-out duration-100 ${socialsQuery}`}
        />
        <img
          src={linkedinImage}
          alt="linkedin"
          className={`hover:scale-105 w-[50px] h-[50px] transition ease-in-out duration-100 ${socialsQuery}`}
        />
      </div>
    </div>
  );
};

export default Footer;
