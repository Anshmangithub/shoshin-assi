import React from 'react'
import { MdDashboard } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";



const Aside = () => {
  return (<>
    <div className='w-full h-28  items-center flex justify-center md:w-[169px] md:h-[100px] md:gap-2'>
 <img src="logo-assi.png" alt="" className='size-12 ml-32' />
  <h1 className='text-[#0A337A]  text-3xl font-bold invisible md:visible'>Vasitum</h1>
    </div>
    <h6 className='text-xs font-lighter text-[#686868] mx-2 md:mx-20 md:text-md opacity-80 md:invisible'>Main menu</h6>


     <div className='md:w-full md:h-[318px] md:mt-4 invisible md:visible '>
        <div className='md:w-ful md:h-[38px]  md:flex md:justify-center md:items-center'>
            <h6 className='md:text-sm md:text-[#686868]'>MAIN MENU</h6>
        </div>
        <div className='md:w-[200px] md:ml-14  md:h-[56px] md:flex md:justify-around md:items-center'>
        <MdDashboard className='text-[#FF5151] size-7'/>
        <h3 className='text-xl font-semibold text-[#FF5151]'>Dashboard</h3>
        </div>
        <div className='md:w-[200px] md:ml-14 md:h-[56px] md:flex md:justify-around md:items-center'>
        <MdPersonAddAlt1 className='size-7 mx-1 text-[#B2B2B2] '/>
        <h3 className='text-xl font-semibold text-[#B2B2B2]'>Recruitment</h3>
        </div>
        <div className='md:w-[200px] md:ml-14 md:h-[56px] md:flex md:justify-around md:items-center'>
        <BiSolidCalendarEvent className='size-7 -mx-3 text-[#B2B2B2] '/>
        <h3 className='text-xl font-semibold text-[#B2B2B2]'>Schedule</h3>
        </div>
        <div className='md:w-[200px] md:ml-14  md:h-[56px] md:flex md:justify-around md:items-center'>

        <MdGroups className='size-7 -mx-3 text-[#B2B2B2] '/>
        <h3 className='text-xl font-semibold  text-[#B2B2B2]'>Employee</h3>
        </div>
        <div className='md:w-[200px] md:ml-14 md:h-[56px] md:flex md:justify-around md:items-center'>

        <PiDotsThreeCircleDuotone className='size-7 text-[#B2B2B2] '/>
        <h3 className='text-xl font-semibold text-[#B2B2B2]'>Department</h3>
        </div>
     </div>
    

    <div className='w-[24px] h-[260px] md:invisible -mt-72 ml-8  flex-wrap justify-between items-center  '>
    <MdDashboard className='text-[#FF5151] size-6'/>
    <MdPersonAddAlt1 className='size-6 text-[#B2B2B2] mt-9'/>
    <BiSolidCalendarEvent className='size-6 text-[#B2B2B2] mt-9' />
    <MdGroups className='size-6 text-[#B2B2B2] mt-9'/>
    <PiDotsThreeCircleDuotone  className='size-6 mt-9 text-[#B2B2B2]'/>

    </div>
    <h6 className='text-[#686868] text-[10px] mt-10 mx-8 md:invisible'>OTHER</h6>
   
   <div className='md:w-full md:h-[318px] md:mt-4 -mx-2 invisible md:visible'>
    <h6 className='md:mx-20 md:mt-5 text-[#686868] text-xs '>OTHER</h6>

    <div className='md:w-[200px] md:ml-14  md:h-[56px] md:flex md:justify-around md:items-center'>
        <BiSupport className='text-[#B2B2B2]  size-7'/>
        <h3 className='text-xl font-semibold text-[#B2B2B2] '>Support</h3>
        </div>

        <div className='md:w-[200px] md:ml-14  md:h-[56px] md:flex md:justify-around md:items-center'>
        <IoMdSettings className='text-[#B2B2B2]  size-7'/>
        <h3 className='text-xl font-semibold text-[#B2B2B2] '>Settings</h3>
        </div>
    </div>     
    <div className='w-[24px] h-[84px] flex-wrap ml-8  -mt-24 md:invisible' >
    <BiSupport className='size-6  text-[#B2B2B2] ' />
    <IoMdSettings className='size-6  text-[#B2B2B2] mt-9'  />
    </div>
    </>
  )
}

export default Aside