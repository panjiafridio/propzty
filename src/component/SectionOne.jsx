import { motion } from "framer-motion";
import { imagesSlider } from "../constant";
import { useState } from "react";
import { logo } from "../assets";

const SectionOne = () => {
  const [index, setIndex] = useState(0)

  function nextStep() {
    if (index === imagesSlider.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    if (index === 0) {
      setIndex(imagesSlider.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (
    <section className="w-full h-[100vh] flex flex-col items-center relative">
      
      {/* navbar */}
      <div className="z-10 w-full flex justify-center items-center cursor-pointer">
        {/* <img className="w-[133px] object-contain" src={logo} alt="alt text" /> */}

        <div className="flex justify-center items-center gap-x-[54px] pt-5 relative min-w-0 bg-[#2121217e] w-full">
          <h1 className="font-normal text-[1.7rem] font-Inter text-white">
            About
          </h1>
          <h1 className="font-normal text-[1.7rem] font-Inter text-white">
            Our client
          </h1>
          <h1 className="font-normal text-[1.7rem] font-Inter text-white">
            Contact Us
          </h1>
        </div>
      </div>

      <div className='flex overflow-hidden w-full h-[100vh] absolute top-0 left-0'>
        <motion.img
          animate={{ opacity : [0, 1], duration : 1 }}
          transition={{ type: "linear" }}
          src={imagesSlider[index]}
          alt='slides'
          className="w-full h-[100vh] transition-all"
          key={imagesSlider[index]}
        />
        <button className="z-20 p-1 text-[4rem] absolute top-[50%] left-0 text-white" onClick={prevStep}>
          &#129168;
        </button>
        <button className='z-20 p-1 text-[4rem] absolute top-[50%] right-0 text-white' onClick={nextStep}>
          &#129170;
        </button>
      </div>

      <img className="w-[30%] object-contain mt-[15%] z-10" src={logo} alt="alt text" />
      {/* <p className=" z-10 font-normal text-[2rem] font-Inter text-white text-center mt-[13%]">Introducing</p> */}
      {/* <h1 className="z-10 font-normal text-[5rem] font-Inter text-white text-center mt-[1%]">Propzty</h1> */}
      
    </section>
  );
}

export default SectionOne;
