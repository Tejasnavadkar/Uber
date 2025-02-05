import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCaptainContext } from "../context/CaptainContext"
import axios from "axios"




const CaptainProtectedWrapper = ({children}) =>{

  const navigate =  useNavigate()
  const {setCaptain} = useCaptainContext()
  const [isLoading,setLoading] = useState(true)
  const token = localStorage.getItem('token')

   useEffect(()=>{

    if(!token){
        navigate('/captain-login')
       }

       axios.get(`${import.meta.env.VITE_BASE_URL}/captain/getCaptain`,{
        headers:{
            Authorization:`bearer ${token}`
        }
       }).then((response)=>{
    
        if(response.status === 200){
            setCaptain(response.data.captain)
            setLoading(false)
        }
       }).catch((err)=>{
            console.log('err in CaptainProtectedWrapper',err)
            localStorage.removeItem('token')
            navigate('/captain-login')
       })

   },[token])

  

   if(isLoading){
    return <div>
        Loading..
    </div>
   }


  

    return(
        <>
           {children}
        </>
    )
}

export default CaptainProtectedWrapper