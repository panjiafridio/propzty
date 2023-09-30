import { SectionWrapper } from "../hoc"
import { sliders } from "../constant"

const SlideShow = () => {
  return (
    <div>
      {/* <motion.img 
        src={hero}
        className="w-full md:w-[80%] md:translate-x-[27%] mt-[1%] relative"
      /> */}

      <h1 className="font-bold text-[3rem] font-Inter text-[#212121] text-center mt-[1%]">What is fractional investment?</h1>
      <p className="font-normal text-[1.2rem] font-Inter text-[#212121] text-center mt-[1%] opacity-[70%]">Say Goodbye to Barriers: How Fractional Investing Opens Doors for Everyone in Real Estate</p>

      {/* Slide Show */}
      <div className="w-full p-5 flex flex-row overflow-x-scroll gap-7 mt-[10%] z-10 bg-slate-600">
      {sliders.map((slider) => (
        <div key={slider.number} className="flex flex-col items-center bg-white w-[50%] p-2">
          <div className="flex flex-row items-center gap-2 mt-1">
            <h1 className="font-bold text-white text-[2rem] bg-[#A65840] rounded-[50%] p-2 ">{slider.number}</h1>
            <h1 className="font-bold text-[2rem]">{slider.teks}</h1>
          </div>
          <p className="p-5">
            {slider.desc}
          </p>
        </div>  
      ))}
      </div>

      {/* <div className="w-full md:w-[80%] h-[50vh] bg-[#343E51] absolute top-[57%] md:top-[70%]">
      </div> */}
    </div>
  )
}

export default SectionWrapper(SlideShow, "")
