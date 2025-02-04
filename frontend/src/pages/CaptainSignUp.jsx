import { useState } from "react"
// import { useState } from "react"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"
import { Policy } from "../components/Policy"

const CaptainSignUp = () =>{

      const [captainSignUpInfo, setCaptainSignUpInfo] = useState({
        fullname: {
          firstname: "",
          lastname: ""
        },
        email: "",
        password: ""
      })
    
      const submitHandler = (e) => {
        e.preventDefault()
        console.log(captainSignUpInfo)
        setCaptainSignUpInfo({
          fullname: {
            firstname: "",
            lastname: ""
          },
          email: "",
          password: ""
        })
      }

    return (
        <div className=" h-screen px-6 flex flex-col justify-between">

        <div>
          <form onSubmit={(e) => submitHandler(e)} className="w-full  py-6 flex flex-col gap-6 ">
  
            <div className="">
              <Logo className="w-16 mb-10" />
  
              <h3 className="text-lg font-medium mb-2">What&apos;s our Captain&apos;s name</h3>
              <div className="flex gap-2">
                <input
                  className="w-1/2 bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
                  type="text"
                  required
                  value={captainSignUpInfo.fullname.firstname}
                  onChange={(e) => {
                    setCaptainSignUpInfo({
                      ...captainSignUpInfo,
                      fullname: {
                        ...captainSignUpInfo.fullname,
                        firstname: e.target.value
                      }
                    })
                  }}
                  placeholder="Firstname" />
                <input
                  className="w-1/2 bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
  
                  onChange={(e) => {
                    setCaptainSignUpInfo({
                      ...captainSignUpInfo,
                      fullname: {
                        ...captainSignUpInfo.fullname,
                        lastname: e.target.value
                      }
                    })
                  }}
                  required
                  value={captainSignUpInfo.fullname.lastname}
  
                  placeholder="Lastname" />
              </div>
            </div>
  
  
            <div className="">
  
  
              <h3 className="text-lg font-medium mb-2">What&apos;s our Captain&apos;s email</h3>
              <input
                className="w-full bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
                type="email"
                required
                value={captainSignUpInfo.email}
                onChange={(e) => {
                    setCaptainSignUpInfo({
                    ...captainSignUpInfo,
                    email: e.target.value
                  })
                }}
                placeholder="email@example.com" />
            </div>
  
            <div className="">
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                className="w-full bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
                type="password"
                value={captainSignUpInfo.password}
                onChange={(e) => setCaptainSignUpInfo({
                  ...captainSignUpInfo,
                  password: e.target.value
                })}
                placeholder="password"
              />
            </div>
  
            <div>
              <button className="bg-black text-white w-full py-2 font-semibold">SignUp</button>
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-blue-600" to={'/captain-login'}>Login here</Link></p>
        </div>
        <Policy />
      </div>
    )
}

export default CaptainSignUp



