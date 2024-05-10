import EmailNewsletter from "../components/EmailNewsletter";
import LeafletMap from "../components/LeafletMap";

import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <Slider></Slider>
      <LeafletMap></LeafletMap>
      <EmailNewsletter></EmailNewsletter>
    </div>
  );
};

export default Home;
