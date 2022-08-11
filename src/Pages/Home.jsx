import Landing from "../components/Sections/Landing";
import Logs from "../components/Sections/Logs";
import Cards from "../components/Sections/Cards";
import Discover from "../components/Sections/Discover";
import Travels from "../components/Sections/Travels";
import Common from "../components/Sections/Common";
import Testimonials from "../components/Sections/Testimonials";

const Home = () => {
  return (
    <>
      <Landing />
      <Logs />
      <Cards />
      <Discover />
      <Travels />
      <Common />
      <Testimonials />
    </>
  );
};

export default Home;
