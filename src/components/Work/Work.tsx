import img from '../../../public/div.png';
import img2 from '../../../public/Vector 1.png';

const Work = () => {
  return (
    <div className="bg-[#141414] lg:w-[1410px] rounded-[40px] mx-auto mt-12 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-11">
          <div className="pt-5 lg:pl-20">
            <div className="flex items-center gap-2">
              <div className="border rounded-full w-7 h-7 border-white flex items-center justify-center">
                <img className="w-3" src={img} alt="" />
              </div>
              <div className="border rounded-full w-40 h-7 flex items-center justify-center border-white text-white text-sm">
                <h1>Why Choose me</h1>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <h1 className="text-2xl lg:text-4xl text-white text-center lg:mr-[400px] lg:pt-10 lg:mb-5">My Work Process</h1>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {/* Card 1 */}
          <div className="bg-black rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div className="ml-3 rounded-3xl w-[120px] text-center bg-[#c5ffee] text-black text-sm py-1">
                <h1>Discovery</h1>
              </div>
              <div className="flex items-center gap-2 mr-3">
                <img className="w-5" src={img2} alt="" />
                <button>
                  <a href="#" className="text-white text-sm">Read More</a>
                </button>
              </div>
            </div>
            <div className="mt-6 w-full max-w-[366px] ml-3 pb-4 text-white text-sm">
              <p>
                We start every new client interaction with an in-depth discovery call where we get to
                know each other, discuss your current and future objectives, and recommend the best
                course of action.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#c5ff41] rounded-2xl p-4 rotate-6">
            <div className="flex justify-between items-center">
              <div className="ml-3 rounded-3xl w-[120px] text-center bg-black text-white text-sm py-1">
                <h1>Discovery</h1>
              </div>
              <div className="flex items-center gap-2 mr-3 text-black">
                <img className="w-5" src={img2} alt="" />
                <button>
                  <a href="#" className="text-sm">Read More</a>
                </button>
              </div>
            </div>
            <div className="mt-6 w-full max-w-[366px] ml-3 pb-4 text-gray-600 text-sm">
              <p>
                We start every new client interaction with an in-depth discovery call where we get to
                know each other, discuss your current and future objectives, and recommend the best
                course of action.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div className="ml-3 rounded-3xl w-[120px] text-center bg-[#c5ffee] text-black text-sm py-1">
                <h1>Discovery</h1>
              </div>
              <div className="flex items-center gap-2 mr-3">
                <img className="w-5" src={img2} alt="" />
                <button>
                  <a href="#" className="text-white text-sm">Read More</a>
                </button>
              </div>
            </div>
            <div className="mt-6 w-full max-w-[366px] ml-3 pb-4 text-white text-sm">
              <p>
                We start every new client interaction with an in-depth discovery call where we get to
                know each other, discuss your current and future objectives, and recommend the best
                course of action.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-black rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div className="ml-3 rounded-3xl w-[120px] text-center bg-[#c5ffee] text-black text-sm py-1">
                <h1>Discovery</h1>
              </div>
              <div className="flex items-center gap-2 mr-3">
                <img className="w-5" src={img2} alt="" />
                <button>
                  <a href="#" className="text-white text-sm">Read More</a>
                </button>
              </div>
            </div>
            <div className="mt-6 w-full max-w-[366px] ml-3 pb-4 text-white text-sm">
              <p>
                We start every new client interaction with an in-depth discovery call where we get to
                know each other, discuss your current and future objectives, and recommend the best
                course of action.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
