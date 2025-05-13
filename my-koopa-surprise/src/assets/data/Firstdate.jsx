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
        <div>
          <h1>First Date</h1>
        </div>
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

          <div className="text-box">
            <span>April-2023</span>
            <span style={{ paddingTop: "0.75em" }}>
              I know we had just started talking to each other but I'm glad it
              didn’t end here. Honestly, I’m so glad to have you in my life and
              I thought this deserved an honourable mention :)
            </span>
          </div>
        </div>

        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/image14.jpg"
              alt="Image 4"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>
              This was funny because I remember telling my coworkers about how
              bad our first meeting was and how I really wanted to impress you.
              They came in clutch and provided us the tickets to the game.
            </span>
            <span style={{ paddingTop: "0.75em" }}>
              I know its the only time you enjoyed football and it was jokes
              because you had no idea really what to expect since it was such a
              random event.
            </span>
            <span style={{ paddingTop: "0.75em" }}>
              It was fun going with you and we should try do it again sometime
              maybe :p
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Firstdate;
