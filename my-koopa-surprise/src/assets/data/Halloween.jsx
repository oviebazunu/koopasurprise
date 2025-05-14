import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const Halloween = () => {
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
    <section id="halloween" className="main-wrapper">
      <div className="main-container">
        <div>
          <h1>Halloween with a foodie!</h1>
        </div>
        <div
          className="fade-in-section"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className="image-container">
            <img
              src="/images/kbcoventry.jpg"
              alt="KB Coventry"
              className="custom-img"
            />
            <img
              src="/images/halloween.jpg"
              alt="Halloween"
              className="custom-img"
            />
          </div>
          <div className="image-container">
            <img
              src="/images/publics.jpg"
              alt="publics"
              className="custom-img"
            />
            <img src="/images/baobao.jpg" alt="baobao" className="custom-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halloween;
