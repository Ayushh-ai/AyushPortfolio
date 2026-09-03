import { useState } from "react";

function AccordionItem({
  number,
  title,
  description,
  skills,
  isOpen = false,
}) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className={`accordion-item ${open ? "accordion-open" : ""}`}>
      <button
        className="accordion-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="accordion-title-group">
          <span className="accordion-number">{number}</span>
          <h3>{title}</h3>
        </div>

        <span className="accordion-icon">
          {open ? "−" : "+"}
        </span>
      </button>

      <div className="accordion-content">
        <div className="accordion-content-inner">
          <p>{description}</p>

          <div className="accordion-skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;