import React from "react";
import Signup from "./Signup";

const Home = () => {

  return (
    <>
    <div className="justify-center min-h-screen bg-[#102B24]">
      <div className="text-center p-8 items-center justify-center">

        {/* Main Heading */}
        <h1 className="text-3xl font-semibold text-white mb-5">
          Home Page
        </h1>

        {/* Company Badge Or Any Quoate You want to show. */}
        <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full shadow-sm border border-blue-200">
            This is the Login and Signup assignment.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;
