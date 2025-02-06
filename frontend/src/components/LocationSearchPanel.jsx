


export const LocationSearchPanel = () =>{

    return (
        <div className="px-4">
          
            <LocationSearchItem icon={<i className="ri-map-pin-fill"></i>} address={"24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"} />
            <LocationSearchItem icon={<i className="ri-map-pin-fill"></i>} address={"24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"} />
            <LocationSearchItem icon={<i className="ri-map-pin-fill"></i>} address={"24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"} />
        </div>
    )
}



export const LocationSearchItem = ({icon,address}) =>{

    return(
       <div>
           <div className="flex border border-gray-300 active:border-black rounded-lg gap-3 items-center my-2 hover:bg-[#eee] py-2 px-2">
                <span className="bg-[#eee] rounded-full flex justify-center items-center px-2 py-1 ">
                  {icon}
                </span>
                <p className="font-medium">{address}</p>
             </div>
            
       </div>
    )
}