import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from "react-bootstrap/Col";

function SkillGraph({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

function SkillsSection({ skills, isScrolled }) {
    return (
      <>
        {skills.map((skill, index) => (
          <SkillGraph
            key={`${skill}-${index}`}
            skill={skill.name}
            value={skill.value}
            isScrolled={isScrolled}
          />
        ))}
      </>
    );
  }

export function SkillsGraphTab({ skills, isScrolled }) {
    return (
      <>
        <Col xs={12} md={6}>
          <SkillsSection
            skills={skills.slice(0, Math.floor(skills.length / 2))}
            isScrolled={isScrolled}
          />
        </Col>
        <Col xs={12} md={6}>
          <SkillsSection
            skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
            isScrolled={isScrolled}
          />
        </Col>
      </>
    );
}

export default SkillsGraphTab
