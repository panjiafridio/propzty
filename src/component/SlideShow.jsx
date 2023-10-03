import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { SectionWrapper } from "../hoc"
import { sliders } from "../constant"

const SlideShow = () => {
  const [refSlide, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.6, // elemen akan dianggap dalam tampilan saat setengahnya terlihat
})

  return (
    <motion.div ref={refSlide}>
      {/* <motion.img 
        src={hero}
        className="w-full md:w-[80%] md:translate-x-[27%] mt-[1%] relative"
      /> */}
      <div className="w-full md:h-[10vh] sm:h-[20vh] h-[30vh] overflow-hidden">
        <motion.h1 
          initial={{ y: -100 }}
          animate={inView ? { y : 0 } : {}}
          transition={{ duration: 0.5, type : 'tween'}}
          className="font-bold md:text-[3rem] text-[2rem] font-Inter text-[#212121] text-center mt-[1%]"
        >
            What is fractional investment?
        </motion.h1>
      </div>
      <div className="w-full md:h-[6vh] h-[14vh] overflow-hidden">
        <motion.p 
          initial={{ y: 100 }}
          animate={inView ? { y : 0 } : {}}
          transition={{ duration: 0.5, type : 'tween'}}
          className="font-normal text-[1.2rem] font-Inter text-[#212121] text-center mt-[1%] opacity-[70%]"
        >
          Say Goodbye to Barriers: How Fractional Investing Opens Doors for Everyone in Real Estate
        </motion.p>
      </div>

      {/* Slide Show */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y : 0 } : {}}
        transition={{ duration: 0.5, type : 'tween', delay : 0.5}}
        className="w-full p-5 flex flex-row overflow-x-scroll gap-7 mt-[10%] z-10 bg-slate-600"
      >
      {sliders.map((slider) => (
        <div key={slider.number} className="flex flex-col items-center bg-white p-2">
          <div className="w-[400px] flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[1rem] bg-[#A65840] text-center w-[40px] rounded-full p-2 ">{slider.number}</h1>
            <h1 className="font-bold text-[rem]">{slider.teks}</h1>
          </div>
          <p className="p-5 text-[1rem]">
            {slider.desc}
          </p>
        </div>  
      ))}
      </motion.div>

      {/* <div className="w-full md:w-[80%] h-[50vh] bg-[#343E51] absolute top-[57%] md:top-[70%]">
      </div> */}
    </motion.div>
  )
}

export default SectionWrapper(SlideShow, "")
