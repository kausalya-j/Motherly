import React, { useState } from "react";
import Image from "../assets/Mom.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          password,
        }
      );

      if (response.data) {
        console.log("Signup successful");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error during signup");
      console.error("Signup error:", err.response?.data);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FFF2F2]">
      <div className=" flex flex-col p-10 ">
        <a
          href="/user" // Replace with the actual path to the User page
          className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-4 w-32 transition-transform transform hover:scale-105 text-center flex items-center justify-center"
        >
          Back
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="w-2/3" src={Image} alt="Mom and baby illustration" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-3xl font-bold mb-8">SignUp</h1>
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 py-2 border-2 border-black rounded-full hover:bg-gray-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
