import React from 'react'
import { Play ,Info  } from 'lucide-react';



const VideoDescription = ({title, overview}) => {
  return (
    <div className='pt-[12%] px-24 absolute w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-6xl w-1/3 text-white font-bold'>{title}</h1>
        <p className='py-6 text-xl w-1/3 text-white'>{overview}</p>
        <div className='flex'>
          <button className='bg-white text-black rounded p-3 px-12 text-2xl font-bold hover:bg-opacity-80 flex items-center gap-x-2'>
            <Play color="black" size={30} />
            Play
          </button>
          <button className='bg-gray-500 text-white mx-4 rounded p-3 px-8 text-2xl font-bold hover:bg-opacity-80 flex items-center gap-x-2'>
           <Info color="white" size={30}/>
            More Info
          </button>
        </div>
        
    </div>
  )
}

export default VideoDescription