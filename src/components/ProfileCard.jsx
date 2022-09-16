import availableImage from "./images/available.png";
import currentPositiveImage from "./images/currentPositive.png";
import investedImage from "./images/invested.png";
import roiImage from "./images/ROI.png";

const images = {
  available: availableImage,
  currentPositive: currentPositiveImage,
  invested: investedImage,
  ROI: roiImage,
};

const ProfileCard = ({ image, title, number, toggle }) => {
  let positive = title === "ROI" ? number >= 0 : false;

  return (
    <div
      className={`w-1/5 rounded-lg ${
        toggle ? "bg-white" : "bg-gray-800"
      } flex flex-col justify-center py-6 px-4 text-center laptop:w-[22%] tablet:px-2 tablet:py-5 tablet:w-[23%] lg:w-[47%] lg:mb-5`}
    >
      <div
        className={`flex items-center ${toggle ? "text-black" : "text-white"}`}
      >
        <img
          src={images[image]}
          alt={`${image}`}
          className="w-[25px] h-[25px] sm:w-[20px] sm:h-[20px]"
        />
        <p className="text-lg ml-2 laptop:text-[1.1rem] tablet:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem]">
          {title}
        </p>
      </div>
      {title === "ROI" ? (
        <p
          className={`text-4xl ${
            positive ? "text-green-400" : "text-red-400"
          } mt-7 laptop:text-3xl tablet:mt-4 lg:text-2xl`}
        >
          {positive ? "+" : ""}
          {number}%
        </p>
      ) : (
        <p
          className={`text-4xl ${
            toggle ? "text-gray-700" : "text-gray-500"
          } mt-7 laptop:text-3xl tablet:mt-4 lg:text-2xl`}
        >
          ${number}
        </p>
      )}
    </div>
  );
};

export default ProfileCard;
