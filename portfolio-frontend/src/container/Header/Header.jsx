import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transtition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const circleImages = [images.react, images.redux, images.sass];

  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">KENNEDY</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web and Mobile</p>
            <p className="p-text">Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {circleImages.map((circleImage) => (
          <div className="circle-cmp app__flex" key={`circle-${circleImage}`}>
            <img src={circleImage} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
