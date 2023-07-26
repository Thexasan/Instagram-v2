import React from 'react'

export default function History({title, img}) {
  return (
    <div>
       <div className='w-[70px] h-[70px] mb-1'>
        <img src={img} alt="" className='  rounded-[50px] m-auto bord p-[3px] '/>
    </div>
        <p  className='text-center text-[13px]'>{title}</p>
    </div>
  )
}
