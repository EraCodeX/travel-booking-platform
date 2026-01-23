import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import ContactPage from "./pages/Contact/ContactPage";
import Plan from "./pages/Plan/Plan";
import HelpCentre from "./pages/HelpCentre/HelpCentre";
function App() {
  return (
    <>
     <div className="main-content">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/help" element={<HelpCentre />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
