import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {

  // const schema = yuo.object().shape({
  //   fullname : yup.string().min(6,"At least 6 characters are required").required("fullname is required"),
  //   username: yup.string().min(6,"atleast 6 characters are required").required("Username field is required"),
  //   age: yup.number().positive().integer().min(6,"atleast 6 characters are required").required("Username field is required"),
  // })

  return (
    <div>
      <div className="bg-red-700  min-h-screen flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg flex gap-6">
          <div className="inline-block my-auto">
                <h1 className="font-bold font-15xl">Let's Begin</h1>
                <p>the game of Fierce</p>
          </div>
          <div className="w-60 ">
            <form>
              <input
                className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
                type="text"
                placeholder="Enter Your Username"
              />
              <input
                className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
                type="number"
                placeholder="Enter Your Age"
              />
              <input
                className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <input
                className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
                type="text"
                placeholder="Enter Your Contact"
              />
              <input
                className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
                type="password"
                placeholder="Enter Your Password"
              />
              <input
                className="w-30 bg-red-700 hover:bg-gray-900 hover:text-slate-300 text-black font-bold py-2 px-4 rounded-xl"
                type="submit"
              />
            </form>
            <div className="other">
              <h1 className="font-sans">Already Registered ?</h1>
              <Link to="/login">
                <button className="w-30 hover:bg-red-700 bg-gray-900 hover:text-slate-300 text-slate-300 font-bold py-2 px-4 rounded-xl">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
