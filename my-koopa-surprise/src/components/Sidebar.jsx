import React, { useEffect, useState } from "react";
import "../stylesheet/Sidebar.css";

const sections = [
  "homepage",
  "firstdate",
  "outleicester1",
  "outmanchester1",
  "halloween",
  "netherlands",
  "morocco",
  "bradgate",
];

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
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const icons = [
    { id: "homepage", date: "May 2025" },
    { id: "firstdate", date: "April 2023" },
    { id: "outleicester1", date: " May 2023" },
    { id: "outmanchester1", date: "Aug 2023" },
    { id: "halloween", date: "Oct 2023" },
    { id: "netherlands", date: "Sep 2023" },
    { id: "morocco", date: "April 2024" },
    { id: "bradgate", date: "May 2024" },
  ];

  return (
    <div className="sidebar">
      <div className="scroll-container">
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
    </div>
  );
};

export default Sidebar;
