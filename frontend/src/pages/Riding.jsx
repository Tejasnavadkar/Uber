import { Link } from "react-router-dom"



const Riding = () =>{

    return (
        <div className="h-screen">
            <Link to={'/home'} className="fixed top-2 right-2 h-10 w-10 bg-white flex justify-center items-center rounded-full">
            <i className=" text-xl font-bold ri-home-4-line"></i>
            </Link>
            <div className="h-1/2">
            <img className="h-full w-full object-cover " src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="h-1/2">
            <div className="flex flex-col gap-4 p-4">
                <div className="w-full  flex justify-between">
                    <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />

                    <div className="text-right">
                        <h2 className='tet-lg font-medium '>Sarthak</h2>
                        <h4 className="text-xl font-semibold -mt-1">MP04 AB 1234</h4>
                        <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
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
                <button className="bg-green-600 flex w-full justify-center py-2 mt-4 text-white rounded-lg">Make a Payment</button>
            </div>
            </div>
        </div>
    )
}

export default Riding