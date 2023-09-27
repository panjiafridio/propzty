import { motion } from "framer-motion"

import { client1, client2, clientmap } from "../assets"
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
        <motion.img
            className="mt-[10%]"
            src={clientmap}
            initial={{ x : 100 }}
            whileInView={{ x: 0 }}
        />
        <motion.div 
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
        </motion.div>
    </section>
  )
}

export default SectionWrapper(SectionFour, "")
