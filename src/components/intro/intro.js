import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import Logo from '../../images/logo.svg';
import './intro.css';

const Intro = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <div className="intro">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="intro__logo__container"
      >
        <Logo className="logo" />
      </motion.div>
    </div>
  );
};

export default Intro;
