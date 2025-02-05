import { useState } from "react"
// import { useState } from "react"
import Logo from "../components/Logo"
import { Link, useNavigate } from "react-router-dom"
import { Policy } from "../components/Policy"
import { useCaptainContext } from "../context/CaptainContext"
import axios from "axios"

const CaptainSignUp = () =>{

   const {captain,setCaptain} = useCaptainContext()
   const navigate = useNavigate()

      const [captainSignUpInfo, setCaptainSignUpInfo] = useState({
        fullname: {
          firstname: "",
          lastname: ""
        },
        email: "",
        password: "",
        vehicle: {
          color: "",
          plate: "",
          capacity: "",
          vehicleType: ""
  }
      })
    
      const submitHandler = async (e) => {
        e.preventDefault()
        console.log('CaptainSignUp--',captainSignUpInfo)

       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainSignUpInfo)

       if(response.status === 201){

       const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        setCaptainSignUpInfo({
          fullname: {
            firstname: "",
            lastname: ""
          },
          email: "",
          password: "",
          vehicle: {
            color: "",
            plate: "",
            capacity: "",
            vehicleType: ""
          }
        })

        navigate('/captain-home')

       }
        
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
            <h3 className="text-lg font-medium mb-2">Vehicle information</h3>
              <div className="flex gap-2 mb-4">
                <input
                  className="w-1/2 bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
                  type="text"
                  required
                  value={captainSignUpInfo.vehicle.color}
                  onChange={(e) => {
                    setCaptainSignUpInfo({
                      ...captainSignUpInfo,
                      vehicle: {
                        ...captainSignUpInfo.vehicle,
                        color: e.target.value
                      }
                    })
                  }}
                  placeholder="color" />
                <input
                  className="w-1/2 bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
  
                  onChange={(e) => {
                    setCaptainSignUpInfo({
                      ...captainSignUpInfo,
                      vehicle: {
                        ...captainSignUpInfo.vehicle,
                        plate: e.target.value
                      }
                    })
                  }}
                  required
                  value={captainSignUpInfo.vehicle.plate}
  
                  placeholder="Plate" />
              </div>

              <div className="flex gap-2">
                <input
                  className="w-1/2 bg-[#eeeeee] py-2 px-2 rounded placeholder:text-sm text-base"
                  type="number"
                  required
                  value={captainSignUpInfo.vehicle.capacity}
                  onChange={(e) => {
                    setCaptainSignUpInfo({
                      ...captainSignUpInfo,
                      vehicle: {
                        ...captainSignUpInfo.vehicle,
                        capacity: e.target.value
                      }
                    })
                  }}
                  placeholder="Capacity" />

                  <select
                  required
                  className=" w-1/2 bg-[#eeeeee]"
                  onChange={(e)=>{
                    setCaptainSignUpInfo({
                      ...captainSignUpInfo,
                      vehicle:{
                        ...captainSignUpInfo.vehicle,
                        vehicleType:e.target.value
                      }
                    })
                  }}
                  value={captainSignUpInfo.vehicle.vehicleType}
                  >
                    <option value="" disabled>Vehicle-Type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="motorcycle">MotorCycle</option>
                  </select>
              </div>
            </div>
  
            <div>
              <button className="bg-black text-white w-full py-2 font-semibold">Create Account</button>
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-blue-600" to={'/captain-login'}>Login here</Link></p>
        </div>
        <Policy />
      </div>
    )
}

export default CaptainSignUp



