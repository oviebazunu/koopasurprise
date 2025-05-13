import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const Netherlands = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="netherlands" className="main-wrapper">
      <div className="main-container">
        <div>
          <h1>Netherlands - First Holiday Abroad &#128747;</h1>
        </div>
        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <span>
            <img
              src="/images/image9-netherlandscafe.jpg"
              alt="Netherlands"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>November-2023</span>
            <span style={{ paddingTop: "0.75em" }}>
              First day in netherlands we found a hybrid gym cafe? It was really
              funny looking. But at least the coffee and you looked real good
              &#128064;
            </span>
            <span style={{ paddingTop: "0.75em" }}>placement text</span>
          </div>
        </div>

        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/placement text.jpg"
              alt="Churro Photo"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>placement text</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Netherlands;
