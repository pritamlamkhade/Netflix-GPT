import React from 'react'

const Header = () => {
  return (
    <div className='absolute h-[80px] w-full flex justify-between bg-gradient-to-b from-black  min-w-[650px] z-10'>
        <div className='pl-32 py-2 bg-gradient-to-b from-black' >
            <img 
            className='w-48'
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
            ></img>
        </div>
        <div className='p-4 mr-20 flex items-center bg-gradient-to-b from-black'>
           <button className="text-white w-32 h-8 mx-4 border border-gray-300 rounded">English</button>
           <a href='./login'>
                  <button  className="text-white w-20  h-8  rounded bg-red-600 font-medium ">Sign In</button>
          </a>
        </div>
    </div>
  )
}

export default Header