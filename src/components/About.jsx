import React, { useEffect, useState } from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { html } from "../assets";
import { BallCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full servicecard cursor-pointer">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  });
  return (
    <div id="about">
      <div className="h-[80px]" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who am I?</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {loading && (
        <div className="w-28 h-28" style={{ display: "none" }} key="html-key">
          <BallCanvas icon={html} />
        </div>
      )}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Full stack Web Developer with experience in JavaScript,
        and expertise in frameworks like React, Node.js, and Three.js. I'm a
        good team player and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's join together to bring the ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
