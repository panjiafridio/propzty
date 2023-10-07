import { useEffect, useState } from "react";
import { photosGallery, propertys } from "../constant"
import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const SectionFive = () => {

    const [percentage, setPercentage] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      let counter = 1;
      const interval = setInterval(() => {
        if (counter <= 21) {
          setPercentage(counter);
          counter++;
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section>
        <div className="mt-5 w-full flex justify-center items-center md:gap-5 gap-0 mb-5">
            <div className="w-full md:h-[83vh] h-[50vh] bg-About bg-cover bg-center bg-no-repeat">
                <div className="p-4 bg-[#2121217f] md:w-[45%] lg:w-[70%] xl:w-[60%] w-[80%]">
                    <h1 className="text-white font-bold md:text-[1.5rem] lg:text-[2.5rem] xl:text-[4rem] text-[1rem]">Property description</h1>
                    <p className="text-white text-[0.6rem] md:text-[0.8rem] lg:text-[1.2rem] xl:text-[1.7rem]">Indulge in 21 meticulously crafted bedrooms, a captivating pool, and culinary delights, all enriched with state-of-the-art technology. Step into a world where opulence meets innovation, and let M4YA redefine your perception of luxury and hospitality. Invest now for a journey that promises both returns and a touch of magic!</p>
                </div>
                <div className="grid-cols-3 grid justify-center  items-center w-full bg-white p-3 md:mt-[26%] mt-[25%]">
                    {propertys.map((property) => (
                        <div key={property.number} className="flex flex-col justify-center items-center">
                            <h1 className="text-[#212121] opacity-[0.7] sm:text-[1rem] md:text-[1.9rem] lg:text-[1.5rem] text-[1.7rem]">{property.desc}</h1>
                            <p className="text-[#212121] text-[0.5rem] md:text-[1.2rem] font-bold flex justify-center items-center">{property.number}</p>
                        </div>
                    ))}
                    <div ref={ref} className="flex flex-col justify-center items-center">
                        <h1 className="text-[#212121] opacity-[0.7] sm:text-[1rem] md:text-[1.9rem] text-[1.7rem]">TYPE</h1>
                        <p className="text-[#212121] text-[0.6rem] md:text-[1.2rem] font-bold flex justify-center items-center">{percentage} ROOM BOUTIQUE HOTEL </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-full bg-[#343E51] flex flex-col justify-center items-center overflow-x-hidden p-5 mt-[20%] md:mt-0 lg:mt-[10%]">
            <h1 className="md:text-[3.5rem] text-[2rem] text-white">PHOTO GALLERY</h1>
            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, laborum?</p>
            <div className="flex flex-wrap justify-center items-center w-full mt-[5%] gap-5">
                {photosGallery.map((photo) => (
                    <motion.img whileHover={{ scale : [1, 1.5] }} key={photo.key} className="cursor-pointer md:w-[400px] w-[300px] md:h-[500px] h-[400px]" src={photo.img} alt="" />
                ))}
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper(SectionFive, "")
