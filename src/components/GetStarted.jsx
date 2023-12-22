import styles, { animations } from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:${animations.scale} hover:rotate-12 `}>
    <div className={`${styles.flexCenter} w-[100%] bg-primary flex-col h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 ">
          <span className="text-gradient">
            Get
          </span>
        </p>
        <img src={arrowUp} alt="arrowup" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]  ">
        <span className="text-gradient">
          Started
        </span>
      </p>
    </div>
  </div>
)

export default GetStarted;
