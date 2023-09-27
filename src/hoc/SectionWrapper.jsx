import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        className="w-full p-5"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
