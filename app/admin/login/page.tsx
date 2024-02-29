"use client";
import { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/app";
import { useForm } from "react-hook-form";
import Image from "next/image";

const Register = () => {
  const [userId, setUserId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Your user id" + userId);
  }, [userId]);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const sinIn = async () => {
    setErrorResponse(null);
    setLoading(true);
    try {
      // Attempt sign-in
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Upon successful sign-in, update userId state with the user's ID
      if (userCredential && userCredential.user && userCredential.user.uid) {
        setUserId(userCredential.user.uid);
      }
    } catch (err) {
      setErrorResponse({
        message: err.message,
        code: err.code,
      });
    }
    setLoading(false);
  };

  return (
    <div className="static">
      {loading || userId ? (
        <div className="absolute h-full w-full backdrop-blur-sm bg-white/30 ">
          <div className="flex h-full items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
            <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
            <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
          </div>
        </div>
      ) : null}
      <section className="  pt-32 p-4 flex items-center justify-center">
        <div className="bg-gray-200 flex shadow-8Shadow shadow-black  max-w-3xl  items-center">
          <div className="md:block hidden w-1/2">
            <Image
              height={600}
              width={500}
              src="https://img.freepik.com/free-vector/chatbot-messenger-program-concept-with-support-symbols-isometric-vector-illustration_1284-69529.jpg?t=st=1709203305~exp=1709206905~hmac=84397c697016598084767bbbc83e4d59adf7f1a78b4924a3a1411fb98a005f4b&w=826"
              alt="admin"
            />
          </div>
          <div className="md:w-1/2 px-8 md:px-16 p-4">
            <h2 className="font-bold text-2xl text-[#002D74]">Admin Login</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              For admin member, easily log in.
            </p>
            <form
              onSubmit={handleSubmit(sinIn)}
              className="flex flex-col gap-2"
            >
              <input
                className="p-2 mt-8 rounded-xl border"
                {...register("email", {
                  required: "Email required !",
                })}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm pl-4">
                {errors.email?.message}
              </p>
              <div>
                <span className="flex items-center gap-2">
                  <input
                    className="p-2 rounded-xl border w-full"
                    {...register("password", {
                      required: "Password required !",
                    })}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="cursor-pointer hover:text-cyan-600 "
                      size={25}
                      onClick={handleTogglePassword}
                    />
                  ) : (
                    <FaEye
                      className="cursor-pointer hover:text-cyan-600 "
                      size={25}
                      onClick={handleTogglePassword}
                    />
                  )}{" "}
                </span>
                <p className="mt-2 text-red-500 text-sm pl-4">
                  {errors.password?.message}
                </p>
              </div>
              {errorResponse ? (
                <div
                  className="flex items-center p-4 mb-4 text-sm  rounded-lg  bg-gray-800 text-red-400 "
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div>
                    <p className="mi-3 text-sm">{errorResponse.message}</p>
                  </div>
                </div>
              ) : null}
              <button
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
