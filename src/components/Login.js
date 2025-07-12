import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg" alt="background-img"></img>
        </div>
        <form  className=' w-[480px] border-black/85 rounded py-14 px-14 mt-40 absolute bg-black/85 mx-auto left-0 right-0 flex flex-col items-center'>

            <h1 className='text-white font-extrabold text-3xl mb-6 ml-2 self-start'>Sign In</h1>

            <input placeholder='Email or mobile number' type='text' className='text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/20' />
            <input placeholder='Password' type='password' className=' text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/10'/>

            <button  className="text-white w-[352px]  h-[40px] m-2  rounded bg-red-600 font-medium ">Sign In</button>

            <label className='text-white my-4'>OR</label>

            <button  className="text-white w-[352px]  h-[40px]  rounded bg-white/25 font-medium ">Use a sign-in code</button>

            <a href="/." className='text-white m-2 underline'>Forgot password?</a>

            <div className="flex items-center self-start  my-4 mx-4">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-white" />
              <label htmlFor="remember" className="text-white mx-2">Remember me</label>
            </div>

            <div className='self-start mx-4 my-2'>
              <span className='text-white'>New to Netflix?</span>
              <a  className='text-white font-bold' href='./'>Sign up now.</a>
            </div>
          <span className='text-gray-300 text-sm  my-2 mx-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
          <a href='./' className='text-sm text-blue-500 underline self-start mx-4'>Learn more.</a>
        </form>
  

    </div>
  )
}

export default Login