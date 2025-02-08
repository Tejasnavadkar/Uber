import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import { CaptainDetails } from "../components/CaptainDetails"
import AcceptRidePopup from "../components/AcceptRidePopup"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ConfirmRidePopup } from "../components/ConfirmRidePopup"

 
 



const CaptainHome = () => {

    const [ridePopUpPanle,setRidePopUpPanle] = useState(true)
    const [confirmRidePopup,setConfirmRidePopup] = useState(false)
   const ridePopUpPanleRef  = useRef(null)
   const rideConfirmRidePopUpPanleRef  = useRef(null)

   useGSAP(()=>{
   if(ridePopUpPanle){
    gsap.to(ridePopUpPanleRef.current,{
        transform:'translateY(0)'
    })
   }else{
    gsap.to(ridePopUpPanleRef.current,{
        transform:'translateY(100%)'
    })
   }
},[ridePopUpPanle])

useGSAP(()=>{
    if(confirmRidePopup){
     gsap.to(rideConfirmRidePopUpPanleRef.current,{
         transform:'translateY(0)'
     })
    }else{
     gsap.to(rideConfirmRidePopUpPanleRef.current,{
         transform:'translateY(100%)'
     })
    }
 },[confirmRidePopup])

    return (
        <div className="h-screen">
            <div className="fixed p-6 top-0 w-full  flex items-center justify-between">
                <Logo className={'w-16 shrink-0 '} />
                <Link to={'/home'} className=" h-10 w-10 bg-white flex justify-center items-center rounded-full">
                    <i className=" text-xl font-bold ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-3/5 ">
                <img className="h-full w-full object-cover " src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className="h-2/5 p-6">
                <CaptainDetails />
            </div>

            <div ref={ridePopUpPanleRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8 h-[80%] flex flex-col gap-2 ">
                <AcceptRidePopup setRidePopUpPanle={setRidePopUpPanle} setConfirmRidePopup={setConfirmRidePopup} />
            </div>

            <div ref={rideConfirmRidePopUpPanleRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8 h-screen flex flex-col gap-2 ">
                <ConfirmRidePopup setConfirmRidePopup={setConfirmRidePopup} setRidePopUpPanle={setRidePopUpPanle}/>
            </div>
        </div>
    )
}

export default CaptainHome