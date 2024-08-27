import React from 'react'
import { motion } from "framer-motion"

function Marquee({text}) {
  return (
    <div className='w-[40rem] mx-auto rounded-full overflow-hidden border border-[#373D43] bg-[#101215] py-2'>
                <motion.div animate={{x:"-50%"}} transition={{ ease: "linear", duration: 15, repeat: Infinity}} className='flex flex-shrink-0 gap-4 w-fit'>
                    <div className='flex gap-4   text-nowrap'>
                        {
                            text.map((item, index) => (
                                <React.Fragment key={index}>{item}</React.Fragment>
                            ))
                        }
                    </div>
                    <div className='flex gap-4   text-nowrap'>
                        {
                            text.map((item, index) => (
                                <React.Fragment key={index}>{item}</React.Fragment>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
  )
}

export default Marquee