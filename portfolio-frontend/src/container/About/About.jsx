import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I am a Good Developer",
      imgUrl: images.about01,
    },
    {
      title: "Frontend Development",
      description: "I am a Good Developer",
      imgUrl: images.about02,
    },
    {
      title: "Mobile Development",
      description: "I am a Good Developer",
      imgUrl: images.about03,
    },
    {
      title: "MERN Stack",
      description: "I am a Good Developer",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span> Good Design </span> <br /> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
