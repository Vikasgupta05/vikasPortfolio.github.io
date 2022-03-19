import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, link, isScrolled }) {

  return (
    <>
      <a href={link.href} target="_blank" rel="noreferrer" style={{width:"80px",height:"80px"}}><img src={link.img} alt={skill+"icon"} width="80" height="80"></img></a>
    </>
  );
}

export default SkillsBar;
