import FeatureSection from "../components/feature-components/featuresection";
import DemoCartoon from "../asset/images/demo-cartoon.png";
import IndustySection from "../components/feature-components/idustries";
import FreeTrialBenefits from "../components/feature-components/freetrialbenefits";
import Button from "../common/button";

const Features = () => {
    return (
      <div className="text-center">
        <section className="py-16 bg-gray-50 px-40">
          <h2 className="text-6xl font-bold mb-4">Core Capabilities of <span className="text-dark-pink">Logo</span></h2>
          <FeatureSection />
        </section> 
        <section className="px-44  flex items-center justify-around rounded-xl max-w-full">
  <div className="bg-black rounded-xl flex items-center justify-between px-28 pt-10 w-full">
    <div className="flex flex-col text-white space-y-4">
    

      <h2 className="text-5xl font-bold leading-snug">
        Experience the<br />
        Future of <span className="text-dark-pink">Interaction</span>
      </h2>
        <Button children="Schedule a Demo" className="border-white text-white text-sm hover:text-black"/>
    </div>

    <img
      src={DemoCartoon}
      alt="demo-cartoon"
      className="h-64 pr-2"
    />
  </div>
</section>


        <section className="py-16 bg-gray-50 px-40">
          <h2 className="text-6xl font-bold mb-4">Transforming Industry with <span className="text-dark-pink">Advance Technology</span></h2>
          <IndustySection />
        </section> 
        <section className="pb-16 bg-gray-50 px-40">
          <h2 className="text-5xl font-bold mb-4">Why Choose <span className="text-dark-pink">Logo</span> For Your <span className="text-dark-pink">Business?</span></h2>
          <FreeTrialBenefits />
          <Button children='Discover the Benefits with your Free Trial' />
        </section> 
    </div>
    )
}
export default Features;