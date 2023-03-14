import ChefsSection from "../../components/homePage/ChefsSection";
import HeroSection from "../../components/homePage/HeroSection";
import ImproveSkillsSection from "../../components/homePage/ImproveSkillsSection";
import QuoteSection from "../../components/homePage/QuoteSection";
import RecipeHeading from "../../components/common/RecipeHeading";
import "./Home.css";
//===================================================
const Home = () => {
  return (
    <div>
      <RecipeHeading heading="Home" />
      <HeroSection />
      <ImproveSkillsSection />
      <QuoteSection />
      <ChefsSection />
    </div>
  );
};
export default Home;
