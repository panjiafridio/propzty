import { footer } from "../assets"
import { SectionWrapper } from "../hoc"


const Footer = () => {
  return (
    <div id="contactUs">
      <img className="w-full" src={footer} alt="" />
    </div>
  )
}

export default SectionWrapper(Footer, "")
