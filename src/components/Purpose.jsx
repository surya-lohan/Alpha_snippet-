import React from 'react'

const Purpose = () => {
  return (
    <div className="text-[#D1FAE5] w-full h-screen p-[5vh] flex flex-row flex-wrap justify-center items-center gap-[48px] mb-[3vh] bg-[#09141B]">
        <div className="flex flex-col justify-center items-center p-[48px_0] gap-[74px] w-[584px] min-w-[280px] max-w-[600px] h-[619px] bg-[#B3B3B3] bg-[url('./assets/imagepou.svg')] rounded-[48px] flex-none order-0 flex-grow hover:scale-[1.1] duration-300 ">
        </div>
        <div className='w-[584px] h-[141px] font-[Playfair_Display] font-extrabold text-[36px] leading-[130%] text-[#D1FAE5] flex items-center justify-cente'>
            <h2>Our Purpose</h2>
            <p>
            We aim to provide accessible and engaging education for everyone, fostering a love for learning.
            </p>
        </div>
        <hr className="w-[100%] bg-zinc-100 min-h-[1px] max-md:max-w-full" />
    </div>
  )
}

export default Purpose
