import { useRef, useState } from "react"
import Logo from "../components/Logo"
import {useGSAP} from "@gsap/react"
import 'remixicon/fonts/remixicon.css'
import gsap from "gsap"
import {LocationSearchPanel} from "../components/LocationSearchPanel"



const Home = () =>{

    const [pickup,setPickup] = useState('')
    const [destination,setDestination] = useState('')
    const [ isPanelOpen,setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    useGSAP(()=>{
        if(isPanelOpen){
            gsap.to(panelRef.current,{ // if panel open set hieght to 70 otherwisw set 0
                height:'70%'
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%'
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
       
    },[isPanelOpen])
 
    const submitHandler = (e) =>{
        e.preventDefault()
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <Logo className='w-16 absolute left-5 top-5'/>
            <div className="h-full w-full">
                <img className="h-full w-full object-cover " src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className="absolute top-0  w-full flex flex-col justify-end h-screen ">
                <div className="p-5 bg-white flex flex-col gap-3 h-[30%] relative">
                    <i ref={panelCloseRef} onClick={()=>setPanelOpen(false)} className="ri-arrow-down-wide-line absolute right-4 top-2 text-2xl opacity-0"></i>
                    <h3 className="font-semibold text-2xl">Find a trip</h3>
                    
                    <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col gap-2 ">
                        <div className="line bg-black h-16 w-1 absolute top-[38%] left-10 rounded-full"></div>
                        <input 
                        type="text" 
                        className="px-12 py-2 rounded-xl w-full bg-[#eee] outline-none" 
                        placeholder="Add a pick-up location" 
                        value={pickup}
                        onChange={(e)=>{
                            setPickup(e.target.value)
                        }}
                        onClick={()=>setPanelOpen(true)}
                        />

                        <input 
                        type="text" 
                        className="px-12 py-2 rounded-xl w-full bg-[#eee] outline-none" 
                        placeholder="Enter your destination" 
                        value={destination}
                        onChange={(e)=>{
                            setDestination(e.target.value)
                        }}
                        onClick={()=>setPanelOpen(true)}
                        />
                    </form>
                </div>
                <div ref={panelRef} className="bg-white">
                    <LocationSearchPanel/>
                </div>
            </div>

            <div className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8  flex flex-col gap-2 ">
                <h3 className="font-semibold text-xl my-2">Choose a Vehicle</h3>
                <div className="flex justify-between items-center p-2 gap-2 border border-gray-500 active:border-black rounded-lg">
                    <div className="w-[20%]">
                        <img className="h-13" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
                    </div>
                    <div className="flex flex-col w-[60%] ">
                        <h4 className="text-base font-medium">UberGo <span><i className="ri-user-fill"></i></span> 4</h4>
                        <span className="font-medium">2 mins away </span>
                        <span className="text-xs text-gray-800">Affordable, compact rides</span>
                    </div>
                    <div className="w-[20%]">
                        <span><i className="ri-money-rupee-circle-fill"></i></span>193.20
                    </div>
                </div>
                
                <div className="flex justify-between items-center p-2 gap-2 border border-gray-500 active:border-black rounded-lg">
                    <div className="w-[20%]">
                        <img className="h-13" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    </div>
                    <div className="flex flex-col w-[60%] ">
                        <h4 className="text-base font-medium">Moto <span><i className="ri-user-fill"></i></span>2</h4>
                        <span className="font-medium">3 mins away </span>
                        <span className="text-xs text-gray-800">Affordable, motorcycle rides</span>
                    </div>
                    <div className="w-[20%]">
                        <span><i className="ri-money-rupee-circle-fill"></i></span>65.17
                    </div>
                </div>

                <div className="flex justify-between items-center p-2 gap-2 border border-gray-500 active:border-black rounded-lg">
                    <div className="w-[20%]">
                        <img className="h-13" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    </div>
                    <div className="flex flex-col w-[60%] ">
                        <h4 className="text-base font-medium">UberAuto <span><i className="ri-user-fill"></i></span>2</h4>
                        <span className="font-medium">3 mins away </span>
                        <span className="text-xs text-gray-800">Affordable, Auto rides</span>
                    </div>
                    <div className="w-[20%]">
                        <span><i className="ri-money-rupee-circle-fill"></i></span>118.21
                    </div>
                </div>

            </div>
           
        </div>

   
    )
}

export default Home

//https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png