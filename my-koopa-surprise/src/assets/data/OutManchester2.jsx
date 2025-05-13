import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const OutManchester2 = () => {
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
    <section id="outmanchester2" className="main-wrapper">
      <div className="main-container">
        <div>
          <h1>Yayoi Kusama - Exhibit</h1>
        </div>
        <div
          className="fade-in-section"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className="image-container">
            <img
              src="/images/image20-togetheryellow.jpg"
              alt="together yellow"
              className="custom-img"
            />
            <img
              src="/images/image21-togetherpink.jpg"
              alt="together pink"
              className="custom-img"
            />
          </div>
          <div className="image-container">
            <img
              src="/images/image22-togetherdinner.jpg"
              alt="together dinner"
              className="custom-img"
            />
            <img
              src="/images/image23-statue.jpg"
              alt="statue"
              className="custom-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutManchester2;
