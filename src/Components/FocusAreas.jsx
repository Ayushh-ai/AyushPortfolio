import AccordionItem from "./AccordionItem";
import { focusAreas } from "../data/focusAreas";

function FocusAreas() {
  return (
    <section className="focus-section section" id="focus">
      <div className="container">
        <div className="focus-intro">
          <div>
            <span className="section-label">What I work with</span>

            <h2 className="focus-heading">
              Areas I’m
              <br />
              <span>focused on.</span>
            </h2>
          </div>

          <p className="focus-intro-text">
            My interests combine software development, data, artificial
            intelligence and software quality. I’m continuously building
            practical skills through projects and hands-on learning.
          </p>
        </div>

        <div className="accordion-list">
          {focusAreas.map((area, index) => (
            <AccordionItem
              key={area.number}
              {...area}
              isOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;