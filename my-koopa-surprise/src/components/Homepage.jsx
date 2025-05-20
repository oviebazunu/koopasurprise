import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "../stylesheet/Homepage.css";

const Homepage = () => {
  const homepageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in on mount
    setVisible(true);
  }, []);

  return (
    <div id="homepage">
      <div className="homepage-wrapper">
        <div
          ref={homepageRef}
          className={`homepage-container fade-in-section ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="image-container">
            <img
              src="/images/bradgatealone.jpg"
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
            <h2>I hope you enjoyed it!!! - 22/05/2025</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
