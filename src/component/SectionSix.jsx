import { GraphOne, GraphTwo } from "../assets"
import { SectionWrapper } from "../hoc"


const SectionSix = () => {
  return (
    <div>
        <section className="flex flex-col relative w-full mt-[5%]">

            <h1 className="font-semibold text-[2rem] md:text-[50px] leading-[1.22] font-Inter text-[#212121] p-5">
                Market Analysis
            </h1>

            <div className="flex flex-col md:flex-row w-full">
                <div className="graph-one w-[90%] h-[50vh] bg-white">
                    <img
                    className="w-full"
                    src={GraphOne}
                    alt="alt text"
                    />
                </div>
            
                <div className="w-[100%] p-4 font-normal md:text-[22px] text-[1rem] leading-[1.22] font-Inter text-white bg-[rgb(52,62,81)]">
                {`2022 marked a watershed year for Bali's property market, witnessing an impressive surge, beckoning savvy investors. However, the allure of growth is shadowed by concerns of overdevelopment and inadequate infrastructure catering to the surging tourist numbers.`}
                <br />
                {`The global economic climate, coupled with the lingering pandemic, continues to cast a short-term shadow over Bali's property market. Yet, our outlook remains resolutely optimistic. Bali's enduring charm as a tourist haven and the growing interest from foreign investors in island properties promise a bright and prosperous future for its property market.`}
                </div>
            </div>

            <div 
                className="mt-[10%] flex flex-col md:flex-row w-full md:w-[95%] bg-white"
            >
                <div
                className="p-4 font-normal text-[1rem] md:text-[22px] leading-[1.22] font-Inter text-white bg-[rgb(52,62,81)] w-[100%]">{`Behold the power of data! Over just three short years, Bali's rental property market has undergone a jaw-dropping transformation. It's a tale of resilience, from pandemic-induced revenue declines to an awe-inspiring exponential growth phase. The Bali property market is on the move, and the time to seize this dynamic opportunity is now!`}
                </div>
                <img src={GraphTwo} className="w-full md:w-[60%]" alt="" />
            </div>
        </section>
    </div>
  )
}

export default SectionWrapper(SectionSix, "")

