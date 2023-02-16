import React from 'react'
import videoBg from '../../assets/bgVideo/forex.mp4'
import Typewriter from 'typewriter-effect';

const hero = () => {
  return (
    <div className='w-full h-full mt-0'>

      <div className='absolute flex justify-center items-center md:h-screen md:w-full mx-6 my-5 text-cyan-100'>
        <div className='grid grid-cols-1'>
          <h3 className='md:text-5xl text-lg md:mb-5 mb-1 mt-12'>Welcome to</h3>
          <h1 className='pb-1 md:pb-6 text-xl md:text-6xl font-bold'>
          Tradecopier Cloud Trading  
          </h1>
          <div className='md:text-4xl text-lg font-semibold text-cyan-200'>
            <Typewriter
              options={{
                strings: [
                  ' Make Passive Income', 
                  ' Real Time Trading', 
                  ' Don`t Miss Any Signal', 
                  ' Maximize Your Profit'
                ],
                autoStart: true,
                loop: true,
                delaySpeed:900
              }}
            />
          </div>
        </div>
      </div>
      <video src={videoBg} autoPlay loop muted/>

    </div>
  )
}

export default hero