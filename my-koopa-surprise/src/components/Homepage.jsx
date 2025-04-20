import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../stylesheet/Homepage.css";

const Homepage = () => {
  return (
    <div id="homepage">
      <div className="homepage-wrapper">
        <div className="homepage-container">
          <div className="image-container">
            <img
              src="/images/image1.jpg"
              alt="Image 1"
              className="custom-img"
            />
            <img
              src="/images/image13.jpg"
              alt="Image 13"
              className="custom-img"
            />
          </div>
          <div>
            <h1>
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
            <h2>I hope you enjoyed it :)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
