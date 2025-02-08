

export const CaptainDetails = () =>{

    return (
        <>
         <div className="">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="">
                        <img className="h-10 w-10 overflow-hidden rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s" alt="" />
                    </div>
                    <div className="font-semibold">jhone conner</div>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">$295.20</span>
                    <span className="text-xs text-gray-800">Earned</span>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-6 py-2 rounded-xl bg-gray-100">
                <div className="flex flex-col items-center">
                    <div>
                    <i className="ri-speed-up-line text-2xl font-thin"></i>
                    </div>
                    <div className="font-medium">10.2</div>
                    <div className="text-xs font-medium text-gray-500">Hours Online</div>
                </div>

                <div className="flex flex-col items-center">
                    <div>
                    <i className="ri-speed-up-line text-2xl font-thin"></i>
                    </div>
                    <div className="font-medium">10.2</div>
                    <div className="text-xs font-medium text-gray-500">Hours Online</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                    <i className="ri-booklet-line text-2xl font-thin"></i>
                    </div>
                    <div className="font-medium">10.2</div>
                    <div className="text-xs font-medium text-gray-500">Hours Online</div>
                </div>
            </div>
          </div>
        </>
    )
}