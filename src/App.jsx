import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SuratKeteranganTidakMampu from "./pages/SuratKeteranganTidakMampu";
import SuratKeteranganKematian from "./pages/SuratKeteranganKematian";
import SuratPernyataanBelumPernahMenikah from "./pages/SuratPernyataanBelumPernahMenikah";
import SuratKeteranganKehilangan from "./pages/SuratKeteranganKehilangan";
import SuratPengantar from "./pages/SuratPengantar";
import SuratPernyataanJaminanTempatTinggal from "./pages/SuratPernyataanJaminanTempatTinggal";
import SuratPengantarPemakamanJenazah from "./pages/SuratPengantarPemakamanJenazah";
import SuratPerjanjianPinjamPakai from "./pages/SuratPerjanjianPinjamPakai";
import SuratPernyataanUsaha from "./pages/SuratPernyataanUsaha";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Panduan from "./pages/Panduan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/SuratKeteranganTidakMampu"
            element={<SuratKeteranganTidakMampu />}
          />
          <Route
            path="/SuratKeteranganKematian"
            element={<SuratKeteranganKematian />}
          />
          <Route
            path="/SuratPernyataanBelumPernahMenikah"
            element={<SuratPernyataanBelumPernahMenikah />}
          />
          <Route
            path="/SuratKeteranganKehilangan"
            element={<SuratKeteranganKehilangan />}
          />
          <Route path="/SuratPengantar" element={<SuratPengantar />} />
          <Route
            path="/SuratPernyataanJaminanTempatTinggal"
            element={<SuratPernyataanJaminanTempatTinggal />}
          />
          <Route
            path="/SuratPengantarPemakamanJenazah"
            element={<SuratPengantarPemakamanJenazah />}
          />
          <Route
            path="/SuratPerjanjianPinjamPakai"
            element={<SuratPerjanjianPinjamPakai />}
          />
          <Route
            path="/SuratPernyataanUsaha"
            element={<SuratPernyataanUsaha />}
          />
          <Route path="/panduan" element={<Panduan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
