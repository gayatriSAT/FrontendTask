import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/header";
import About from "./pages/about";
import Footer from "./common/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<About/>} />
          {/* <Route path="/features" element={<Features/>}/>
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/demo" element={<Demo/>} /> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
