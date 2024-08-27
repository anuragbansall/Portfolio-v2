import React from 'react'

function IconBox({icon, label}) {
  return (
    <div className="h-[5rem] w-[5rem] flex justify-center items-center p-4 rounded-xl bg-[#272628] object-cover flex-shrink-0">
      <img
        src={icon}
        title={label}
        className="max-h-full max-w-full object-cover"
      />
    </div>
  )
}

export default IconBox