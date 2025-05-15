import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const Bradgate = () => {
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
      { threshold: 0.9 }
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
    <section id="bradgate" className="main-wrapper">
      <div className="main-container">
        <div>
          <h1>Bradgate Park</h1>
        </div>
        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <span>
            <img
              src="/images/image2.jpg"
              alt="Bradgate park front"
              className="custom-main-image"
            />
          </span>

          <div className="text-box">
            <span>May-2024</span>
            <span style={{ paddingTop: "0.75em" }}>Placement Holder text</span>
          </div>
        </div>
        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/drawing.jpg"
              alt="drawing trees"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>Placement Holder text</span>
            <span style={{ paddingTop: "0.75em" }}>Placement Holder text</span>
          </div>
        </div>
        <div>
          <h1>She was a fairy &#129498;</h1>
        </div>
        <div
          className="fade-in-section"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="image-container">
            <img
              src="/images/image1.jpg"
              alt="park picture front"
              className="custom-img"
            />
            <img
              src="/images/.jpg"
              alt="park picture back"
              className="custom-img"
            />
          </div>
          <div className="image-container">
            <img
              src="/images/.jpg"
              alt="morocco alone"
              className="custom-img"
            />
            <img src="/images/.jpg" alt="picture here" className="custom-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bradgate;
