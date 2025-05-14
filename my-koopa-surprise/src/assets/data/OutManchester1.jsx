import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const OutManchester1 = () => {
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
    <section id="outmanchester1" className="main-wrapper">
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
              src="/images/togetheryellow.jpg"
              alt="together yellow"
              className="custom-img"
            />
            <img
              src="/images/togetherpink.jpg"
              alt="together pink"
              className="custom-img"
            />
          </div>
          <div className="image-container">
            <img
              src="/images/togetherdinner.jpg"
              alt="together dinner"
              className="custom-img"
            />
            <img src="/images/statue.jpg" alt="statue" className="custom-img" />
          </div>
        </div>
        <div>
          <h1>The Cube with Dinner!</h1>
        </div>
        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/image17.jpg"
              alt="The cube image goes here"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>August-2023</span>
            <span style={{ paddingTop: "0.75em" }}>
              The cube was so fun with you, this is when we really got into
              matching clothes and I can't believe we pulled of the win in the
              end. Top tier teamwork from us.
            </span>
            <span style={{ paddingTop: "0.75em" }}>
              The food man this is when I knew you were a foodie, It was so good
              Ive got a picture of you starring at the food quite alot its
              actually relly funny. I think you will spot it soon.
            </span>
          </div>
        </div>

        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <span>
            <img
              src="/images/churro.jpg"
              alt="Churro Photo"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>
              Dont worry I didnt forget about the cute legos we got in the
              Manchester Arndale. It was a very big shopping center. Fun fact
              this is one of my favourite photos of you.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutManchester1;
