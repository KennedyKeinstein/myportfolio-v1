import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const items = ["home", "about", "work", "skills", "contact"];
  const [toggle, setToggle] = useState(false);
  const handleToggle = (value) => () => setToggle(value);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.my_logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {items.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HiX onClick={handleToggle(false)} />
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
