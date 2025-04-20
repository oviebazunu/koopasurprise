import React from "react";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <div id="homepage">
      <div className="w-full h-screen object-cover object-left">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-start items-center">
          <div className="flex space-x-4 mb-6">
            <img
              src="/images/image1.jpg"
              alt="Image 1"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/image2.jpg"
              alt="Image 2"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
          </div>

          <h1 className="flex sm:text-5xl text-3xl pt-4 sm:pl-0 pl-20 text-gray-800">
            <TypeAnimation
              sequence={[
                "Happy Birthday Satri !!!",
                2000,
                "Happy Birthday Koopa !!!",
                2000,
                "Happy Birthday Baby !!!",
                2000,
              ]}
              wrapper="span"
              speed={40}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
