import React from 'react'
import IconBox from './IconBox'

function IconsContainer({iconsPngs}) {

  return (
    <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-4 place-items-center'>
        {
            iconsPngs.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-2'>
                    <IconBox 
                        icon={item.icon}
                        label={item.label}
                    />
                    <p className='font-medium dark:text-[#dadada]'>{item.label}</p>
                </div>
            ))
        }
    </div>
  )
}

export default IconsContainer