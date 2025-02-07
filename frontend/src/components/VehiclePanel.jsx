


export const VehiclePanel = ({setVehiclePanleOpen,setConfirmedRidePanelOpen}) =>{

    return (
        <>
         <span className="absolute top-2 w-full flex justify-center text-2xl" onClick={()=>setVehiclePanleOpen(false)} ><i className="ri-arrow-down-wide-line"></i></span>
                <h3 className="font-semibold text-xl my-2">Choose a Vehicle</h3>
                <div onClick={()=>setConfirmedRidePanelOpen(true)} className="flex justify-between items-center p-2 gap-2 border border-gray-500 active:border-black rounded-lg">
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
                
                <div onClick={()=>setConfirmedRidePanelOpen(true)} className="flex justify-between items-center p-2 gap-2 border border-gray-500 active:border-black rounded-lg">
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

                <div onClick={()=>setConfirmedRidePanelOpen(true)} className="flex justify-between items-center p-2 gap-2 border border-gray-500 active:border-black rounded-lg">
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
        </>
    )
}