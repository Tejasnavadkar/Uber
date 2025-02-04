import { useState } from "react"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"


const CaptainLogin = () =>{

      const [captainLoginInfo, setcaptainLoginInfo] = useState({
        email: '',
        password: ''
      })
    
      const submitHandler = (e) =>{
        e.preventDefault()
        console.log(captainLoginInfo)
        setcaptainLoginInfo({email:'',password:''})
      }

    return (
        <div className=" h-screen px-6 flex flex-col justify-between">
     
        <div>
          <form onSubmit={(e)=>submitHandler(e)} className="w-full  py-6 flex flex-col gap-6 ">
            <div className="">
              
              <Logo className="w-16 mb-10" />
            
              <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
              <input
                className="w-full bg-[#eeeeee] py-2 px-2 rounded placeholder:text-base text-lg"
                type="email"
                required
                value={captainLoginInfo.email}
                onChange={(e)=>{setcaptainLoginInfo({...captainLoginInfo,email:e.target.value})}}
                placeholder="email@example.com" />
            </div>
  
            <div className="">
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input 
              className="w-full bg-[#eeeeee] py-2 px-2 rounded placeholder:text-base text-lg" 
              type="password" 
              value={captainLoginInfo.password}
              onChange={(e)=>setcaptainLoginInfo({
                ...captainLoginInfo,
                password:e.target.value
              })}
              placeholder="password" 
              />
            </div>
  
            <div>
              <button className="bg-black text-white w-full py-2 font-semibold">Login</button>
            </div>
          </form>
          <p className="text-center">Join a fleet? <Link className="text-blue-600" to={'/captain-signup'}>Register as a Captain</Link></p>
        </div>
  
        <div>
          <Link to={'/login'} className="bg-[#99512a] flex justify-center items-center text-white w-full py-2 mb-8 font-semibold">Sign in as User</Link>
        </div>
  
      </div>
    )
}

export default CaptainLogin