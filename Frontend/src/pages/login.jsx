import React, { useState } from "react";
import Image from "../assets/Mom.png";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://motherly.onrender.com/api/auth/login`,
        {
          username,
          password,
        }
      );

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/user");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-[#FFF2F2]">
        <div className="flex-1 flex justify-center items-center">
          <img className="w-2/3" src={Image} alt="Mom and baby illustration" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">
                  Enter Username or Email
                </label>
                <input
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300"
                  type="text"
                  placeholder="Username or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-2">
                  Enter Password
                </label>
                <input
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-300"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="text-red-500 mb-4 text-center">{error}</div>
              )}
              <div className="flex gap-4">
                <Link to="/signup" className="flex-1">
                  <button
                    type="button"
                    className="w-full py-2 bg-[#FFB5B5] text-black rounded-full hover:bg-[#FFC5C5]"
                  >
                    Signup
                  </button>
                </Link>
                <button
                  type="submit"
                  className="flex-1 py-2 border-2 border-black rounded-full hover:bg-gray-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
