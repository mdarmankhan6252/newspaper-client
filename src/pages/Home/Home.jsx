import { Helmet } from "react-helmet-async";
import Headline from "../../components/Headline";
import Slider from "./Slider";
import LatestNews from "./LatestNews";
import Category from "./Category";
import Sponsored from "./Sponsored";
import Pricing from "./Pricing";
import Newsletter from "./Newsletter";
const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Global Vista | Home | Newspaper</title>
         </Helmet>
         <Headline />
         <Slider />
         <LatestNews />
         <Category />
         <Sponsored />
         <Pricing />
         <Newsletter />
      </div>
   );
};

export default Home;