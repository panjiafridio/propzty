import { motion } from "framer-motion"

import { client1, client2 } from "../assets"
import { SectionWrapper } from "../hoc"

const SectionFour = () => {
  return (
    <section className="flex flex-col w-full relative">
        <motion.img
            src={client1}
            initial={{ x : 100 }}
            whileInView={{ x: 0 }}
        />
        <motion.img
            src={client2}
            initial={{ x : 100 }}
            whileInView={{ x: 0 }}
        />
        <div className="w-full h-[50vh] flex flex-col md:flex-row mt-[5%]">
            <h1 className="flex justify-center items-center bg-slate-500 p-5 text-white text-[1.5rem] h-[20vh] mt-[10%] rounded-lg">
            <svg className="fill-white text-[3rem] mr-[2%] cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg> M4YA Canggu
                Jl. Pantai Berawa No.168, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
            </h1>
            <iframe className="w-[100%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.8042417870446!2d115.13979413724046!3d-8.659357545382443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247a63bf4d071%3A0x672fd4dd016e2bb2!2sM4YA%20Canggu!5e0!3m2!1sid!2sid!4v1696088662805!5m2!1sid!2sid"></iframe>
        </div>
        {/* <motion.div 
            className="flex flex-col absolute top-[13%] left-2"
            initial={{ x : -100 }}
            whileInView={{ x: 0 }}
        >
            <motion className="text flex flex-col">
                <h1 className="text-[2rem] text-[#A65840] font-bold">54M +</h1>
                <p className="text-[1rem] text-[#A65840]">Happy Costumer</p>
            </motion>
            <motion className="text flex flex-col">
                <h1 className="text-[2rem] text-[#A65840] font-bold">34K +</h1>
                <p className="text-[1rem] text-[#A65840]">Property variant</p>
            </motion>
        </motion.div> */}
    </section>
  )
}

export default SectionWrapper(SectionFour, "")
