
const Loading = () => {
  return (
    <div className="w-full animate-pulse flex-col md:px-[50px] flex items-center justify-center">
        {/* the container */}
        <div className='border-2 h-[85vh] border-gray-300 w-full rounded-xl md:w-[500px] lg:w-[600px]  flex flex-col gap-5 items-center justify-evenly'>
            {/* main weather & main icon */}
            <div className='flex flex-col items-center justify-center'>
                {/* <div>main icon</div> */}
                {/* <IoSunnySharp className='text-yellow-500 text-[50px] md:text-[70px]'/> */}
                <div className='font-bold text-[20px] md:text-[30px] w-[50px] h-[50px] rounded bg-gray-300'></div>
            </div>
            {/*temperature */}
            <div  className='flex justify-between items-center gap-10 '>
                <div className='md:text-[20px] min-w-[100px] rounded h-[30px] bg-gray-300'><span className='text-[20px] md:text-[30px] ml-2'></span> </div>
                <div className='md:text-[20px] min-w-[100px] rounded h-[30px] bg-gray-300 font-bold'><span className='font-bold text-[20px] md:text-[30px] ml-2'></span></div>
                <div className='md:text-[20px] min-w-[100px] rounded h-[30px] bg-gray-300'><span className='text-[20px] md:text-[30px] ml-2'></span> </div>
            </div>
            {/* City Name */}
            <div className='min-w-[100px] text-center rounded h-[40px] bg-gray-300 md:text-[20px] font-bold pb-[10px]'>
                <h1> </h1>
            </div>
            {/* Details */}
            <div className='flex flex-col gap-5 items-center pb-[20px]'>
                {/* wind speed & humidity */}
                <div className='flex gap-20 md:gap-[150px] xl:gap-[200px]'>
                    {/* Wind Speed */}
                    <div className='h-[55px] bg-gray-300 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                        <div className='font-bold'></div>
                        <div></div>
                    </div>
                    {/* humidity */}
                    <div className='h-[55px] bg-gray-300 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                        <div className='font-bold'></div>
                        <div></div>
                    </div>
                </div>
                {/* sea level & pressure */}
                <div className='flex gap-20 md:gap-[150px] xl:gap-[200px]'>
                    {/* sea level */}
                    <div className='h-[55px] bg-gray-300 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                        <div className='font-bold'></div>
                        <div></div>
                    </div>
                    {/* pressure */}
                    <div className='h-[55px] bg-gray-300 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                        <div className='font-bold'></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="h-[35px] min-w-[100px] bg-gray-300 rounded-lg ">
                <h1 className='flex pb-[7px] justify-center items-center'> </h1>
            </div>
        </div>
    </div>
  )
}

export default Loading