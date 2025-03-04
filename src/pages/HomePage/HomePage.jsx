import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>TravelTrucks - Home</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;
