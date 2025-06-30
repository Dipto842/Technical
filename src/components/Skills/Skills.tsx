import '../Hooke/Font.css'
import img from '../../../public/div.png'
import img1 from '../../../public/Vector 1.png'
import img2 from '../../../public/Vector 2.png'
import react from '../../../public/react.png'
const Skill = () => {
    return (
        <div className="bg-black lg:w-[1410px] rounded-[40px] mx-auto   ">
            <div  className='pt-5 pl-48'>
                <div className='flex mt-4 '>
                    <div className='border rounded-full w-7 h-7 t border-white '>
                        <img className=' w-4 text-center mx-auto pt-2 w-3  '  src={img} alt="" /> 
                    </div>
                    <div className='border rounded-full w-40 text-center h-7  border-white '>
                        <h1>Why Choose me </h1>
                    </div>
                </div>
            </div>

            <div className='flex justify-around mt-9 items-center'>
                <div>
                    <h1 className='text-5xl w-[343px] font h-full '>My Extensive List of Skills</h1>
                </div>


                <div className='pt-6'>
                   
                    <p className='font  w-[343px] mb-3 pt-7'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>

                    <div className='border border-white '></div>
                    <div className='flex gap-4 justify-end mb-3 mt-3'>
<div className='border   w-[4rem] h-[4rem] rounded-full text-center '><img className='mx-auto mt-5' src={img2} alt="" /></div>
<div className='border   w-[4rem] h-[4rem] rounded-full text-center '><img className='mx-auto mt-5' src={img1 } alt="" /></div>
                    </div>
                </div>
            </div>


            <div className='flex justify-center mt-14  gap-7'> 
                <div className='bg-[#141414] w-[350px]  h-[320px] rounded-xl '>
<div className='pl-7'>
    <div className=''>
    <img className='pt-11 pb-5' src={react} alt="" />
</div>
<div>
    <h1 className='font text-4xl pb-7'>HTML & CSS</h1>
    <p className=' font text-gray-400 w-[258px] p'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</p>
</div>
</div>
                </div>
                <div className='bg-[#141414] w-[350px] mb-10 h-[320px] rounded-xl rotate-12  '>
<div className='pl-7'>
    <div className=''>
    <img className='pt-11 pb-5' src={react} alt="" />
</div>
<div>
    <h1 className='font text-4xl pb-7'>HTML & CSS</h1>
    <p className=' font text-gray-400 w-[258px] p'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</p>
</div>
</div>
                </div>
                <div className='bg-[#141414] w-[350px]  h-[320px] rounded-xl '>
<div className='pl-7'>
    <div className=''>
    <img className='pt-11 pb-5' src={react} alt="" />
</div>
<div>
    <h1 className='font text-4xl pb-7'>HTML & CSS</h1>
    <p className=' font text-gray-400 w-[258px] p'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</p>
</div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Skill;