import Navbar from "../components/Partials/Navbar";
import Landing from "../components/Sections/Landing";
import Logs from "../components/Sections/Logs";
import Cards from "../components/Sections/Cards";
import Discover from "../components/Sections/Discover";
import Travels from "../components/Sections/Travels";
import Common from "../components/Sections/Common";
import Testimonials from "../components/Sections/Testimonials";

import Contact from "../components/Sections/Contact";

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

      <Contact />
    </>
  );
};

export default Home;
