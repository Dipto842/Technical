import { FaArrowDownLong } from "react-icons/fa6";
import phone from "../../../public/Phone.png"
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import {FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Frome = () => {
    return (
        <div className='bg-white bg-gradient-to-tl from-[#cbff07] via-[#cdffc4] text-black to-white  lg:w-[1410px] rounded-[40px] mx-auto'>
               <div  className='pt-5 pl-48'>
                <div className='flex mt-4 '>
                    <div className='border rounded-full w-7 h-7 t border-black '>
                        <p className=' w-4 text-center mx-auto pt-2 w-3  '><FaArrowDownLong /></p>
                    </div>
                    <div className='border border-black rounded-full w-40 text-center h-7   '>
                        <h1>Contact </h1>
                    </div>
                </div>
            </div>
   <div  className=" ">



      

 
<div className="mx-auto text-center flex justify-around items-center">
  <div>
      <h1 className='text-5xl w-[334px] leading-relaxed'>Interested in <span className='bg-black  text-white rounded-xl '>work</span> together?</h1>
    <p className="w-[443px] mr-7 pr-7 pt-5">We start every new client interaction with an in-depth discovery call where
we get to know each other</p>
<div className="flex  gap- border text-black border-black rounded-full w-52 h-14 ml-7 mt-10 text-center mx-auto">
      <span className=" rounded-full border border-black  w-10 h-10  mt-2  mx-auto "><img className="w-4 mx-auto pt-2" src={phone} alt="" /></span>  <button className="mr-6">Schedule a Call</button>
    </div>
  </div>



<div>

<div className="bg-black w-[300px]  rounded-xl">
    <input className="bg-inherit border border-black  text-white w-56 mt-8" type="text" placeholder="Enter your name" />
    <div className="border border-white w-64 text-center mx-auto mb-6"></div>
    <input className="bg-inherit border border-black  text-white w-56 mt-8" type="text" placeholder="Enter your name" />
    <div className="border border-white w-64 text-center mx-auto mb-6"></div>
    <input className="bg-inherit border border-black  text-white w-56 mt-8" type="text" placeholder="Enter your name" />
    <div className="border border-white w-64 text-center mx-auto mb-6"></div>



<div className="flex gap-9 justify-center">
     <div className='border text-white border-white rounded-full w-32 gap-2 text-center h-7 flex   '>
      <div className='border rounded-full text-white w-7 h-7 t border-white '>
                        <p className=' w-4 text-center mx-auto pt-2 w-3  '><IoIosSend /></p>
                    </div>
                   
                        <h1>Send </h1>
                    </div>
     <div className='border text-white border-white rounded-full w-32 gap-2 text-center h-7 flex   '>
      <div className='border rounded-full text-white w-7 h-7 t border-white '>
                        <p className=' w-4 text-center mx-auto pt-2 w-3  '><MdOutlineEmail /></p>
                    </div>
                   
                        <h1>Contact me </h1>
                    </div>
</div>


<div>
<div className="flex items-center justify-center gap-9 mt-6">
    <p className="text-white">@williamrey</p>
    <div className="flex">

  <p className=" text-white w-10 mb-3 "><FaFacebookF /></p>
    <p className=" text-white w-10 mb-3"><FaInstagram /></p>
    <p className=" text-white mb-3"><FaTwitter /></p>

    </div>
</div>
</div>



</div>

</div>


</div>
   </div>

        </div>
    );
};

export default Frome;