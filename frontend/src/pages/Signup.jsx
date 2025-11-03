import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password validation
    const password = formData.password;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, special char, and be 6+ chars long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Signup Data:", formData);
      alert("Signup successful!");
    }
  };

  return (
    <div className="bg-blue-300 h-screen w-full flex">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-center w-[50%] bg-white h-full">
        {/* Company Logo */}
        <div className="w-full h-[20%]">
          <h1 className="font-medium flex-start text-2xl px-10 py-5">
            Aruba Networks
          </h1>
        </div>

        {/* Card */}
        <div className=" h-[80%]">
            <h2 className="text-4xl mb-4 text-center font-medium">
              Welcome back!
            </h2>
            <p className="text-gray-600 text-center text-[16px]">
              The faster you fill up, the faster you get
            </p>
            <div className="mt-10 w-[400px]">
              <form onSubmit={handleSubmit} className="flex flex-col">
                {/* Name */}
                <label
                  className="text-[16px] font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="text-[16px] border px-2 py-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {/* Error  */}
                <div className="h-5">
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <label
                  className="text-[16px] font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="text-[16px] border px-2 py-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="h-5">
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <label
                  className="text-[16px] font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="text-[16px] border px-2 py-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="h-5 mb-5">
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Checkbox */}
                <div className="flex gap-2 items-center mb-3 mt-2">
                  <input
                    className="scale-150 accent-black-500"
                    type="checkbox"
                    id="remember"
                  />
                  <p className="text-[14px]">Remember me</p>
                  <p className="ml-40 text-[14px] cursor-pointer">
                    Forget Password
                  </p>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="bg-black text-white px-2 py-3 cursor-pointer text-[16px] mb-3"
                >
                  Signup
                </button>

                {/* Google Signup */}
                <div className="bg-white text-black px-2 py-3 cursor-pointer text-[16px] border select-none">
                  <span className="flex items-center justify-center">
                    <img className="w-6 mr-3" src="./google.svg" alt="" />
                    Signup with Google
                  </span>
                </div>
              </form>
            </div>
          </div>

        {/* Footer */}
        <div className="flex items-center gap-3 h-[20%]">
          <h3 className="text-gray-500">Already have an account?</h3>
          <Link to={"/login"}>
            <button className="text-black font-medium cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[50%]">
        <div className="w-full bg-[url('https://images.unsplash.com/photo-1609084413848-4808dfe1d3cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687')] bg-cover bg-center h-full text-white">
          <div className="h-full w-full relative">
            <div className="absolute right-10">
              <h1 className="text-4xl mt-5">Own the Look</h1>
            </div>
            <div className="absolute left-20 bottom-10">
              <h2 className="text-4xl font-medium mb-10">Style Meets You</h2>
              <p className="text-md font-light w-[80%] opacity-70">
                where every click brings you closer to styles that speak your
                confidence, trends that match your energy, and outfits that make
                every moment yours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
