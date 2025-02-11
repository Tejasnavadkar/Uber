import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"




const UserProtectedWrapper = ({children}) =>{

  const navigate =  useNavigate()
  const token = localStorage.getItem('token')
 const [isLoading,setIsLoading] = useState(true)
  const {setUser} = useUserContext() 

   useEffect(()=>{
    if(!token){
        navigate('/login')
       }

       axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
        headers:{
            Authorization:`bearer ${token}`
        }
       }).then((response)=>{
            if(response.status === 200){
                setUser(response.data.user)
                setIsLoading(false)
            }
       }).catch((err)=>{
        console.log('err in UserProtected Wrapper--',err)
        localStorage.removeItem('token')
        navigate('/login')
       })
       
   },[token])

   

   if(isLoading){
    return <div className="h-screen w-full flex justify-center items-center">
        Loading...
    </div>
   }


  

    return(
        <>
           {children}
        </>
    )
}

export default UserProtectedWrapper