import axios from "axios"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export const UserLogOut  = () =>{

   const navigate = useNavigate()
  const hasloggedOut = useRef(false) // useref remember previous value even page re-render

    const logout = async () =>{

        if(hasloggedOut.current) return   // to prevent re-render
        hasloggedOut.current=true

        const token = localStorage.getItem('token')
        const response =  await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })

        if(response.status === 200){
            localStorage.removeItem('token')
            navigate('/')
        }
    }

    

    useEffect( ()=>{
       logout()
    },[])

    return (
        <>
        UserLogOut
        </>
    )
}