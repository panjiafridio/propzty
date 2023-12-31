import { motion } from "framer-motion";

import { rocket, town, vanya, vanyaLogo } from "../assets";
import { SectionWrapper } from "../hoc";


const SectionThree = () => {
  return (
        <section id="OurClient" className="w-full flex flex-col justify-around md:flex-row relative">
            <div className="w-full md:w-[50%] p-4 flex flex-col relative">
                <motion.div 
                initial={{ x : -100 }}
                whileInView={{ x:0 }}
                className="flex flex-col  relative">
                <img className="md:w-[32.05%] sm:w-[25%] w-[45%] mr-auto" src={vanyaLogo} alt="alt text" />
                <h2
                    className="font-normal md:text-[1.5rem] text-[1.2rem] mt-5 leading-[1.2] font-Inter text-[rgba(0,0,0,0.8)]">{`We're on a mission to be Bali's fastest-growing property developer, and we want you on board. Picture high-quality, innovative, and sustainable properties strategically positioned in a booming market. Our seasoned team of real estate, architecture, construction, and marketing experts is dedicated to crafting dream residences – villas, condos, apartments – for both local and global buyers.`}</h2>
                </motion.div>

                <div className="flex relative mt-6">
                    <motion.div 
                        initial={{ x : -100 }}
                        whileInView={{ x:0 }} 
                        className="flex flex-col relative p-5"
                    >
                        <img className="md:w-16 sm:w-12 w-[30%]" src={rocket} alt="alt text" />
                        <h1 className="font-semibold md:text-3xl text-[1.2rem] font-Inter text-black">
                        Our vision
                        </h1>
                        <h3
                        className="font-normal md:text-[20px] text-[1rem] leading-[1.2] font-Inter text-[rgba(0,0,0,0.8)] mt-2">{`To be Bali's foremost property developer, celebrated for our unwavering commitment to excellence, innovation, and sustainability.`}</h3>
                    </motion.div>

                    <motion.div  
                        initial={{ x : 100 }}
                        whileInView={{ x:0 }}
                        className="flex flex-col relative"
                    >
                        <img className="md:w-16 sm:w-12 w-[20%]" src={town} alt="alt text" />
                        <h1 className="font-semibold md:text-3xl text-[1.2rem] font-Inter text-black mt-5">{`We're not just building`}</h1>
                        <h3
                        className="font-normal md:text-[20px] text-[1rem] leading-[1.2] font-Inter text-[rgba(0,0,0,0.8)] w-[86.71%] mr-auto">{`we're sculpting Bali's real estate future while honoring its cultural legacy. Don't miss your chance to invest in Bali's property revolution with PT Vanya Asset Management. Join us today!`}</h3>
                    </motion.div>
                </div>
            </div>

            <motion.img 
                initial={{ x : 100 }}
                whileInView={{ x:0 }}
                className="w-[25%] hidden md:block" 
                src={vanya} alt="alt text" 
            />
        </section>
  )
}

export default SectionWrapper(SectionThree, "");

