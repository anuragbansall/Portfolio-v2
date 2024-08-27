import React from "react";
import { motion } from "framer-motion";
import IconBox from "./IconBox";

function IconsMarquee({iconsPngs}) {
  
  return (
    <div className="h-full w-full flex items-center">
      <motion.div
        className="flex flex-shrink-0 gap-8 pr-8"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {iconsPngs.map((item, index) => (
          <IconBox 
            icon={item.icon}
            label={item.label}
            key={index}
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0 gap-8 pr-8"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {iconsPngs.map((item, index) => (
          <IconBox 
            icon={item.icon}
            label={item.label}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default IconsMarquee;
