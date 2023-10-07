import { motion } from "framer-motion";
import { imagesSlider } from "../constant";
import { useEffect, useState } from "react";
import { logo } from "../assets";

const SectionOne = () => {

  return (
    <section className="w-full h-[100vh] flex flex-col items-center relative mb-[5%]">
      
      {/* navbar */}
      <div className="z-10 w-full flex justify-center items-center cursor-pointer">

        <div className="flex justify-center items-center gap-x-[30px] md:gap-x-[54px] mx-auto pt-5 relative min-w-0 w-full">
          <h1 className="font-bold text-[1.7rem] font-Inter text-white">
            <a href="#About">About</a>
          </h1>
          <h1 className="font-bold text-[1.7rem] font-Inter text-white">
          <a href="#OurClient">Our client</a>
          </h1>
          <h1 className="font-bold text-[1.7rem] font-Inter text-white">
            <a href="#contactUs">Contact Us</a>
          </h1>
        </div>
      </div>

      <Slideshow />

      <img className="md:w-[30%] w-[50%] object-contain md:-mt-[30%] sm:-mt-[50%] -mt-[70%] z-10" src={logo} alt="alt text" />
      
    </section>
  );
}

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesSlider.length);
    }, 5000); // Ubah angka ini untuk mengatur interval slideshow (dalam milidetik)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh] -z-1">
      {imagesSlider.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`image-${index}`}
          style={{
            position: 'absolute',
            top : '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};


// const gagalSlide = () =>{
//   const [index, setIndex] = useState(0)

//   function nextStep() {
//     if (index === imagesSlider.length - 1) {
//       setIndex(0)
//       return
//     }
//     setIndex(index + 1)
//   }

//   function prevStep() {
//     if (index === 0) {
//       setIndex(imagesSlider.length - 1)
//       return
//     }
//     setIndex(index - 1)
//   }

//   return(
//     <div className='flex overflow-hidden w-full h-[100vh] absolute top-0 left-0'>
//           <motion.img
//             key={index}
//             animate={{ opacity : [0, 1], duration : 1 }}
//             transition={{ type: "linear" }}
//             src={imagesSlider[index]}
//             alt='slides'
//             className="w-full h-[100vh] transition-all"
//           />
//         <button className="z-20 p-1 text-[4rem] absolute top-[50%] left-0 text-white" onClick={prevStep}>
//           &#129168;
//         </button>
//         <button className='z-20 p-1 text-[4rem] absolute top-[50%] right-0 text-white' onClick={nextStep}>
//           &#129170;
//         </button>
//       </div>
//   )
// }

export default SectionOne;
