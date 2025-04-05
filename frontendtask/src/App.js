import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/header";
import About from "./pages/about";
import Footer from "./common/footer";
import Features from "./pages/features";
import Button from "./common/button";
import StartNowCartoon from "./asset/images/StartNowCartoon.png";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<About/>} />
            <Route path="/features" element={<Features/>}/>
          {/* // <Route path="/faq" element={<FAQ/>} />
          // <Route path="/contact" element={<ContactUs/>} />
          // <Route path="/demo" element={<Demo/>} />  */}
        </Routes>
        <section className="px-40 max-h-80 pb-16">
        <div className="bg-black rounded-xl">
                <span className="flex flex-row">
                <img src={StartNowCartoon} alt="demo-caroon" className="pt-11 h-72 pl-14 bg-cover" />
                <h2 className="text-center text-5xl font-bold pt-16 px-4 text-white">Unlock The Power of <span className="text-dark-pink">Logo</span> Today
                    <Button children='Schedule a Demo' className="mt-8 px-6 py-4 border border-dark-gray text-gray-100 text-sm font-normal font-NunitoSans rounded-full hover:bg-gray-100 transition duration-200"/>
                </h2>
                </span>
            </div>
            </section>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
