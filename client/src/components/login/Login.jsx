import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../contexts/MyContextProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { getLoggeIn } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios.post("http://localhost:5000/auth/login", loginData);
      await getLoggeIn();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="text"
              autoFocus
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Email"
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
            />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <a href="#">Forget Password?</a>
            </div>
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
            Login
          </button>
        </form>
        <p className="mt-12 text-xs text-center font-light text-gray-400">
          Don't have an account?
          <a href="#" className="text-black font-medium">
            Create One
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
