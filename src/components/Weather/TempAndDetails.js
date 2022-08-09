import React from 'react';
import { UilArrowDown, UilArrowUp,UilTemperature, UilWind, UilTear,
  UilSun, UilSunset, } from "@iconscout/react-unicons";


function TempAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy ????</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my" alt="" />
        <p className="text-5xl"> 55°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1"/>
            Real Feel:
            <span className="font-medium ml-1">54°</span>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">50%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1"/>
            Wind:
            <span className="font-medium ml-1">12 mph</span>
          </div>
          </div>
        </div>
      </div>
    <div className="flex flex-row items-center justify-center 
    space-x-2 text-white text-sm py-3">
      <UilSun />
      <p className="font-light">
        Rise: <span className="font-medium ml-1"> 6:08 AM</span>
      </p>
      <p className="font-light">|</p>
      <UilSunset />
      <p className="font-light">
        Set: <span className="font-medium ml-1"> 9:14 PM</span>
      </p>
      <p className="font-light">|</p>
      <UilSun />
      <p className="font-light">
        High: <span className="font-medium ml-1"> 100°</span>
      </p>
      <p className="font-light">|</p>
      <UilSun />
      <p className="font-light">
        Low: <span className="font-medium ml-1"> 95°</span>
      </p>
      <p className="font-light">|</p>
    </div>
  </div>

  )
}

export default TempAndDetails;
