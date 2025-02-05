import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import { useContext } from "react"
import { userDataContext, useUserContext } from "../context/UserContext"



const Start = () =>{
   

 const data = useUserContext()
   console.log('contextData--',data)

    return (
        <div>
            <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8)] h-screen pt-8 flex flex-col justify-between ">
                <Logo className="w-16 ml-8" />
                <div className="bg-white w-full flex flex-col gap-6 px-4 py-4 pb-7">
                    <div className="font-bold text-[30px]">Get Started With Uber</div>
                    <div>
                        <Link to={'/login'} className=" inline-block text-center cursor-pointer w-full bg-black text-white py-2.5 rounded-xs">Continue</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Start