import LeafletMap from "../components/LeafletMap";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <Slider></Slider>
      <LeafletMap></LeafletMap>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
