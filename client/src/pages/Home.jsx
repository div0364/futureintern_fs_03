import React from "react";
import Image from "../pages/Home.png";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 via-cyan-600 to-pink-500 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-5xl md:text-left text-white mb-4 md:mb-6">
            Connecting People, Empowering Teams: Your Ultimate HR Toolkit.
          </h1>
          <p className="text-lg font-medium text-center md:text-left text-white mb-4 md:mb-6">
            Unlock organizational success with our Ultimate HR Toolkit:
            recruiting excellence, fostering engagement, and building a thriving
            workplace culture. Connect people, empower teams, and drive results.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="HR Toolkit"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
