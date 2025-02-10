import { useEffect, useRef, useState } from "react"
import Logo from "../components/Logo"
import {useGSAP} from "@gsap/react"
import 'remixicon/fonts/remixicon.css'
import gsap from "gsap"
import {LocationSearchPanel} from "../components/LocationSearchPanel"
import { VehiclePanel } from "../components/VehiclePanel"
import { ConfirmedRide } from "../components/ConfirmedRide"
import LookingForDriver from "../components/LookingForDriver"
import WaitingForDriver from "../components/WaitingForDriver"
import axios from "axios"



const Home = () =>{

    const [pickup,setPickup] = useState('')
    const [destination,setDestination] = useState('')
    const [ isPanelOpen,setPanelOpen] = useState(false)
    const [isVehiclePanleOpen,setVehiclePanleOpen] = useState(false)
    const [isConfirmedRidePanelOpen,setConfirmedRidePanelOpen] = useState(false)
    const [vehicleFound,setVehicleFound] = useState(false)
    const [isWaitingForDriverPanelOpen,setWaitingForDriverPanelOpen] = useState(false)

    const [activeState,setActiveState] = useState(null)
    const [pickupSuggetions,setPickupSuggetions] = useState([])
    const [destinationSuggetions,setDestinationSuggetions] = useState([])
    

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const confirmedRideRefPanel = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriver = useRef(null)

    // const getSuggetions = async () =>{
    //     await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggetions`,{
    //         headers:{
    //             Authorization:
    //         },
    //         params:{

    //         }
    //     })
    //    }

    // useEffect(()=>{
       

    // },[pickup])

    const handlePickupChanges = async (e) =>{

        setPickup(e.target.value)

     try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggetions`,{
            headers:{
               Authorization:`bearer ${localStorage.getItem('token')}`
            },
            params:{input:e.target.value}
        })
        console.log(response.data.suggestions)
        setPickupSuggetions(response.data.suggestions)

     } catch (error) {
        console.log('error in handlePickupChanges-- ',error)
     }

    }

    const handleDestinationChanges = async (e) =>{

        setDestination(e.target.value)

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggetions`,{
                headers:{
                   Authorization:`bearer ${localStorage.getItem('token')}`
                },
                params:{input:e.target.value}
            })

            setDestinationSuggetions(response.data.suggestions)
        } catch (error) {
            console.log('error in handlePickupChanges-- ',error)
        }

    }


    

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

    useGSAP(()=>{
        if(isVehiclePanleOpen){
        gsap.to(vehiclePanelRef.current,{
            transform: 'translateY(0)'
        })
    }else{
        gsap.to(vehiclePanelRef.current,{
            transform: 'translateY(100%)'
        })
    }
    },[isVehiclePanleOpen])

    useGSAP(()=>{
        if(isConfirmedRidePanelOpen){
            gsap.to(confirmedRideRefPanel.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmedRideRefPanel.current,{
                transform:'translateY(100%)'
            })
        }
    },[isConfirmedRidePanelOpen])

    useGSAP(()=>{
        if(vehicleFound){
        gsap.to(vehicleFoundRef.current,{
            transform: 'translateY(0)'
        })
    }else{
        gsap.to(vehicleFoundRef.current,{
            transform: 'translateY(100%)'
        })
    }
    },[vehicleFound])

    useGSAP(()=>{
        if(isWaitingForDriverPanelOpen){
            gsap.to(waitingForDriver.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(waitingForDriver.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[isWaitingForDriverPanelOpen])

    console.log(activeState)


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
                        onChange={handlePickupChanges}
                        onClick={()=>{
                            setPanelOpen(true)
                            setActiveState('pickup')
                        }}
                        />

                        <input 
                        type="text" 
                        className="px-12 py-2 rounded-xl w-full bg-[#eee] outline-none" 
                        placeholder="Enter your destination" 
                        value={destination}
                        onChange={handleDestinationChanges}
                        onClick={()=>{
                            setPanelOpen(true)
                            setActiveState('destination')
                        }}
                        />
                        <button onClick={()=>{
                            setVehiclePanleOpen(true)
                            setPanelOpen(false)
                        }} className="bg-black text-white rounded-lg py-2 mt-2">Find Trip</button>
                    </form>
                </div>
                <div ref={panelRef} className="bg-white pt-2 ">
                    <LocationSearchPanel activeState={activeState} setPickup={setPickup} setDestination={setDestination} suggestions={activeState === 'pickup' ? pickupSuggetions : destinationSuggetions } setVehiclePanleOpen={setVehiclePanleOpen} setPanelOpen={setPanelOpen}/>
                </div>
            </div>

            <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8  flex flex-col gap-2 ">
               <VehiclePanel setVehiclePanleOpen={setVehiclePanleOpen} setConfirmedRidePanelOpen={setConfirmedRidePanelOpen}/>
            </div>

            <div ref={confirmedRideRefPanel} className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8  flex flex-col gap-2 ">
               <ConfirmedRide setConfirmedRidePanelOpen={setConfirmedRidePanelOpen} setVehicleFound={setVehicleFound}/>
            </div>

            <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8  flex flex-col gap-2 ">
               <LookingForDriver setVehicleFound={setVehicleFound} setConfirmedRidePanelOpen={setConfirmedRidePanelOpen}/>
            </div>

            <div ref={waitingForDriver} className="fixed z-10 bottom-0 bg-white w-full p-3 py-8  flex flex-col gap-2 ">
               <WaitingForDriver setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen} />
            </div>
           
        </div>

   
    )
}

export default Home

//https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png