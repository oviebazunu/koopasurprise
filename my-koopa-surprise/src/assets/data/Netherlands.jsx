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
      { threshold: 0.01 }
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
          </div>
        </div>

        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/image8.jpg"
              alt="Churro Photo"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>
              On the second day we went to a couple museums and you even took me
              redlight district I cant believe you did that XD. Honestly weekend
              trips are fun once you have finished up with your exams we need to
              try going again on a couple. Where do you think we should go
              Greece or Spain?
            </span>
          </div>
        </div>

        <div>
          <h1>Netherlands - First Holiday Abroad &#128747;</h1>
        </div>
        <div
          className="fade-in-section"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="image-container">
            <img
              src="/images/image6-k.jpg"
              alt="KB Coventry"
              className="custom-img"
            />
            <img
              src="/images/image18-haln.jpg"
              alt="Halloween"
              className="custom-img"
            />
          </div>
          <div className="image-container">
            <img
              src="/images/image10-puics.jpg"
              alt="publics"
              className="custom-img"
            />
            <img
              src="/images/image17-bao.jpg"
              alt="baobao"
              className="custom-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Netherlands;
