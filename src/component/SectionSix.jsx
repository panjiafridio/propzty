import { Acc, GraphOne, GraphTwo } from "../assets"
import { SectionWrapper } from "../hoc"


const SectionSix = () => {
  return (
    <div>
        <section className="flex flex-col relative w-full">
            <div className="flex flex-col w-[823px] h-[686px] absolute left-[2.22%] top-[736px]">
                <div className="bg-[rgb(166,88,64)] absolute left-0 right-0 top-0 bottom-0" />   
            </div>

            <div className="flex flex-col w-[823px] h-[675px] absolute right-[0.14%] top-[61px]">
                <div className="bg-[rgb(166,88,64)] w-[502px] h-[106px] absolute right-0 bottom-0" />
                <div className="bg-[rgb(166,88,64)] absolute left-0 right-0 top-0 bottom-0" />
                <img className="w-[94px] h-[38px] object-cover absolute right-[7.29%] top-[17px]" src={Acc} alt="alt text" />
            </div>

            <div className="flex flex-col md:flex-row w-full relative min-h-[483px] mt-[201px] mr-[39px] mb-[711px] ml-auto grow">
                <div className="graph-one w-[90%] h-[50vh] bg-white">
                    <img
                    className="w-full"
                    src={GraphOne}
                    alt="alt text"
                    />
                </div>
            
                <div className="w-[100%] lg:w-[80%] md:w-[100%] font-normal text-[22px] leading-[1.22] font-Inter text-white bg-[rgb(52,62,81)] pt-[53px] pr-[39px] pb-[52px] pl-[39px] grow">
                {`2022 marked a watershed year for Bali's property market, witnessing an impressive surge, beckoning savvy investors. However, the allure of growth is shadowed by concerns of overdevelopment and inadequate infrastructure catering to the surging tourist numbers.`}
                <br />
                {`The global economic climate, coupled with the lingering pandemic, continues to cast a short-term shadow over Bali's property market. Yet, our outlook remains resolutely optimistic. Bali's enduring charm as a tourist haven and the growing interest from foreign investors in island properties promise a bright and prosperous future for its property market.`}
                </div>
            </div>

            <h1 className="font-semibold text-[50px] leading-[1.22] font-Inter text-white w-[388px] h-[61px] absolute right-[28.68%] top-[93px]">
                Market Analysis
            </h1>

            <div 
                className="flex flex-col md:flex-row w-full md:w-[95%] bg-white -translate-y-[600px]"
            >
                <div
                className="font-normal text-[22px] leading-[1.22] font-Inter text-white bg-[rgb(52,62,81)] w-[100%] md:w-[60%] pt-[53px] pr-[39px] pb-[53px] pl-[39px] mr-auto ml-[3px] grow">{`Behold the power of data! Over just three short years, Bali's rental property market has undergone a jaw-dropping transformation. It's a tale of resilience, from pandemic-induced revenue declines to an awe-inspiring exponential growth phase. The Bali property market is on the move, and the time to seize this dynamic opportunity is now!`}
                </div>
                <img src={GraphTwo} className="w-full md:w-[60%]" alt="" />
            </div>
        </section>
    </div>
  )
}

export default SectionWrapper(SectionSix, "")

