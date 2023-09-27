import { Interior2, Interior3, Interior4, Interior5, Interior6, textDarkInterior } from "../assets"
import { SectionWrapper } from "../hoc"



const SectionFive = () => {

  return (
    <section>
        <div className="mt-5 w-full flex flex-col md:flex-row md:gap-5 gap-0 mb-5">
            <div className="w-full md:h-[83vh] h-[50vh] bg-Interior1 bg-cover bg-center bg-no-repeat">
                <div className="p-4 bg-[#2121217f]">
                    <h1 className="text-white font-bold text-[1.5rem]">Property description</h1>
                    <p className="text-white text-[0.8rem]">Indulge in 21 meticulously crafted bedrooms, a captivating pool, and culinary delights, all enriched with state-of-the-art technology. Step into a world where opulence meets innovation, and let M4YA redefine your perception of luxury and hospitality. Invest now for a journey that promises both returns and a touch of magic!</p>
                </div>
            </div>
            <div className="flex flex-row md:mt-0 mt-[10%] gap-5">
                <div className="bg-[#343E51] w-[50%] 
                overflow-hidden">
                    <div className="ml-[10%]">
                        <img src={Interior2} className="w-[70%]" alt="" />
                        <h1 className="text-white font-bold text-[1.5rem]">Property description</h1>
                        <p className="text-white text-[0.8rem]">Indulge in 21 meticulously crafted bedrooms, a captivating pool, and culinary delights, all enriched with state-of-the-art technology.</p>
                    </div>
                </div>
                <div className="w-[50%] 
                overflow-hidden bg-[#343E51]">
                    <div className="ml-[10%] p-4">
                        <h1 className="text-white font-bold text-[1.5rem]">Property description</h1>
                        <p className="text-white text-[0.8rem] mb-3">Indulge in 21 meticulously crafted bedrooms, a captivating pool, and culinary delights, all enriched with state-of-the-art technology.</p>
                        <img src={Interior3} className="w-[75%]" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full md:h-[50vh] h-full bg-[#343E51] flex md:flex-row flex-col gap-40 md:gap-10 overflow-x-hidden p-5">
            <img className="w-[50%] md:w-[30%]" src={textDarkInterior} alt="" />
            <div className="flex flex-row md:gap-28 gap-10 ml-[10%] md:ml-0 overflow-x-scroll">
                <img src={Interior4} alt="" />
                <img src={Interior5} alt="" />
                <img src={Interior6} alt="" />
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper(SectionFive, "")
