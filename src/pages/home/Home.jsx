import ChefsSection from "../../components/homePage/ChefsSection";
import HeroSection from "../../components/homePage/HeroSection";
import ImproveSkillsSection from "../../components/homePage/ImproveSkillsSection";
import QuoteSection from "../../components/homePage/QuoteSection";


//===================================================
const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImproveSkillsSection />
      <QuoteSection />
      <ChefsSection />
    </div>
  );
};
export default Home;
