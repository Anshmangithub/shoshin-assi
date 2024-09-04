import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='w-full h-[62px]  md:h-[91px] p-3 md:p-4 border-b-2 flex items-center ' >
   <IoMdMenu className='size-6 text-[#B2B2B2] md:invisible' />
   <div className='w-[245px] border-2  ml-5 md:w-[350px] md:h-[44px]  md:ml-1 flex'>
   <input type="text" className='w-[210px] h-[36px] md:h-[40px]  md:w-[280px] px-4' placeholder='Search'  />
    <button>
    <CiSearch className='text-[#B2B2B2] size-6 md:size-6 md:ml-6'  />
    </button>
   </div>

   <div className='relative h-full  ml-56 md:ml-[400px] z-50 md:w-80  flex justify-between items-center'>
   <IoMdNotifications className='text-[#B2B2B2] absolute right-36 md:right-[260px] size-6'/>
   <RiMessage2Fill className='text-[#B2B2B2] absolute right-24 md:right-[220px]  size-6'/>


   
   <div className='w-9 h-9 rounded-full bg-red-400 overflow-hidden absolute md:right-[150px] right-9'>
    <img src="girlImage.jpeg" alt="" />
   </div>   
   <h4 className='text-[#161E54] text-md font-semibold mr-2 invisible md:visible md:absoulte md:ml-44'>Admirra John</h4>
   <IoIosArrowDown className='text-[#B2B2B2] size-6 '/>
   


   </div>
    </div>
  )
}

export default Navbar