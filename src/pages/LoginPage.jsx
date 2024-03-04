import React from "react";
import fire from "../assets/fire.png";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const schema = Yup.object().shape({
    username: Yup.string().min(6,"Username must be at least 6 characters").required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-red-700  min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg flex gap-6">
        <div className="">
          <img className="w-44" src={fire} alt="" />
        </div>
        <div className="w-70 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
              type="text"
              placeholder="Enter Your Username"
              {...register("username")}
            />
            <p className="text-red-500 pb-2">{errors.username?.message}</p>
            <input
              className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
              type="email"
              placeholder="Enter Your Email Address"
              {...register("email")}
            />
            <p className="text-red-500  pb-2">{errors.email?.message}</p>
            <input
              className="bg-gray-900 text-white mb-2 rounded p-2 w-full"
              type="password"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            <p className="text-red-500  pb-2">{errors.password?.message}</p>
            <input
              className="w-30 bg-red-700 hover:bg-gray-900 hover:text-slate-300 text-black font-bold py-2 px-4 rounded-xl"
              type="submit"
            />
          </form>
          <div className="other">
            <h1 className="font-sans">Haven't Registered Yet?</h1>
            <Link to="/signup">
              <button className="w-30 hover:bg-red-700 bg-gray-900 hover:text-slate-300 text-slate-300 font-bold py-2 px-4 rounded-xl">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
