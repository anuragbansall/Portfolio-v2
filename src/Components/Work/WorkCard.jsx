import React from 'react'
import { motion } from "framer-motion"

function WorkCard({ image, link, title, tags, description, index }) {

  return (
    <div className='h-full w-full overflow-hidden mb-5'>
      <motion.div
        className='h-full w-full dark:bg-[#101215] bg-[#EAEAEC] border dark:border-[#373D43] border-[#EEEEEE] px-4 md:px-8 py-4 rounded-2xl cursor-pointer dark:hover:bg-[#16171b] hover:bg-[#EEEEEE] duration-200'
        onClick={() => window.location.href = link}
        initial={{ x: index%2 ? "50%" : "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full md:h-[10rem] lg:h-[20rem] overflow-hidden flex justify-center items-center">
          <img src={image} alt={title} className='max-w-full max-h-[20rem] object-cover' />
        </div>
        <div className='mt-6'>
          <h2 className='text-3xl uppercase font-medium'>{title}</h2>
          <p className='mt-4'>{description}</p>
          <div className='flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 mt-6'>
            {tags.map((item, index) => (
              <span key={index} className='dark:bg-[#35353D] bg-[#dadada] dark:text-[#DADADA] font-medium px-4 py-1 rounded-full capitalize'>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkCard
