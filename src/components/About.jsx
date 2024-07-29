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
        Hello, my name is Andre Chandra Putra, I am a passionate and creative
        individual who recently graduated from Multimedia Nusantara University
        as an Informatics student. Throughout my academic journey, I have
        cultivated a strong foundation in various aspects of technology, merging
        my love for innovation and artistic expression. My time at the
        university equipped me with a diverse skill set, including programming
        languages, web development, graphic design, and multimedia production.
        With an insatiable curiosity for emerging technologies, I constantly
        seek to push the boundaries of what is possible in the digital realm. As
        you explore my portfolio, you will discover a collection of projects
        that showcase my dedication to crafting immersive and user-centric
        experiences. I am eager to embark on new challenges and collaborations,
        leveraging my expertise to contribute meaningfully to the ever-evolving
        world of informatics.
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
