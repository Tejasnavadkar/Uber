import axios from "axios"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export const CaptainLogOut  = () =>{

    const navigate = useNavigate()
   const hasLoggedOut = useRef(false)

    const logout = async () =>{
        
        if(hasLoggedOut.current) return 
        hasLoggedOut.current = true

        const token = localStorage.getItem('token')
        const response =  await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })

        if(response.status === 200){
            localStorage.removeItem('token')
            console.log('captain-logout')
            navigate('/captain-login')
        }
    }

    useEffect( ()=>{
       logout()
    },[])

    return (
        <>
        UserLogOut</>
    )
}