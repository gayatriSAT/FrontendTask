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
        <section className="px-40 max-h-80">
            <div className="bg-black rounded-xl">
                <span className="flex flex-row">
                <h2 className="text-5xl font-bold pt-16 px-14 text-white">Experience The<br/> Future of <span className="text-dark-pink">Interaction</span>
                    <Button children='Schedule a Demo' className="mt-8 px-6 py-4 border border-dark-gray text-gray-100 text-sm font-normal font-NunitoSans rounded-full hover:bg-gray-100 transition duration-200"/>
                </h2>
                <img src={DemoCartoon} alt="demo-caroon" className="pt-11 h-72 pr-14 bg-cover" />
                </span>
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