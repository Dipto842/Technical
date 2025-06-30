import img from '../../../public/div.png'
import img2 from '../../../public/Vector 1.png'

const Work = () => {
    return (
        <div className="bg-[#141414] lg:w-[1410px] rounded-[40px] mx-auto  mt-12  ">

<div className='mx-auto w-[1350px]'>
    

              <div className='flex items-center mx-auto gap-48 mb-11 '>
                
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
            <div className='pt-5 '>
                    <h1 className='text-4xl '>My Work Process</h1>
                </div>
              </div>


              <div className='grid grid-cols-2 w-[1000px] gap-3 mx-auto justify-center'>
                {/* 1 card */}

<div className='  bg-black  mb-2 rounded-2xl  mt-8 '>
    <div className='flex justify-between pt-3 '>
        <div className='ml-7 rounded-3xl w-[120px] text-center bg-[#c5ffee] text-black'  ><h1>Discovery</h1></div>
        <div className='flex items-center gap-2 mr-7'><span><img className='w-5' src={img2} alt="" /></span> <button><a href="#">Read More</a>  <div className='border border-gray-300'></div>  </button>
             </div>
    </div>
<div className='mt-6 w-[366px] ml-7 pb-4'>
    <p>We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action.</p>
</div>


</div>
                {/* 2 card */}

<div className=' bg-[#c5ff41]   rounded-2xl  rotate-6'>
    <div className='flex justify-between pt-3 '>
        <div className='ml-7 rounded-3xl w-[120px] text-center bg-black text-white'  ><h1>Discovery</h1></div>
        <div className='flex items-center gap-2 mr-7 text-black'><span><img className='w-5 text-black' src={img2} alt="" /></span> <button><a href="#">Read More</a>  <div className='border border-gray-300'></div>  </button>
             </div>
    </div>
<div className='mt-6 w-[366px] ml-7 pb-4 text-gray-600'>
    <p>We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action.</p>
</div>


</div>
                {/* 3 card */}

<div className='   bg-black  mb- rounded-2xl   '>
    <div className='flex justify-between pt-3 '>
        <div className='ml-7 rounded-3xl w-[120px] text-center bg-[#c5ffee] text-black'  ><h1>Discovery</h1></div>
        <div className='flex items-center gap-2 mr-7'><span><img className='w-5' src={img2} alt="" /></span> <button><a href="#">Read More</a>  <div className='border border-gray-300'></div>  </button>
             </div>
    </div>
<div className='mt-6 w-[366px] ml-7 pb-4'>
    <p>We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action.</p>
</div>


</div>
                {/* 4 card */}

<div className='   bg-black  rounded-2xl '>
    <div className='flex justify-between pt-3 '>
        <div className='ml-7 rounded-3xl w-[120px] text-center bg-[#c5ffee] text-black'  ><h1>Discovery</h1></div>
        <div className='flex items-center gap-2 mr-7'><span><img className='w-5' src={img2} alt="" /></span> <button><a href="#">Read More</a>  <div className='border border-gray-300'></div>  </button>
             </div>
    </div>
<div className='mt-6 w-[366px] ml-7 pb-4'>
    <p>We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action.</p>
</div>


</div>



              </div>
</div>
        </div>
    );
};

export default Work;