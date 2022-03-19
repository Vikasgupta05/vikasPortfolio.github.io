import React from "react";
import Row from "react-bootstrap/Row";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          link={skill.link}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
        <SkillsSection
          skills={skills}
          isScrolled={isScrolled}
        />
    </>
  );
}

export default SkillsTab;
