import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const Morocco = () => {
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
    <section id="morocco" className="main-wrapper">
      <div className="main-container">
        <div>
          <h1>Morocco Couple Trip &#128149;</h1>
        </div>
        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <span>
            <img
              src="/images/camel.jpg"
              alt="Camel"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>April-2024</span>
            <span style={{ paddingTop: "0.75em" }}>
              This holiday was so sick, spending time in the sun, enjoying the
              food even drowning, although that part maybe a little less.
            </span>
            <span style={{ paddingTop: "0.75em" }}>
              Im so glad we went together exploring the mountain at the top and
              riding the camel was so fun. The camel was kindof daunting though
              which made it jokes since you're afraid of heights.
            </span>
            <span style={{ paddingTop: "0.75em" }}>
              You are a great travel partner and an even better girlfriend, im
              glad you like to travel visit different places like the city
              Marrakesh. Even met the old couple XD
            </span>
          </div>
        </div>

        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/buggy.jpg"
              alt="buggy"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>
              You look so cute in this photo, this was really fun even before
              the driving days. Thanks for trusting me to drive you around on
              the quad bike. Maybe next time you should drive. I would love to
              see you skills &#128521;
            </span>
          </div>
        </div>

        <div>
          <h1>Even More Morocco :)</h1>
        </div>
        <div
          className="fade-in-section"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="image-container">
            <img
              src="/images/camel-front.jpg"
              alt="camel-front"
              className="custom-img"
            />
            <img
              src="/images/smileheadphone.jpg"
              alt="Morocco smile headphones"
              className="custom-img"
            />
          </div>
          <div className="image-container">
            <img
              src="/images/kissmorocco.jpg"
              alt="Kiss Morocco"
              className="custom-img"
            />
            <img
              src="/images/sunglasses.jpg"
              alt="Sunglasses"
              className="custom-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Morocco;
