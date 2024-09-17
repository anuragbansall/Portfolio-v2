import React, { Fragment } from 'react'
import { motion } from "framer-motion"

function Marquee({text}) {
  return (
    <div className='w-full rounded-full overflow-hidden border dark:border-[#373D43] border-[#EEEEEE] dark:bg-[#101215] bg-[#EAEAEC] py-1 sm:py-2'>
                <motion.div animate={{x:"-50%"}} transition={{ ease: "linear", duration: 15, repeat: Infinity}} className='flex flex-shrink-0 gap-4 w-fit'>
                    <div className='flex gap-4   text-nowrap'>
                        {
                            text.map((item, index) => (
                                <Fragment key={index}>{item}</Fragment>
                            ))
                        }
                    </div>
                    <div className='flex gap-4   text-nowrap'>
                        {
                            text.map((item, index) => (
                                <Fragment key={index}>{item}</Fragment>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
  )
}

export default Marquee