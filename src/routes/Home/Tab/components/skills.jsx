import React from "react";
import { motion } from "framer-motion";
import openHand from "../../../../open.png";

import { tabContentVariant } from "../../../../utils";
import Title from "../../../../shared/components/Title/Title";
import ProgressBar from "../../../../shared/components/ProgressBar/Progressbar";

const Skills = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <Title title="Skills" color="#39a4ff" />
    <div className="open-hand">
      <img src={openHand} alt="open" height="600" />
    </div>
    <div className="skill-wrapper">
      <div className="front-end">
        <ProgressBar name="Java" percentage="85" />
        <ProgressBar name="Html" percentage="80" />
        <ProgressBar name="Css" percentage="85" />
        <ProgressBar name="Bootstrap" percentage="85" />
        
       
      </div>
      <div className="backend">
        <ProgressBar name="ReactJs" percentage="85" />
        <ProgressBar name="JavaScript" percentage="80" />
        <ProgressBar name="NodeJs" percentage="60" />
        <ProgressBar name="Figma" percentage="80" />

        
      </div>
    </div>
  </motion.div>
);

export default Skills;
