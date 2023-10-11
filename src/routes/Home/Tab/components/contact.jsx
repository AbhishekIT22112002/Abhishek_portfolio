import React from "react";
import { motion } from "framer-motion";

import { tabContentVariant } from "../../../../utils";
import Title from "../../../../shared/components/Title/Title";

const Contact = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <Title title="Get In Touch" color="#ff3939" />

    <div className="lets-talk">Let's have a talk</div>
    <div className="contact-bottom-section">
      <div className="social-icon-section">
        
        <a
          href="https://www.linkedin.com/in/abhishek1522/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-linkedin"></div>
        </a>
        <a href="https://wa.me/7254968469" target="_blank" rel="noreferrer">
          <div className="icons8-whatsapp"></div>
        </a>
        <a
          href="https://github.com/AbhishekIT22112002"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-github"></div>
        </a>
        <a href="mailto: abhishekanandmarin@gmail.com" rel="noreferrer">
          <div className="icons8-google-plus"></div>
        </a>
      </div>
    </div>
  </motion.div>
);

export default Contact;
