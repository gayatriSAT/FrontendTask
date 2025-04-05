import React from "react";
import HeroImage from "../asset/images/hero-image.png";
import phoneImg from "../asset/images/image-phone.png";

const Hero = () => {
  return (

    <section
      className="relative w-full px-40 bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`,

      }}
    >


      <div className="max-w-4xl w-full px-4 z-10">
        <img
          src={phoneImg}
          alt="Phone UI"
          className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
