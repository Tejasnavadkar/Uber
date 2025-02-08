import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import FinishRide from "../components/FinishRide"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



const CaptainRiding = () => {

   const [finishRidePanel,setFinishRidePanel] = useState(false)
   const finishRidePanelRef =  useRef(null)

   useGSAP(()=>{
    if(finishRidePanel){
        gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
        })
    }
   },[finishRidePanel])

    return (
        <>

            <div className="h-screen">
                <div className="fixed p-6 top-0 w-full  flex items-center justify-between">
                    <Logo className={'w-16 shrink-0 '} />
                    <Link to={'/home'} className=" h-10 w-10 bg-white flex justify-center items-center rounded-full">
                        <i className=" text-xl font-bold ri-logout-box-r-line"></i>
                    </Link>
                </div>
                <div className="h-4/5 ">
                    <img className="h-full w-full object-cover " src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
                </div>


                <div className="h-1/5 bg-yellow-500 ">
                    <span  onClick={() => {
                               setFinishRidePanel(true)
                            }} className=" w-full pt-2 flex justify-center text-2xl" ><i className="ri-arrow-up-wide-line"></i></span>
                    <div className="flex items-center gap-10 justify-center mt-4 ">
                        <span className="flex items-center font-semibold">4 KM away</span>
                        <div className="">
                            <button onClick={() => {
                               setFinishRidePanel(true)
                            }} className="bg-green-600 flex justify-center py-2 px-10 text-white rounded-lg">Complete Ride</button>

                        </div>
                    </div>
                </div>

                <div ref={finishRidePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full p-3 py-8 h-[80%] flex flex-col gap-2 ">
                    <FinishRide  />
                </div>

            </div>
        </>
    )
}

export default CaptainRiding