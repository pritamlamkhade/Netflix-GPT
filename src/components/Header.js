import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO } from '../utils/constant';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
  
    const handleSignOut=()=>{
        signOut(auth).then(() => {
          navigate("/");
        }).catch((error) => {
          navigate("/error");
        });
    }

  return (
    <div className='absolute h-[80px] w-full flex justify-between bg-gradient-to-b from-black  min-w-[650px] z-10'>
        <div className='pl-32 py-2 bg-gradient-to-b from-black' >
            <img 
            className='w-48'
            src={LOGO}
            alt="logo"
            ></img>
        </div>     

        {
          !user && 
          <div className='p-4 mr-20 flex items-center bg-gradient-to-b from-black'>
            <button className="text-white w-32 h-8 mx-4 border border-gray-300 rounded">English</button>
            <a href='./login'>
                    <button  className="text-white w-20  h-8  rounded bg-red-600 font-medium ">Sign In</button>
            </a>
          </div>
        } 

        {
          user &&
            <div className='flex items-center'>
                <button className='text-white'>{user?.displayName}</button>
                <button className='text-white font-bold p-2  mr-8' onClick={handleSignOut}>Sign Out</button>
            </div>
        }
    </div>
  )
}

export default Header