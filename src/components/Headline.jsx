import Marquee from "react-fast-marquee";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Headline = () => {
   return (
      <div className="flex items-center justify-between py-3">
         <p className="w-28 bg-[#8150fe] text-white font-semibold text-[14px] text-center py-1 px-3 rounded-lg">Top News</p>
         <Marquee pauseOnHover className="mx-2 font-semibold text-[14px]">
            I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo id nihil.
         </Marquee>
         <div className="flex items-center space-x-2 text-lg">
            <FaFacebook className="text-[#2c74e7]"/>
            <FaYoutube className="text-[#ff0000]" />
            <AiFillInstagram  className="text-[#e237cc]"/>
            <FaXTwitter />
         </div>


      </div>
   );
};

export default Headline;