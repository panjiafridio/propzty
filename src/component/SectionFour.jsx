import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

import { client1, client2 } from "../assets"
import { SectionWrapper } from "../hoc"

const SectionFour = () => {
    const [refFour, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.4, // elemen akan dianggap dalam tampilan saat setengahnya terlihat
    });

  return (
    <motion.section ref={refFour} className="flex flex-col w-full relative">
        <div className="w-full h-[30vh] md:h-[70vh] sm:h-80 overflow-hidden mb-5">
            <motion.img
                src={client1}
                className="w-[100%]"
                initial={{ y: -600 }}
                animate={inView ? { y : 0 } : {}}
                transition={{ duration: 0.5, type : 'tween'}}
            />
        </div>
        <div className="w-full h-[30vh] md:h-[70vh] sm:h-80 overflow-hidden">
            <motion.img
                className="w-[100%]"
                initial={{ y: -600 }}
                animate={inView ? { y : 0 } : {}}
                transition={{ duration: 0.5, type : 'tween', delay : 0.5}}
                src={client2}
            />
        </div>
        <div className="w-full flex flex-col mt-[5%]">
            <h1 className="w-[70%] mx-auto flex justify-center items-center bg-slate-500 p-5 text-white text-[1rem] md:text-[1.5rem] md:h-[10vh] h-[20vh] mt-[10%] rounded-lg">
            <svg className="fill-white text-[3rem] mr-[2%] cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg> M4YA Canggu
                Jl. Pantai Berawa No.168, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
            </h1>
            <iframe className="w-[80%] mx-auto mt-[2%] h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.8042417870446!2d115.13979413724046!3d-8.659357545382443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247a63bf4d071%3A0x672fd4dd016e2bb2!2sM4YA%20Canggu!5e0!3m2!1sid!2sid!4v1696088662805!5m2!1sid!2sid"></iframe>
        </div>
    </motion.section>
  )
}

export default SectionWrapper(SectionFour, "")
