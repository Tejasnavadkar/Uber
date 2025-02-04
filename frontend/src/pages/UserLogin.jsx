import { useState } from "react"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"


const UserLogin = () => {

  const [userLoginInfo, setUserLoginInfo] = useState({
    email: '',
    password: ''
  })

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(userLoginInfo)
    setUserLoginInfo({email:'',password:''})
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
              value={userLoginInfo.email}
              onChange={(e)=>{setUserLoginInfo({...userLoginInfo,email:e.target.value})}}
              placeholder="email@example.com" />
          </div>

          <div className="">
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input 
            className="w-full bg-[#eeeeee] py-2 px-2 rounded placeholder:text-base text-lg" 
            type="password" 
            value={userLoginInfo.password}
            onChange={(e)=>setUserLoginInfo({
              ...userLoginInfo,
              password:e.target.value
            })}
            placeholder="password" 
            />
          </div>

          <div>
            <button className="bg-black text-white w-full py-2 font-semibold">Login</button>
          </div>
        </form>
        <p className="text-center">New Here? <Link className="text-blue-600" to={'/signup'}>Create New Account</Link></p>
      </div>

      <div>
        <Link to={'/captain-login'} className="bg-[#52af68] flex justify-center items-center text-white w-full py-2 mb-8 font-semibold">Sign in as Captain</Link>
      </div>

    </div>
  )
}

export default UserLogin