import Nav from "./Nav";
import img from './636b9280b520dffc095f62ef_home-gradient-p-1600.png.png'
import {FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import phone from "../../../public/Phone.png"
const Hedar = () => {
    return (
        <div className=" h-[800px] lg:w-[1410px] rounded-[40px] mx-auto bg-white"  style={{ backgroundImage: `url(${img})` }}>
            <Nav></Nav>


<div className="mx-auto w-[1000px]  mt-32 ">

<div className="">

    <h1 className="font text-6xl tracking-widest w-[765px] leading-relaxed text-center text-black font-medium">Trusted <span className="text-white bg-black rounded-lg">Partner</span> for Your Website <span className="text-white rounded-xl bg-black">Develop</span>.</h1>
</div>
<div className="flex items-center mt-20 gap-32">
    <div className="flex gap-10 ">
<p className="text-black rotate-90 ml-[-45px]">@williamrey</p>
<div className="w-[182px ] items-center">
    <p className=" text-black w-10 mb-3 "><FaFacebookF /></p>
    <p className=" text-black w-10 mb-3"><FaInstagram /></p>
    <p className=" text-black mb-3"><FaTwitter /></p>
    <p className="border-black border-b rotate-90 w-10 relative lg:top-[1 pt-5 mt-5"></p>
</div>
   
    </div>

<div className="text-black ">

    <p className="w-[478px]">Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>

    <div className="flex  gap- border rounded-full w-52 h-14 mt-10 ">
      <span className=" rounded-full border  w-10 h-10  mt-2  mx-auto "><img className="w-4 mx-auto pt-2" src={phone} alt="" /></span>  <button className="mr-6">Schedule a Call</button>
    </div>
</div>


    
</div>
</div>

        </div>
    );
};

export default Hedar;