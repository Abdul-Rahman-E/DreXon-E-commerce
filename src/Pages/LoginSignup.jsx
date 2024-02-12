import React from "react";

const LoginSignup = () => {
  console.log(window.screen);
  return (
    <div className="w-screen h-[675px] flex flex-col justify-center items-center bg-gradient-to-b from-[#163031] to-[#ffffff] overflow-hidden">
      <div className="w-80 md:w-[550px] md:h-[500px] p-5 bg-gradient-to-r from-[#ddc66aec] to-[#e8b43a] flex flex-col space-y-8 drop-shadow-lg rounded-md">
        <h1 className="text-lg md:text-2xl font-semibold md:ml-14 mt-1">
          Sign Up
        </h1>
        <div className="flex flex-col items-start md:ml-14">
          <input
            className="pt-3 pb-3 pr-5 pl-5 w-72 md:w-[400px] outline-none border-[1px] h-14 border-slate-700 focus:border-2"
            type="text"
            name=""
            id=""
            placeholder="Your Name"
          />
          <input
            className="pt-3 pb-3 pr-5 pl-5 w-72 md:w-[400px] outline-none border-[1px] h-14 border-slate-700 mt-5 focus:border-2"
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
          <input
            className="pt-3 pb-3 pr-5 pl-5 w-72 md:w-[400px] outline-none border-[1px] h-14 border-slate-700 mt-5 focus:border-2"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <div className="h-[45px] w-72 md:w-[400px] bg-[#1e4041] text-white cursor-pointer flex justify-center items-center mt-5 hover:bg-[#163031] active:bg-[#1d4143] active:transition-all">
            Continue
          </div>
          <p className="text-sm mt-3">
            Already have an account?{" "}
            <a className="hover:underline text-blue-500" href="">
              Login here
            </a>
          </p>
          <div className="flex space-x-1 mt-1">
            <input type="checkbox" name="" id="" />
            <p className="text-sm">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
