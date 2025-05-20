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
            <span style={{ paddingTop: "0.75em" }}>
              This was a fun evening. We went around the same time last year
              maybe should go some time this week as a stress relief from your
              exams.
            </span>
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
            <span>
              Aye we actually did do the drawing challenge atlhough your tree
              looks alot better and more realistc then mine. Thats expected from
              my professional artist girlfriend.
            </span>
            <span style={{ paddingTop: "0.75em" }}>
              Some of my favourite photos are from this day you actually look
              lovely especially with your hair half up and down :)
            </span>
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
              src="/images/bradgatealone.jpg"
              alt="park picture front"
              className="custom-img"
            />
            <img src="/images/tomato.jpg" alt="tomato" className="custom-img" />
          </div>
          <div className="image-container">
            <img src="/images/ikea.jpg" alt="ikea" className="custom-img" />
            <img
              src="/images/moroccoalone.jpg"
              alt="morocco alone"
              className="custom-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bradgate;
