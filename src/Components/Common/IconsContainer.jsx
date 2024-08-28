import React from 'react'
import IconBox from './IconBox'

function IconsContainer({iconsPngs}) {

  return (
    <div className='w-fit flex flex-wrap gap-4 justify-center'>
        {
            iconsPngs.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-2'>
                    <IconBox 
                        icon={item.icon}
                        label={item.label}
                    />
                    <p className='font-medium text-[#dadada]'>{item.label}</p>
                </div>
            ))
        }
    </div>
  )
}

export default IconsContainer