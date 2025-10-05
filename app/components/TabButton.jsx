// src/components/TabButton.jsx

import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab} className="relative mr-3">
      <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;