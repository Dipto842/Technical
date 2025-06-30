import Nav from "./Nav";
import img from './636b9280b520dffc095f62ef_home-gradient-p-1600.png.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import phone from "../../../public/Phone.png";

const Hedar = () => {
  return (
    <div
      className="h-auto min-h-[800px] lg:w-[1410px] rounded-[40px] mx-auto bg-white bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Nav />

      <div className="mx-auto max-w-5xl mt-32">
        {/* Heading */}
        <div>
          <h1 className="font text-3xl md:text-6xl tracking-widest max-w-3xl leading-relaxed text-center text-black font-medium mx-auto">
            Trusted{" "}
            <span className="text-white bg-black rounded-lg px-2">Partner</span>{" "}
            for Your Website{" "}
            <span className="text-white rounded-xl bg-black px-2">Develop</span>.
          </h1>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center mt-20 gap-16 lg:gap-32">
          {/* Left Vertical Bar */}
          <div className="flex gap-10 items-center lg:items-start">
            <p className="text-black rotate-90 -ml-8 hidden lg:block">
              @williamrey
            </p>
            <div className="flex flex-col items-center">
              <p className="text-black w-10 mb-3">
                <FaFacebookF />
              </p>
              <p className="text-black w-10 mb-3">
                <FaInstagram />
              </p>
              <p className="text-black mb-3">
                <FaTwitter />
              </p>
              <p className="border-black border-b rotate-90 w-10 mt-5 hidden lg:block"></p>
            </div>
          </div>

          {/* Right Text + Button */}
          <div className="text-black text-center lg:text-left">
            <p className="max-w-md mx-auto lg:mx-0 text-base">
              Building the world’s best marketing websites for over a decade. Your
              trusted partner for strategy, design, and dev.
            </p>

            <div className="flex items-center gap-4 border rounded-full w-fit h-14 mt-10 mx-auto lg:mx-0 px-4">
              <span className="rounded-full border w-10 h-10 flex items-center justify-center">
                <img className="w-4" src={phone} alt="Phone" />
              </span>
              <button className="text-sm">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hedar;
