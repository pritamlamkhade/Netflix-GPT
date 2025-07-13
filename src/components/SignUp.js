import React ,{useRef,useState}from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const SignUp = () => {

  const name = useRef(null);
  const email = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);

  const [errorMessage, setErrorMessage] =useState(null)

  const handleButtonClick=()=>{
      const message= checkValidData({type: "signup",
        name:name.current.value,
        email: email.current.value,
        newPassword: newPassword.current.value,
        confirmPassword:confirmPassword.current.value});
      setErrorMessage(message);
  }
  return (
    <div >
         <Header/>         
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg" alt="background-img"></img>
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className=' w-[480px] border-black/85 rounded py-14 px-14 mt-40 absolute bg-black/85 mx-auto left-0 right-0 flex flex-col items-center'>

            <h1 className='text-white font-extrabold text-3xl mb-6 ml-2 self-start'>Sign Up</h1>
            <input placeholder='Full Name' type='text' ref={name} className='text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/20' />
            <input placeholder='Email or mobile number' ref={email} type='text' className='text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/20' />
            <input placeholder='New Password' ref={newPassword} type='password' className=' text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/10'/>
            <input placeholder='Confirm New Password' ref={confirmPassword} type='password' className=' text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/10'/>

            {errorMessage && <p className='text-red-500 text-sm self-start mx-2 mb-2'>{errorMessage}</p>}
            <button  className="text-white w-[352px]  h-[40px] m-2  rounded bg-red-600 font-medium " onClick={handleButtonClick}>Sign Up</button>

            <div className='self-start mx-4 my-2'>
              <span className='text-white'>Already registered?</span>
              <a  className='text-white font-bold' href='./login'>Sign in.</a>
            </div>
          <span className='text-gray-300 text-sm  my-2 mx-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
          <a href='./' className='text-sm text-blue-500 underline self-start mx-4'>Learn more.</a>
        </form>
    </div>
  )
}

export default SignUp