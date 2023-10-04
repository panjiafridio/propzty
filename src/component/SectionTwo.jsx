import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { Room, about, btnAnimate } from "../assets";
import { SectionWrapper } from "../hoc";

const SectionTwo = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

  return (
    <motion.div ref={ref}>
        <section className="flex md:flex-row flex-col relative mb-[10%] gap-10 bg-About bg-center bg-cover">
            <motion.img 
                className="md:w-[50%] w-full h-[30vh] mt-4 opacity-0" 
                src={Room} 
                alt="alt text" />
            <motion.div 
                initial={{ opacity: 0, y: '50%' }}
                animate={inView ? { opacity: 1, y: '0%' } : {}}
                transition={{ duration: 0.5, type : 'tween' }}
                // whileInView={{ y : [100, 0], opacity : [0, 1] }}
                // transition={{ duration: 1, type: 'tween'}}
                className="p-5 mt-[2%] w-full md:w-[40%] md:h-[60vh] flex justify-center items-center flex-col relative bg-white"
            >
                    <h1 className="font-normal text-[3.5rem] leading-[1.21] font-Inter text-black">
                    About Us</h1>

                    <h1
                        className="font-normal text-[1.2rem] font-Inter text-black opacity-[80%] mt-[5%]"
                    >
                        {`At Propzty, we're dedicated to revolutionizing the world of real estate investment. With our innovative fractional model, we're making property investment both affordable and secure for everyone. Our mission is to unlock real estate dreams, one fraction at a time. We believe in transparency, trust, and empowering individuals to invest in property developer projects with confidence. Discover a new way to invest in real estate with Propzty and join us in reshaping the future of property investment.
`}
                    </h1>

                    <div className="flex flex-col bg-[rgb(166,88,64)] p-5 rounded-lg cursor-pointer relative mt-4">
                        <h1 className="font-normal text-2xl font-Inter text-white text-center">
                        Read More
                        </h1>
                    </div>
            </motion.div>

        </section>

        <section className="relative">
            <motion.img 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 1, scaleX : 1 } : {}}
                transition={{ duration: 0.5, type : 'tween', delay : 1 }}
                src={about}
                className="w-[80%] md:w-[50%] absolute md:top-[-110%] top-[-45%] right-0 cursor-text origin-right"
            />
            <motion.img 
                initial={{ opacity: 0, x: '-50%' }}
                animate={inView ? { opacity: 1, x: '0%' } : {}}
                transition={{ duration: 0.5, type : 'tween', delay : 1 }}
                src={btnAnimate}
                className="w-[7%] md:w-[5%] absolute top-[-20%] left-[1%] cursor-pointer"
            />
            <div className="w-full h-[10vh] bg-[#D9D9D9]"></div>
        </section>
    </motion.div>
  )
}


export default SectionWrapper(SectionTwo, "");