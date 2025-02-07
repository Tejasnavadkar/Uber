


export const LocationSearchPanel = ({setVehiclePanleOpen,setPanelOpen}) => {

    const Locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22c, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
        "20B, Near sharma's cafe, Sheryians Coding School, Bhopal",
        "20B, Near singhania's cafe, Sheryians Coding School, Bhopal",
    ]

    return (
        <div className="px-4">
            {Locations.map((item)=>{
                return <LocationSearchItem key={item} address={item} setVehiclePanleOpen={setVehiclePanleOpen} setPanelOpen={setPanelOpen} />
            })}

        </div>
    )
}



export const LocationSearchItem = ({ address,setVehiclePanleOpen,setPanelOpen }) => {

    return (
        <div>
            <div onClick={()=>{
                setVehiclePanleOpen(true)
                setPanelOpen(false)
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