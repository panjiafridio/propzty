import { motion } from "framer-motion";

import  { hero, logo }  from "../assets";
import { SectionWrapper } from "../hoc";

const SectionOne = () => {
  return (
    <section className="flex flex-col relative">
      
      {/* navbar */}
      <div className="w-[90%] mx-auto flex gap-5 md:gap-[60%]">
        <img className="w-[133px] object-contain" src={logo} alt="alt text" />

        <div className="w-[491px] flex gap-x-[54px] relative min-w-0">
          <h1 className="font-normal text-xl font-Inter text-black">
            About
          </h1>
          <h1 className="font-normal text-xl font-Inter text-black">
            Our client
          </h1>
          <h1 className="font-normal text-xl font-Inter text-black">
            Contact Us
          </h1>
        </div>
      </div>

      <img className="w-[700px] h-[169px] object-contain mt-[5%]" src={logo} alt="alt text" />

      <motion.img 
        src={hero}
        className="w-full md:w-[80%] md:translate-x-[27%] mt-[5%] relative"
      />

      {/* Slide Show */}
      <div className="w-full p-5 flex flex-row overflow-x-scroll gap-7 mt-[10%] z-10">
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
        <div className="flex flex-col items-center bg-white w-[50%] md:w-[20%] h-[40vh] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">1</h1>
            <h1 className="font-bold text-[2rem]">Affordability</h1>
          </div>
          <p className="p-5">
            Fractionalization significantly lowers the barrier to entry. Investors can start with a smaller investment, as low as a fraction of the property &apos; s total value, and still enjoy ownership benefits.
          </p>
        </div> 
      </div>

      <div className="w-full md:w-[80%] h-[50vh] bg-[#343E51] absolute top-[57%] md:top-[70%]">
      </div>
      
    </section>
  );
}

export default SectionWrapper(SectionOne, "");
