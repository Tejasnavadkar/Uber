import { useState } from "react"
import { Link } from "react-router-dom"




export const ConfirmRidePopup = ({ setRidePopUpPanle, setConfirmRidePopup }) => {

     const [OTP,setOTP] = useState(null)

     const submitHandler = (e) =>{
        e.reventDefault()

     } 

    return (
        <div>
            <span className="absolute top-2 w-full flex justify-center text-2xl" onClick={() => {
                setRidePopUpPanle(false)
                setConfirmRidePopup(false)
            }} ><i className="ri-arrow-down-wide-line"></i></span>
            <h3 className="font-semibold text-xl my-2">Confirm this ride to Start</h3>
            <div className="flex flex-col gap-4 mt-5 mb-10">

                <div className="flex justify-between items-center bg-white border border-yellow-400 px-2 py-3 rounded-lg mb-3">
                    <div className="flex items-center gap-2">
                        <div className="">
                            <img className="h-10 w-10 object-cover overflow-hidden rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s" alt="" />
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
                <form onSubmit={(e)=>submitHandler(e)}>
                        <input value={OTP} onChange={(e)=>setOTP(e.target.value)} required className="w-full bg-[#eeeeee] py-2 px-2  font-mono rounded placeholder:text-base text-lg" type="number" placeholder="Enter OTP" />

                    <div>
                        <Link to={'/captain-riding'} className="bg-green-600 flex w-full justify-center py-2 mt-4 text-white rounded-lg">Confirm</Link>
                    </div>
                    <div>
                        <button onClick={() => {
                            setRidePopUpPanle(false)
                            setConfirmRidePopup(false)
                        }} className="bg-red-700 flex w-full justify-center py-2 mt-4 text-white rounded-lg">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}