import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ChairmanMessage from "./pages/ChairmanMessage";
import MissionVision from "./pages/MissionVision";
import Principal from "./pages/Principal";
import TeachingStaff from "./pages/TeachingStaff";
import NonTeachingStaff from "./pages/NonTeachingStaff";
import ConferrenceActivity from "./pages/ConferrenceActivity";
import AttendanceReport from "./pages/AttendanceReport";
import Library from "./pages/Library";
import Laboratory from "./pages/Laboratory";
import YogaCentre from "./pages/YogaCentre";
import HerbalGarden from "./pages/HerbalGarden";
import Canteen from "./pages/Canteen";
import Transport from "./pages/Transport";
import Events from "./pages/Events";
import Video from "./pages/Video";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Ncism from "./pages/Ncism";
import AgadtantraEvumVidhiVaidyaka from "./pages/departments/AgadtantraEvumVidhiVaidyaka";
import Dravyaguna from "./pages/departments/Dravyaguna";
import Kaumarbhritya from "./pages/departments/Kaumarbhritya";
import Kayachikitsa from "./pages/departments/Kayachikitsa";
import KriyaSharir from "./pages/departments/KriyaSharir";
import MaulikaSiddhant from "./pages/departments/MaulikaSiddhant";
import Panchakarma from "./pages/departments/Panchakarma";
import PrasutiTantraStriRoga from "./pages/departments/PrasutiTantraStriRoga";
import RachnaSharir from "./pages/departments/RachnaSharir";
import RasashastraBhaishajyaKalpana from "./pages/departments/RasashastraBhaishajyaKalpana";
import RogaNidanEvumVikritiVigyan from "./pages/departments/RogaNidanEvumVikritiVigyan";
import ShalakyaTantra from "./pages/departments/ShalakyaTantra";
import ShalyaTantra from "./pages/departments/ShalyaTantra";
import SwasthaVritta from "./pages/departments/SwasthaVritta";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ncism-mcr" element={<Ncism />} />
        <Route path="/about">
          <Route path="about-us" element={<About />} />
          <Route path="principal" element={<Principal />} />
          <Route path="chairman-message" element={<ChairmanMessage />} />
          <Route path="mission-vision" element={<MissionVision />} />
        </Route>
        <Route path="/ncism">
          <Route path="teaching-staff" element={<TeachingStaff />} />
          <Route path="non-teaching-staff" element={<NonTeachingStaff />} />
          <Route
            path="conferrence-activity"
            element={<ConferrenceActivity />}
          />
          <Route path="attendance-report" element={<AttendanceReport />} />
        </Route>
        <Route path="/facility">
          <Route path="library" element={<Library />} />
          <Route path="laboratories" element={<Laboratory />} />
          <Route path="yoga-centre" element={<YogaCentre />} />
          <Route path="herbal-garden" element={<HerbalGarden />} />
          <Route path="canteen" element={<Canteen />} />
          <Route path="transport" element={<Transport />} />
        </Route>

        <Route path="/department">
          <Route path="maulika-siddhant" element={<MaulikaSiddhant />} />
          <Route path="rachna-sharir" element={<RachnaSharir />} />
          <Route path="kriya-sharir" element={<KriyaSharir />} />
          <Route path="dravyaguna" element={<Dravyaguna />} />
          <Route
            path="rasashastra-bhaishajya-kalpana"
            element={<RasashastraBhaishajyaKalpana />}
          />
          <Route
            path="roga-nidan-evum-vikriti-vigyan"
            element={<RogaNidanEvumVikritiVigyan />}
          />
          <Route
            path="agadtantra-evum-vidhi-vaidyaka"
            element={<AgadtantraEvumVidhiVaidyaka />}
          />
          <Route path="swastha-vritta" element={<SwasthaVritta />} />
          <Route path="kaumarbhritya" element={<Kaumarbhritya />} />
          <Route path="panchakarma" element={<Panchakarma />} />
          <Route
            path="prasuti-tantra-stri-roga"
            element={<PrasutiTantraStriRoga />}
          />
          <Route path="kayachikitsa" element={<Kayachikitsa />} />
          <Route path="shalya-tantra" element={<ShalyaTantra />} />
          <Route path="shalakya-tantra" element={<ShalakyaTantra />} />
        </Route>

        <Route path="/media">
          <Route path="events" element={<Events />} />
          <Route path="video" element={<Video />} />
          <Route path="press-release" element={<Press />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
