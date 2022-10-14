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
          <Route path="chairman-message" element={<ChairmanMessage />} />
          <Route path="mission-vision" element={<MissionVision />} />
        </Route>
        <Route path="/ncism">
          <Route path="principal" element={<Principal />} />
          <Route path="teaching-staff" element={<TeachingStaff />} />
          <Route path="non-teaching-staff" element={<NonTeachingStaff />} />
          <Route path="conferrence-activity" element={<ConferrenceActivity />} />
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
          <Route path="maulika-siddhant" element={<ff />} />
          <Route path="rachna-sharir" element={<Laboratory />} />
          <Route path="kriya-sharir" element={<YogaCentre />} />
          <Route path="dravyaguna" element={<HerbalGarden />} />
          <Route path="rasashastra-bhaishajya-kalpana" element={<Canteen />} />
          <Route path="roga-nidan-evum-vikriti-vigyan" element={<Transport />} />
          <Route path="agadtantra-evum-vidhi-vaidyaka" element={<Transport />} />
          <Route path="swastha-vritta" element={<Transport />} />
          <Route path="kaumarbhritya" element={<Transport />} />
          <Route path="panchakarma" element={<Transport />} />
          <Route path="prasuti-tantra-stri-roga" element={<Transport />} />
          <Route path="kayachikitsa" element={<Transport />} />
          <Route path="shalya-tantra" element={<Transport />} />
          <Route path="shalakya-tantra" element={<Transport />} />
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
