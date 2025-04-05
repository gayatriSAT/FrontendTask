import Navbar from "./common/header";
import About from "./pages/about";
import Features from "./pages/features";
import FAQ from "./pages/FAQ";
import Demo from "./pages/demo";
import ContactUs from "./pages/contactus";
import Footer from "./common/footer";
import Button from "./common/button";
import StartNowCartoon from "./asset/images/StartNowCartoon.png";

function App() {
  return (

    <>
    <div className="glow-wrapper">

    <div className="glow-pink"></div>
    <div className="glow-purple"></div>
    <section className=" relative z-10">
      <Navbar />
      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section className="px-44 mb-16  flex items-center justify-around rounded-xl max-w-full">
        <div className="bg-black rounded-xl flex items-center justify-between px-28 pt-10 w-full">

          <img
            src={StartNowCartoon}
            alt="start-now-cartoon"
            className="h-64"
          />



          <div className="flex flex-col text-white space-y-4">
            <h2 className="text-center text-5xl font-bold">
              Unlock The Power Of <br /> <span className="text-dark-pink">Logo</span> Today
            </h2>
            <Button children="Start Now" className="border-white text-white text-sm hover:text-black" />

          </div>

        </div>
      </section>
      </section>
          </div>
      <Footer />
    </>
  );
}

export default App;
