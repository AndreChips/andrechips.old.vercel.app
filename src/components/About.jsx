import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Software Engineer with 1+ years of experience specializing in web and
        mobile application development. With a profound passion for front-end
        development, I am dedicated to mastering new skills and technologies,
        currently improving my skills in React.js and Next.js. My proficiency
        includes HTML, CSS, JavaScript, and TypeScript. I thrive in
        collaborative team environments and working independently, bringing
        strong communication skills and a cooperative approach to every project.
        I am always open to being taught and learning the best ways to improve
        my skills. Committed to continuous growth, I stay updated with the
        latest trends and best practices in front-end development to deliver
        innovative and high-quality solutions. My dedication to improvement and
        my software engineering background provides me with a well-rounded
        understanding of the entire development process, enabling me to
        contribute effectively to the success of projects.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
