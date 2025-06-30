import { FaArrowDownLong } from "react-icons/fa6";
import phone from "../../../public/Phone.png";
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Frome = () => {
  return (
    <div className="bg-white bg-gradient-to-tl from-[#cbff07] via-[#cdffc4] text-black to-white lg:w-[1410px] rounded-[40px] mx-auto p-8">
      {/* Header */}
      <div className="pt-5 pl-6 sm:pl-48">
        <div className="flex mt-4 items-center gap-2">
          <div className="border rounded-full w-7 h-7 border-black flex items-center justify-center">
            <FaArrowDownLong className="w-4 h-4" />
          </div>
          <div className="border border-black rounded-full w-40 text-center h-7 flex items-center justify-center">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-around items-center mt-10 gap-12 text-center lg:text-left">
        {/* Left Section */}
        <div className="max-w-md">
          <h1 className="text-5xl leading-relaxed">
            Interested in{" "}
            <span className="bg-black text-white rounded-xl px-2">work</span>{" "}
            together?
          </h1>
          <p className="mt-5">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <div className="flex gap-3 border border-black rounded-full w-52 h-14 mt-10 items-center justify-center mx-auto lg:mx-0 text-black">
            <span className="rounded-full border border-black w-10 h-10 flex items-center justify-center">
              <img className="w-4" src={phone} alt="phone" />
            </span>
            <button className="mr-6 font-semibold">Schedule a Call</button>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-black rounded-xl p-6 w-full max-w-sm text-white">
          <input
            className="bg-inherit border border-black text-white w-full mt-8 px-3 py-2 rounded"
            type="text"
            placeholder="Enter your name"
          />
          <div className="border border-white w-full my-6"></div>
          <input
            className="bg-inherit border border-black text-white w-full mt-8 px-3 py-2 rounded"
            type="email"
            placeholder="Enter your email"
          />
          <div className="border border-white w-full my-6"></div>
          <input
            className="bg-inherit border border-black text-white w-full mt-8 px-3 py-2 rounded"
            type="text"
            placeholder="Enter your message"
          />
          <div className="border border-white w-full my-6"></div>

          <div className="flex gap-9 justify-center">
            <div className="border text-white border-white rounded-full w-32 gap-2 text-center h-7 flex items-center justify-center cursor-pointer select-none">
              <div className="border rounded-full text-white w-7 h-7 flex items-center justify-center border-white">
                <IoIosSend className="w-4 h-4" />
              </div>
              <h1>Send</h1>
            </div>
            <div className="border text-white border-white rounded-full w-32 gap-2 text-center h-7 flex items-center justify-center cursor-pointer select-none">
              <div className="border rounded-full text-white w-7 h-7 flex items-center justify-center border-white">
                <MdOutlineEmail className="w-4 h-4" />
              </div>
              <h1>Contact me</h1>
            </div>
          </div>

          <div className="flex items-center justify-center gap-9 mt-6 mb-5">
            <p className="text-white">@williamrey</p>
            <div className="flex gap-3 text-white">
              <FaFacebookF className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
              <FaTwitter className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frome;
