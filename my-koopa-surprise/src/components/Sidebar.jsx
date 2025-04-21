import React, { useEffect, useState } from "react";
import "../stylesheet/Sidebar.css";

const sections = ["homepage", "firstdate", "football", "holland", "ikea"];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const icons = [
    { id: "homepage" },
    { id: "firstdate" },
    { id: "football" },
    { id: "holland" },
    { id: "ikea" },
  ];

  return (
    <div className="sidebar">
      <ul className="timeline no-default-style">
        {icons.map(({ id }) => (
          <li
            key={id}
            className={`timeline-item ${activeSection === id ? "active" : ""}`}
          >
            <a href={`#${id}`} className="timeline-dot"></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
