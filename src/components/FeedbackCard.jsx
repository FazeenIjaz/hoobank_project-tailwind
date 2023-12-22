import { quotes } from "../assets"
import { animations } from "../style"

const FeedbackCard = ({ content, name, title, img }) => (
  <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr:0 my-5 feedback-card hover:${animations.scale}`}>
    <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain " />
    <p className="font-poppins font-normal text-[18px] leading-[32px] my-10 text-white">{content}</p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col mll-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] ml-2 text-white">{name}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] ml-2 text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard
