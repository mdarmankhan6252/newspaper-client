import SharedTitle from "../../components/SharedTitle";
import About_banner from "./About_banner";
import Details from "./Details";

const About = () => {
   return (
      <div>
         <About_banner />
         <SharedTitle title="Know More About Us"/>
         <Details />

      </div>
   );
};

export default About;