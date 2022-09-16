import logo from "./images/Logo.png";

const MobileLogin = ({ formData, onSubmit, onChange }) => {
  const { email, password } = formData;

  console.log(email);
  console.log(password);

  return (
    <div className="bg-mobile-background bg-cover bg-no-repeat flex justify-center items-center py-16 mlg:hidden">
      <div className=" bg-none rounded-2xl w-[85%] flex flex-col items-center shadow-red-400 shadow-login-mobile border-2 border-slate-500 h-3/4 pt-20 sm:pt-16">
        <div className="w-full h-[32%] flex items-center justify-center mb-20">
          <img src={logo} alt="logo" className="w-[70%] h-1/2" />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-4/5 h-[60%] justify-evenly"
        >
          <div className="mb-10">
            <div className="flex w-full mb-3 justify-center">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={onChange}
                required
                placeholder="Email Address"
                className="outline-0 rounded-lg py-3 drop-shadow-email px-3 w-full sm:py-2 sm:text-sm"
              />
            </div>
            <div className="flex w-full justify-center">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                id="password"
                placeholder="Password"
                className="rounded-lg py-3 drop-shadow-email px-3 outline-0 w-full sm:py-2 sm:text-sm"
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
                <p className="text-xs ml-1 text-white">Remember me</p>
              </div>
              <p className="text-xs text-white">Forgot password?</p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-20 sm:mt-16">
            <button
              type="submit"
              className="text-xl rounded-full bg-gradient-to-r from-violet-400 to-orange-600 w-full py-3 ease-in duration-150 mb-10 hover:scale-105 sm:py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileLogin;
