import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../actions/index'
import {useNavigate} from 'react-router-dom';

import gunung from '../image/gunung.jpg'


function Login() { 

    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")


    const status = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    const LoginHandler = async (e) => {
        e.preventDefault();
      
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({
            username,
            password,
          }),
        });
    }

    const muncul = () => {
        switch (status) {
            case null :
                return <div className=' w-screen h-screen flex justify-center items-center text-3xl font-bold'>Disconnected</div>
            case false :
                return formLogin()
            default :
                return navigate('/masuk')
        }
      }

    const formLogin = () => {
        return(
            <div className=" w-screen h-screen flex justify-center items-center ">
            {/* <img src={gunung} alt="" className=' w-screen h-screen object-cover'/> */}
               <div className=' absolute w-80 h-96 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100'>
                   <div className='w-full h-full flex justify-center items-center'>
                       <form onSubmit={LoginHandler} className=" h-full w-full p-10 flex flex-col justify-around border border-green-300 ">
                           <div>
                           username
                           <input type="text" value={username} onChange={e=>setusername(e.target.value)} className=" text-black font-semibold p-4 h-10 w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100" />
                           </div>
   
                           <div>
                           Password
                           <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} className=" text-black font-semibold p-4 h-10 w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100" />
                           </div>
   
                           <a href="/login"><button type='submit' className=" hover:text-black font-bold w-full h-12 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-50 border border-gray-100"> Login</button></a>
                       </form>
   
                   </div>
               </div>
               
           </div>
        )
    }

    return(
        <div>
            {muncul()}
        </div>
    )
 }

 export default Login