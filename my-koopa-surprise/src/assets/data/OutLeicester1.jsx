import React, { useEffect, useRef } from "react";
import "../../stylesheet/Main.css";

const OutLeicester1 = () => {
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
    <section id="outleicester1" className="main-wrapper">
      <div className="main-container">
        <div>
          <h1>Out and about in Leicester</h1>
        </div>
        <div
          className="fade-in-section row"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <span>
            <img
              src="/images/image16-escaperoom1.jpg"
              alt="Image 1"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>May-2023</span>
            <span>
              Believe it or not we actually went to the escape room the first
              time this day. I cant lie though we were pretty terrible however
              doing it with you makes it worth it.
            </span>
            <span style={{ paddingTop: "0.5em" }}>
              Im sorry for how the last one went, I promise we will go again and
              it will be just as fun as the first time. Maybe we should go in
              London :D
            </span>
          </div>
        </div>

        <div
          className="fade-in-section row reverse"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <span>
            <img
              src="/images/image15-jenga.jpg"
              alt="Image 4"
              className="custom-main-image"
            />
          </span>
          <div className="text-box">
            <span>June-2023</span>
            <span style={{ paddingTop: "0.5em" }}>
              This an artefact now, sad we will never be able to go to this
              place again it was such as nice and cozy cafe. You also beat me at
              snakes and ladders as well as Jenga. Clearly you have always been
              a gamer girl XD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutLeicester1;
