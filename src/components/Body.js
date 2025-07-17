import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import SignUp from './SignUp'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<SignUp/>
        },
          {
            path:"/login",
            element:<Login/>
        },
         {
            path:"/browse",
            element:<Browse/>
        }

    ])

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} =user;
              dispatch(addUser({uid: uid, email:email, displayName:displayName}));
            } 
            else {
              dispatch(removeUser());
            }
        });

        //unsubscribe when component unmount
        return ()=>{
            unsubscribe();
        }
      },[]);

      return (
        <div  className='bg-white h-screen w-screen'>
            <RouterProvider router={appRouter}/>
        </div>
      )
}

export default Body