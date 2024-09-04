import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BsPinAngleFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";


const Dashbord = () => {
  return (
    <div className='px-14 py-8'>
    <div className='w-[640px] h-[62px] items-center '>
        <h1 className='text-3xl text-[#161E54] '>Dashboard</h1>
    </div>
     <div className='w-[640px] h-[136px] flex gap-4 ' >
     <div className='w-[204px] h-full bg-[#FFEFE7] rounded-[10px] p-4'>
       <h4 className='text-[#161E54] text-lg font-semibold mb-2'>Available Position</h4>
       <h2 className='text-[#161E54] text-3xl font-semibold mb-2'>24</h2>
       <h4 className='text-[#FF5151] text-md font-lighter'>4 Urgently needed</h4>
     </div>
     <div className='w-[204px] h-full bg-[#E8F0FB] rounded-[10px] p-4'>

     <h4 className='text-[#161E54] text-lg font-semibold mb-2'>Job Open</h4>
       <h2 className='text-[#161E54] text-3xl font-semibold mb-2'>10</h2>
       <h4 className='text-[#3786F1] text-md font-lighter'>4 Active hiring</h4>
     </div>
     <div className='w-[204px] h-full bg-[#FDEBF9] rounded-[10px] p-3'>

     <h4 className='text-[#161E54] text-lg font-semibold mb-2'>New Employees</h4>
       <h2 className='text-[#161E54] text-3xl font-semibold mb-2'>24</h2>
       <h4 className='text-[#EE61CF] text-md font-lighter'>4 Department</h4>

     </div>
     </div>

     {/* 2nd layout */}

     <div className='w-[640px] h-[186px] md:h-[190px] flex gap-4 mt-6'>

     <div className='w-[312px] h-full border-2 rounded-[10px] flex p-4'>
        <div className='w-1/2 h-full'>
        <h5 className='text-[#161E54] text-md font-semibold mb-4'>Total Employees</h5>
        <h1 className='text-4xl mb-8 font-semibold'>216</h1>
        <h6 className='text-xs font-lighter text-[#686868]'>120 Men</h6>
        <h6 className='text-xs font-lighter text-[#686868]'>96 Women</h6>
        </div>
        <div className='w-1/2 h-full'>
        <img src="2perlogo.png" alt="" />
        <button className='h-[24px] w-[107px] bg-[#FFEFE7] rounded-[4px] mt-10 mx-2'>
            <h6 className='text-xs text-dark '>+2% Past month</h6>
        </button>
        </div>
        </div>   
     <div className='w-[312px] h-full border-2 rounded-[10px] flex p-4'>
     <div className='w-1/2 h-full'>
        <h5 className='text-[#161E54] text-md font-semibold mb-4'>Talent Request</h5>
        <h1 className='text-4xl mb-8 font-semibold'>16</h1>
        <h6 className='text-xs font-lighter text-[#686868]'>6 Men</h6>
        <h6 className='text-xs font-lighter text-[#686868]'>10 Women</h6>
        </div>
        <div className='w-1/2 h-full'>
        <img src="5perlogo.png" alt="" />
        <button className='h-[24px] w-[107px] bg-[#FFEFE7] rounded-[4px] mt-10 mx-2'>
            <h6 className='text-xs text-dark '>+5% Past month</h6>
        </button>
        </div>
        
        </div>   
     </div>
     <div className='w-[640px] h-[289px] md:h-[334px] border-2 rounded-[10px] mt-6 p-5 relative'>

      <div className='w-[593px] h-[27]  flex justify-between items-center '>
        <h2 className="text-2xl font-semibold">Announcement</h2>

       <div className='w-[145px] h-[27px] border-2 flex justify-between items-center'>
        <h6 className='text-xs text-[#B2B2B2] ml-1' >Today, 13 Sep 2021</h6>
        <IoIosArrowDown className='text-[#B2B2B2] size-4 '/>
       </div>

      </div>
      
      <div className='w-[600px] h-[60px] md:h-[68px] border-2 mt-2 bg-[#FAFAFA] p-2 flex  items-center rounded-[6px]'>
      <div className='w-[405px] h-[44px] '>
        <h3 className='text-md text-[#303030]'>Outing schedule for every departement</h3>
        <h6 className='text-xs text-[#686868] mt-2'>5 Minutes ago</h6>
      </div>
      <div className='w-[68px] h-[24px] flex justify-evenly items-center  ml-20'>
      <BsPinAngleFill className='size-5 text-[#686868]' />
      <BsThreeDots className='size-5 text-[#B2B2B2]' />
      </div>
      </div>

      <div className='w-[600px] h-[60px] md:h-[68px] border-2 mt-2 bg-[#FAFAFA] p-2 flex  items-center rounded-[6px]'>
      <div className='w-[405px] h-[44px] '>
        <h3 className='text-md text-[#303030]'>Meeting HR Department</h3>
        <h6 className='text-xs text-[#686868] mt-2'>Yesterday, 12:30 PM</h6>
      </div>
      <div className='w-[68px] h-[24px] flex justify-evenly items-center  ml-20'>
      <BsPinAngleFill className='size-5 text-[#B2B2B2]' />
      <BsThreeDots className='size-5 text-[#B2B2B2]' />
      </div>
      </div>

      <div className='w-[600px] h-[60px] md:h-[92px] border-2 mt-2 bg-[#FAFAFA] p-2  flex  rounded-[6px]'>
      <div className='w-[405px] h-[44px] '>
        <h3 className='text-md text-[#303030]'>IT Department need two more talents for UX/UI Designer position</h3>
        <h6 className='text-xs text-[#686868] mt-2'>Yesterday, 12:30 PM</h6>
      </div>
      <div className='w-[68px] h-[24px] flex justify-evenly items-center  ml-20'>
      <BsPinAngleFill className='size-5 text-[#B2B2B2]' />
      <BsThreeDots className='size-5 text-[#B2B2B2]' />
      </div>
      </div>

      <button className='w-[637px] h-[39px] border-t-2 flex justify-center items-center  bg-white rounded-[0px_0px_10px_10px]  absolute left-0 bottom-0'>
        <h3 className='text-[#FF5151] text-md font-semibold '>See All Announcement</h3>
      </button>

     </div>
    
    <div className='flex w-[640px] h-[310px] md:flex-wrap gap-3 '>
    <div className='w-[250px] h-[319px] bg-[#161E54] mt-6 md:h-[258px] rounded-[10px] md:absolute md:top-40 md:w-[427px] md:right-14 overflow-x-hidden'>
 
     <div className='w-full h-[56px] bg-[#1B204A] p-3 items-center'> 
        <h3 className='text-white text-lg ml-2 md:text-xl '>Recently Activity</h3>
     </div>
     <div className='w-[188px] h-[110px] md:w-[340px] md:h-[90px] ml-4 mt-3'>
      <h6 className='text-xs text-[#FFFFFF] opacity-60'>10.40 AM, Fri 10 Sept 2021</h6>
      <h3 className='text-md text-white mt-2'>You Posted a New Job</h3>
      <h4 className='text-xs text-white opacity-80 mt-2'>Kindly check the requirements and terms of work and make sure everything is right.</h4>
     </div>

     <div className='w-[203px] h-[77px] ml-4 mt-8 md:w-[370px] md:h-[38px] md:flex'>

        <h5 className='text-white text-md'>Today you makes 12 Activity</h5>
        <button className='w-[146px] h-[38px] md:mt-1 md:ml-5 rounded-[6px] bg-[#FF5151] text-white mt-4'>See All Activity</button>
     </div>
       </div>

       <div className='w-[374px] h-[319px] md:w-[427px] md:h-[424px] rounded-[10px] border-2 mt-6  md:right-14 md:top-[61vh] md:absolute p-4  overflow-hidden relative'>

       <div className='w-[337px] h-[27] md:w-[386px] md:h-[28px] flex justify-between items-center '>
        <h2 className="text-lg font-semibold ">Upcoming Schedule</h2>

       <div className='w-[145px] h-[27px]  border-2 flex justify-between items-center'>
        <h6 className='text-xs text-[#B2B2B2] ml-1' >Today, 13 Sep 2021</h6>
        <IoIosArrowDown className='text-[#B2B2B2] size-4 '/>
       </div>
      </div>

        <h6 className='text-xs text-[#686868] mt-5 mx-1'>Priority</h6>
      <div className='w-[500px] md:w-[387px] h-[64px]  border-2 mt-2 bg-[#FAFAFA] p-1  flex items-center rounded-[6px]'>
      <div className='  h-[44px] '>
        <h3 className='text-sm font-semibold text-[#303030]'>Review candidate applications</h3>
        <h6 className='text-xs text-[#686868] mt-2'>Today - 11.30 AM</h6>
      </div>
      <div className='w-[68px] h-[24px] flex justify-evenly items-center  ml-12 md:ml-20'>
      
      <BsThreeDots className='size-5 text-[#B2B2B2]' />
      </div>
      </div>

      <h6 className='text-xs text-[#686868] mt-4 mx-1'>Other</h6>
      <div className='w-[340px] h-[64px] md:w-[387px] border-2 mt-2 bg-[#FAFAFA] p-2  flex items-center rounded-[6px]'>
      <div className='w-[260px] h-[44px] '>
        <h3 className='text-sm font-semibold text-[#303030]'>Interview with candidates</h3>
        <h6 className='text-xs text-[#686868] mt-2'>Today - 10.30 AM</h6>
      </div>
      <div className='w-[68px] h-[24px] flex justify-evenly items-center  ml-20 md:ml-9'>
      
      <BsThreeDots className='size-5 text-[#B2B2B2]' />
      </div>
      </div>
 
      <div className='w-[340px] h-[64px] md:w-[387px] md:h-[88px] border-2 mt-2 bg-[#FAFAFA] p-2  flex items-center rounded-[6px]'>
      <div className='w-[260px] h-[44px] md:w-[270px] mr-6 '>
        <h3 className='text-sm text-[#303030] font-semibold'>Short meeting with product designer from IT Departement</h3>
        <h6 className='text-xs text-[#686868] mt-2'>Today - 09.15 AM</h6>
      </div>
      <div className='w-[68px] h-[24px] flex justify-evenly items-center   '>
      
      <BsThreeDots className='size-5 text-[#B2B2B2]' />
      </div>

<button className='w-[374px] h-[39px] border-t-2 flex justify-center items-center  bg-white rounded-[0px_0px_10px_10px]  absolute  left-0 bottom-0'>
        <h3 className='text-[#FF5151] text-md font-semibold '>Creat a New Schedule</h3>
      </button>
      </div>

     
       </div>
       </div>
    </div>
  )
}

export default Dashbord