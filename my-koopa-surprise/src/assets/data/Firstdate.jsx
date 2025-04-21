import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const Firstdate = () => {
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
    <section id="firstdate" className="main-wrapper">
      <div className="main-container">
        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <span>
            <img
              src="/images/image12.jpg"
              alt="Image 1"
              className="custom-main-image"
            />
          </span>
          <span className="text-box">
            I know we had just started talking to each other but I'm glad it
            didn’t end here. Honestly, I’m so glad to have you in my life and I
            thought this deserved an honourable mention :)
          </span>
        </div>

        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span className="text-box">
            This was a special moment. Even though it was early, it meant a lot
            to me. Thank you for always making me smile
          </span>
          <span>
            <img
              src="/images/image4.jpg"
              alt="Image 4"
              className="custom-main-image"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Firstdate;
