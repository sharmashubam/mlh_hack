import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/", {
        email,
        password,
        passwordVerify: verifyPassword,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">SignUp</h1>
        <form action="" className="mt-6" onSubmit={handleSubmit}>
          <div className="my-5 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              autoFocus
              id="email"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="verify_password" className="block text-black">
              Verify Password
            </label>
            <input
              type="password"
              id="verify_password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Verify Password"
              value={verifyPassword}
              onChange={(event) => setVerifyPassword(event.target.value)}
            />
          </div>

          <button
            className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
            type="submit"
          >
            SignUp
          </button>
        </form>
        <p className="mt-12 text-xs text-center font-light text-gray-400">
          Have an account?
          <a href="#" className="text-black font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
