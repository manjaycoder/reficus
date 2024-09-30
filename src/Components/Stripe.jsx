import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className="w-[20%] px-8 py-6 border-t-[1.2px]  border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center ">

       <img src={val.url} />
       <span className='text-white font-semibold'>{val.number}</span>
     </div>
  )
}

export default Stripe