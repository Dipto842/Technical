import './css.css'
import img from '../../../public/div.png'
const Developing = () => {
    return (
        <div className="bg-white bg-gradient-to-br from-[#cbff07] via-[#cdffc4] to-white lg:w-[1410px] rounded-[40px] mx-auto  h-[600px]">
           
<div>
   <div  className='pt-5 pl-48 text-black flex justify-end mr-24'>
                <div className='flex mt-4 '>
                    <div className='border rounded-full w-7 h-7 t border-black '>
                        <img className=' w-4 text-center mx-auto pt-2 w-3 text-black '  src={img} alt="" /> 
                    </div>
                    <div className='border rounded-full w-20 text-center h-7  border-black '>
                        <h1>About </h1>
                    </div>
                </div>
            </div>

            <div>
              <h1 className='text-6xl text-center w-[560px] mx-auto leading-relaxed text-black font'>I’ve been <span className='bg-black text-white rounded-xl'>Developing</span> Websites since <span className='bg-black text-white rounded-xl'>2013</span></h1>

              <p className='text-black font  w-[631px] mx-auto '>We start every new client interaction with an in-depth discovery call where
we get to know each other and recommend the best course of
action.</p>
            </div>
</div>



<div>
  <div>
    PREVIOUSLY WORKED ON
  </div>


<div>
  <div>
<h1></h1>
  </div>
</div>

</div>

        </div>
    );
};

export default Developing;