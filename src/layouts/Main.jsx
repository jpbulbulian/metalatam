import ScrollToTopButton from "components/ScrollToTopButton";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import Goals from "views/Goals";
import Hello from "views/Hello";
import Home from "views/Home";
import Sponsors from "views/Sponsors";
import Audience from "views/Audience";
import Organizer from "views/Organizer";
import Business from "views/Business";
import Place from "views/Place";
import RoadEvent from "views/RoadEvent";

const Main = () => (
  <main className="w-full select-none bg-background">
    <Navbar />
    <Home />
    <Hello />
    <Goals />
    <RoadEvent />
    <Audience />
    <Business />
    <Sponsors />
    <Place />
    <Organizer />
    <Footer />
    <ScrollToTopButton />
  </main>
);

export default Main;
