

const AcceptRidePopup = ({setRidePopUpPanle,setConfirmRidePopup}) =>{

    return (
        <div>
                    <span className="absolute top-2 w-full flex justify-center text-2xl" onClick={() => { setRidePopUpPanle(false)}} ><i className="ri-arrow-down-wide-line"></i></span>
                    <h3 className="font-semibold text-xl my-2">New Ride Available!</h3>
                    <div className="flex flex-col gap-4 mt-5 mb-10">

                        <div className="flex justify-between items-center bg-yellow-400 px-2 py-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2">
                                <div className="">
                                    <img className="h-10 w-10 overflow-hidden rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s" alt="" />
                                </div>
                                <div className="font-semibold">jhone conner</div>
                            </div>
                            <div className="">
                                <span className="font-semibold text-lg">2.2KM</span>

                            </div>
                        </div>

                        <div className="flex gap-3 items-center border-b pb-2 border-b-gray-300 px-2 ">
                            <span><i className="ri-map-pin-user-fill"></i></span>
                            <div className="flex flex-col">
                                <span className="font-medium text-lg">562/11-A</span>
                                <span className="text-sm text-gray-600 ">Kankariya Talab, bhopal</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center border-b pb-2 border-b-gray-300 px-2 ">
                            <span><i className="ri-map-pin-fill"></i></span>
                            <div className="flex flex-col">
                                <span className="font-medium text-lg">562/11-A</span>
                                <span className="text-sm text-gray-600 ">Kankariya Talab, bhopal</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center px-2 ">
                            <span><i className="ri-currency-line"></i></span>
                            <div className="flex flex-col">
                                <span className="font-medium text-lg">₹193.20</span>
                                <span className="text-sm text-gray-600 ">Cash Cash</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button onClick={() => { setConfirmRidePopup(true)}} className="bg-green-600 flex w-full justify-center py-2 mt-4 text-white rounded-lg">Accept</button>
                    </div>
                    <div>
                        <button onClick={() => {setRidePopUpPanle(false) }} className="bg-gray-400 flex w-full justify-center py-2 mt-4 text-white rounded-lg">Ignore</button>
                    </div>
                </div>
    )
}

export default AcceptRidePopup