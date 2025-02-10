


export const LocationSearchPanel = ({setVehiclePanleOpen,setPanelOpen,suggestions,activeState,setPickup,setDestination}) => {

    const Locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22c, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
        "20B, Near sharma's cafe, Sheryians Coding School, Bhopal",
        "20B, Near singhania's cafe, Sheryians Coding School, Bhopal",
    ]

    return (
        <div className="px-4">
            {suggestions?.map((item,idx)=>{
                return <LocationSearchItem key={idx}  address={item.description} setVehiclePanleOpen={setVehiclePanleOpen} setPanelOpen={setPanelOpen} activeState={activeState} setPickup={setPickup} setDestination={setDestination} />
            })}

        </div>
    )
}



export const LocationSearchItem = ({ address,setVehiclePanleOpen,setPanelOpen,activeState,setPickup,setDestination }) => {

    return (
        <div>
            <div onClick={()=>{
                // setVehiclePanleOpen(true)
                // setPanelOpen(false)
                activeState === 'pickup' ? setPickup(address) : setDestination(address)

                }} className="flex border border-gray-300 active:border-black rounded-lg gap-3 items-center my-2 hover:bg-[#eee] py-2 px-2">
                <span className="bg-[#eee] rounded-full flex justify-center items-center px-2 py-1 ">
                <i className="ri-map-pin-fill"></i>
                </span>
                <p className="font-medium">{address}</p>
            </div>

        </div>
    )
}

{/* <LocationSearchItem icon={<i className="ri-map-pin-fill"></i>} address={"24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"} />
<LocationSearchItem icon={<i className="ri-map-pin-fill"></i>} address={"24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"} />
<LocationSearchItem icon={<i className="ri-map-pin-fill"></i>} address={"24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"} />
</div> */}