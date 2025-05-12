import React, { useEffect, useState } from "react";
import "../stylesheet/Sidebar.css";

const sections = ["homepage", "firstdate", "outleicester1", "holland", "ikea"];

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
    { id: "homepage", date: "22/05/2025" },
    { id: "firstdate", date: "22/04/2023" },
    { id: "outleicester1", date: "27/05/2023" },
    { id: "holland", date: "22/04/2023" },
    { id: "ikea", date: "22/04/2023" },
  ];

  return (
    <div className="sidebar">
      <ul className="timeline no-default-style">
        {icons.map(({ id, date }) => (
          <li
            key={id}
            className={`timeline-item ${activeSection === id ? "active" : ""}`}
          >
            <a href={`#${id}`} className="timeline-dot"></a>
            <span className="timeline-date">- {date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
