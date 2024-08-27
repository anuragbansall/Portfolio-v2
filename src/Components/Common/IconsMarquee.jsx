import React from "react";
import { motion } from "framer-motion";

function IconsMarquee({iconsPngs}) {
  
  return (
    <div className="h-full w-full flex items-center">
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {iconsPngs.map((item, index) => (
          <div key={index} className="h-[5rem] w-[5rem] flex justify-center items-center p-4 rounded-xl bg-[#272628] object-cover flex-shrink-0 mr-8">
            <img
            src={item.icon}
            title={item.label}
            alt=""
            className="max-h-full max-w-full object-cover"
          />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {iconsPngs.map((item, index) => (
          <div key={index} className="h-[5rem] w-[5rem] flex justify-center items-center p-4 rounded-xl bg-[#272628] object-cover flex-shrink-0 mr-8">
            <img
            src={item.icon}
            title={item.label}
            alt=""
            className="max-h-full max-w-full object-cover"
          />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default IconsMarquee;
