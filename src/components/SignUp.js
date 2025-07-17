import React ,{useRef,useState}from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { Eye, EyeOff } from "lucide-react";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constant';

const SignUp = () => {
  const name = useRef(null);
  const email = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null); 
  const [errorMessage, setErrorMessage] =useState(null)
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleButtonClick=()=>{
      const message= checkValidData({type: "signup",
        name:name.current.value,
        email: email.current.value,
        newPassword: newPassword.current.value,
        confirmPassword:confirmPassword.current.value});

      setErrorMessage(message);
       if(message) return;

      //sign up user logic
      createUserWithEmailAndPassword(auth, email.current.value, newPassword.current.value)
      .then((userCredential) => {

        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({uid: uid, email:email, displayName:displayName}));
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.errorMessage);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+errorMessage);

      });


  }

  return (
    <div >
         <Header/>         
        <div className='absolute'>
            <img src={BG_IMG} alt="background-img"></img>
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className=' w-[480px] border-black/85 rounded py-14 px-14 mt-40 absolute bg-black/85 mx-auto left-0 right-0 flex flex-col items-center'>

            <h1 className='text-white font-extrabold text-3xl mb-6 ml-2 self-start'>Sign Up</h1>
            <input placeholder='Full Name' type='text' ref={name} className='text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/20' />
            <input placeholder='Email or mobile number' ref={email} type='text' className='text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/20' />

            <input placeholder='New Password' ref={newPassword}   type={showNewPassword ? "text" : "password"} className=' text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/10'/>
            <button type="button" onClick={() => setShowNewPassword((prev) => !prev)} className="absolute right-[80px] top-[295px] transform -translate-y-1/2 text-gray-400">
               {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            <input placeholder='Confirm New Password' ref={confirmPassword}   type={showConfirmPassword ? "text" : "password"} className=' text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/10'/>
            <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-[80px] top-[370px] transform -translate-y-1/2 text-gray-400">
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

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