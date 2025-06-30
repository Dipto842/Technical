import './css.css';
import { FaArrowDownLong } from 'react-icons/fa6';

const Developing = () => {
  const badges = [
    'awwwards.',
    'CSS WINNER',
    '/thoughtworks',
    'AUTODESK',
    'facebook',
    'CSSDesignAwards'
  ];

  const generateRandomRotation = () => {
    return `${Math.floor(Math.random() * 10 - 5)}deg`; // -5 to +5 degrees
  };

  return (
    <div className="bg-white bg-gradient-to-br from-[#cbff07] via-[#cdffc4] to-white lg:w-[1410px] rounded-[40px] mx-auto h-auto min-h-[600px] py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Right Arrow + About */}
        <div className="pt-5 lg:pl-48 text-black flex justify-end lg:mr-24">
          <div className="flex mt-4 gap-2">
            <div className="border rounded-full w-7 h-7 flex items-center justify-center border-black">
              <FaArrowDownLong className="text-sm text-black" />
            </div>
            <div className="border rounded-full w-20 text-center h-7 flex items-center justify-center border-black text-sm">
              <h1>About</h1>
            </div>
          </div>
        </div>

        {/* Main Heading and Paragraph */}
        <div className="mt-8">
          <h1 className="text-3xl md:text-6xl text-center mx-auto leading-relaxed text-black font max-w-xl">
            I’ve been <span className="bg-black text-white rounded-xl px-2">Developing</span> Websites since <span className="bg-black text-white rounded-xl px-2">2013</span>
          </h1>
          <p className="text-black font w-full max-w-2xl mx-auto mt-4 px-2 text-center text-base md:text-lg">
            We start every new client interaction with an in-depth discovery call where
            we get to know each other and recommend the best course of action.
          </p>
        </div>

        {/* Previous Work */}
        <div className="text-black mt-10 text-center px-2">
          <div className="text-sm md:text-base font-semibold tracking-wide mb-4">
            PREVIOUSLY WORKED ON
          </div>

          <div className="flex flex-wrap gap-3 justify-center items-center py-4">
            {badges.map((text, idx) => (
              <div
                key={idx}
                className={`inline-block px-4 py-2 rounded-full font-semibold border text-sm md:text-base ${
                  text === 'awwwards.'
                    ? 'bg-black text-white border-none'
                    : 'bg-white text-black'
                }`}
                style={{
                  transform: `rotate(${generateRandomRotation()})`,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Developing;
