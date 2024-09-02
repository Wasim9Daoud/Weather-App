import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './components/Loading'

// icons
import { FaSearch } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5"
import { IoRainySharp } from "react-icons/io5";
import { TiWaves } from "react-icons/ti";
import { FaTemperatureLow } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi"; 
import { GiPressureCooker } from "react-icons/gi"; 
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

const Home = () => {

    const [ city , setCity ] = useState("Hawaiian")
    const [ weather , setWeather ] = useState({"main":"Snowy"})
    const [ details , setDetails ] = useState()
    const [ wind , setWind ] = useState()

    useEffect(()=>{
        getWeather()
        console.log(process.env.REACT_APP_API_KEY)
    },[])

    // getWeather function
    const getWeather =async ()=>{
        try {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res=>setDetails(res.data.main))
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res=>setWeather(res.data.weather[0]))
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res=>setWind(res.data.wind))
        } catch (error) {
            alert(error.message)
        }
    }

  return (
    <div className={weather?.main === "Rain" ? "rainyWeather w-full h-[100vh] flex-col md:px-[50px] flex items-center justify-center" : weather?.main === "Clouds" ? "cloudyWeather w-full h-[100vh] flex-col md:px-[50px] flex items-center justify-center" : weather?.main === "Clear" ? "clearWeather w-full h-[100vh] flex-col md:px-[50px] flex items-center justify-center" : "Snowy" ? "snowyWeather w-full h-[100vh] flex-col md:px-[50px] flex items-center justify-center" : "w-full h-[100vh] flex-col md:px-[50px] flex items-center justify-center" }>
        {/* application name & search box */}
        <div className='w-[50%] md:w-full flex flex-col items-center justify-center  gap-[10px] md:flex md:flex-row h-[10vh] md:justify-between'>
            {/* application name */}
            <h1 className='text-center md:text-start text-md w-full md:w-[300px] md:text-2xl font-bold mx-[10px] md:mx-0 text-white text-lg'>Weather Application</h1>
            {/* search box */}
            <div className='flex mb-[10px] md:w-[250px] mr-[5px] bg-blue-300 items-center border-2 border-white rounded-md md:mr-[10px]'>
                <div className='mx-[10px]'>
                   <FaSearch onClick={getWeather} className='text-white text-lg animate-bounce cursor-pointer'/>
                </div>
                <input 
                placeholder='Enter City Name..' 
                className='py-[5px] text-lg max-w-[175px] outline-none md:text-lg bg-blue-300 text-white font-bold pl-[10px]'
                onChange={(e)=>setCity(e.target.value)}
                ></input>
            </div>
        </div> 
        {
        details ? (
        // if there is results
        <div className='md:h-[90vh]  '>
            {/* the container */}
            <div className="bg-gray-900 opacity-[80%] rounded-xl ">
            <div className='border-2 border-gray-400 w-full rounded-xl md:w-[500px] lg:w-[600px] mt-[10px] flex flex-col gap-5 items-center justify-evenly h-full '>
                {/* main weather & main icon */}
                <div className='flex flex-col items-center  pt-[10px] justify-center'>
                    {
                        weather?.main === "Clouds" ? <FaCloud className='text-[50px] md:text-[70px] text-white'/> 
                        : weather?.main === "Clear" ? <IoSunnySharp className='text-[50px] md:text-[70px] text-yellow-500'/>
                        : weather?.main === "Rain" ? <IoRainySharp className='text-[50px] md:text-[70px] text-gray-700'/> : "Loading.."
                    }
                    <div className='font-bold text-[20px] md:text-[30px] text-white'>{weather?.main}</div>
                </div>
                {/*temperature */}
                <div  className='flex justify-between items-center gap-10 '>
                    <div className='md:text-[20px] flex flex-col items-center'><div className='flex justify-center items-center gap-[5px] text-blue-300'><FaTemperatureLow/><FaLongArrowAltDown/></div><div className='text-center text-[20px] md:text-[30px] ml-2 text-white'>{details?.temp_min} c</div> </div>
                    <div className='md:text-[20px] font-bold flex flex-col items-center'><div className='flex justify-center items-center gap-[5px] text-blue-300'><FaTemperatureLow/></div><div className='text-center font-bold text-[20px] md:text-[30px] ml-2 text-white'>{details?.temp} c</div></div>
                    <div className='md:text-[20px] flex flex-col items-center'><div className='flex justify-center items-center gap-[5px] text-blue-300'><FaTemperatureLow/><FaLongArrowAltUp/></div><div className='text-center text-[20px] md:text-[30px] ml-2 text-white'>{details?.temp_max} c</div> </div>
                </div>
                {/* City Name */}
                <div className='border-b-2 text-blue-300 md:text-[30px] font-bold border-gray-400 pb-[10px]'>
                    <h1>{city}</h1>
                </div>
                {/* Details */}
                <div className='flex flex-col gap-5 items-center border-b-2 border-gray-400 pb-[20px]'>
                    {/* wind speed & humidity */}
                    <div className='flex gap-20 md:gap-[150px] xl:gap-[200px]'>
                        {/* Wind Speed */}
                        <div className='bg-green-400 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                            <div className='font-bold text-gray-700'>Wind Speed</div>
                            <div className='flex justify-center items-center gap-[10px] md:text-[20px] text-[20px] text-white'><FaWind/> {wind?.speed}</div>
                        </div>
                        {/* humidity */}
                        <div className='bg-red-700 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                            <div className='font-bold text-gray-500'>humidity</div>
                            <div className='flex justify-center items-center gap-[10px] md:text-[20px] text-white'><WiHumidity className='md:text-[25px] text-[25px]'/> {details?.humidity}</div>
                        </div>
                    </div>
                    {/* sea level & pressure */}
                    <div className='flex gap-20 md:gap-[150px] xl:gap-[200px]'>
                        {/* sea level */}
                        <div className='bg-blue-400 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                            <div className='font-bold text-gray-700'>sea level</div>
                            <div className='flex justify-center items-center gap-[10px] md:text-[20px] text-white'><TiWaves className='md:text-[30px] text-[25px]'/>{details?.sea_level}</div>
                        </div>
                        {/* pressure */}
                        <div className='bg-yellow-500 text-center rounded-lg px-[15px] py-[5px] max-w-[175px] min-w-[125px]'>
                            <div className='font-bold text-gray-700'>pressure</div>
                            <div className='flex justify-center items-center gap-[10px] text-[20px] text-white'><GiPressureCooker/> {details?.pressure}</div>
                        </div>
                    </div>
                </div>
                {/* description */}
                <div>
                    <h1 className='flex md:text-xl text-lg mb-[10px] font-bold border-b-2 border-gray-400 pb-[7px] text-blue-300'>{weather?.description}</h1>
                </div>
            </div>
            </div>
        </div>
        ) : (
        // if there isn't results
        <div>
            <Loading/>
        </div>
        )
        }
    </div>
  )
}

export default Home
