import '../Hooke/Font.css';
import img from '../../../public/div.png';
import img1 from '../../../public/Vector 1.png';
import img2 from '../../../public/Vector 2.png';
import react from '../../../public/react.png';

const Skill = () => {
  return (
    <div className="bg-black lg:w-[1410px] rounded-[40px] mx-auto px-4 py-10">
      
      {/* Top Left Section */}
      <div className="pt-5 lg:pl-48">
        <div className="flex mt-4 gap-2">
          <div className="border rounded-full w-7 h-7 border-white flex items-center justify-center">
            <img className="w-3" src={img} alt="" />
          </div>
          <div className="border rounded-full w-40 text-center h-7 border-white flex items-center justify-center text-sm text-white">
            <h1>Why Choose me</h1>
          </div>
        </div>
      </div>

      {/* Heading + Description */}
      <div className="flex flex-col lg:flex-row justify-between mt-9 items-center gap-10 lg:gap-0 px-2">
        <div>
          <h1 className="text-3xl lg:text-5xl max-w-xs font lg:ml-[500px] text-white text-center lg:text-left">
            My Extensive List of Skills
          </h1>
        </div>

        <div className="pt-6 max-w-sm text-center lg:text-right">
          <p className="font text-white mb-3 pt-7">
            Building the worlds best marketing Your trusted partner for strategy, design, and dev.
          </p>

          <div className="border border-white mb-3"></div>
          <div className="flex gap-4 justify-center lg:justify-end">
            <div className="border w-16 h-16 rounded-full flex items-center justify-center">
              <img className="w-6" src={img2} alt="" />
            </div>
            <div className="border w-16 h-16 rounded-full flex items-center justify-center">
              <img className="w-6" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center mt-14 gap-7">
        <div className="bg-[#141414] w-[350px] h-[320px] rounded-xl">
          <div className="pl-7 pt-11">
            <img className="pb-5" src={react} alt="" />
            <h1 className="font text-2xl lg:text-4xl pb-4 text-white">HTML & CSS</h1>
            <p className="font text-gray-400 w-[258px]">
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
            </p>
          </div>
        </div>

        <div className="bg-[#141414] w-[350px] h-[320px] rounded-xl rotate-12">
          <div className="pl-7 pt-11">
            <img className="pb-5" src={react} alt="" />
            <h1 className="font text-2xl lg:text-4xl pb-4 text-white">HTML & CSS</h1>
            <p className="font text-gray-400 w-[258px]">
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
            </p>
          </div>
        </div>

        <div className="bg-[#141414] w-[350px] h-[320px] rounded-xl">
          <div className="pl-7 pt-11">
            <img className="pb-5" src={react} alt="" />
            <h1 className="font text-2xl lg:text-4xl pb-4 text-white">HTML & CSS</h1>
            <p className="font text-gray-400 w-[258px]">
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
