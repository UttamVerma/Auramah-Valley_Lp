import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Features from "../components/Features";
import logo from "../assets/logo.png";
import WhyChooseUs from "../components/WhyChooseUs";
import Explore from "../components/Explore";
import ContactForm from "../components/ContactForm";
import FeatureProperty from "../components/FeatureProperty";

let Home = () => {
  return (
    <>
      <Helmet>
        <title>Auramah Valley</title>
        <meta
          name="description"
          content="Nature’s NestA home amidst the Auramah HillsLEARN MOREBuilding EnigmaticLifestyle For SupremacyLEARN MOREExperienceThe Freshness Of NatureLEARN MOREDive into luxurywith our self heating swimming poolLEARN MOREResideIn The Heart Of MountainsLEARN MOREImmerse YourselfInto The World Of LuxuryLEARN MORE STAY IN THE LAP OF NATURE Ultra-luxury Homes spread across 100 acres of forest."
        />
        <meta name="title" property="og:title" content="Auramah Valley" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="Nature’s NestA home amidst the Auramah HillsLEARN MOREBuilding EnigmaticLifestyle For SupremacyLEARN MOREExperienceThe Freshness Of NatureLEARN MOREDive into luxurywith our self heating swimming poolLEARN MOREResideIn The Heart Of MountainsLEARN MOREImmerse YourselfInto The World Of LuxuryLEARN MORE STAY IN THE LAP OF NATURE Ultra-luxury Homes spread across 100 acres of forest."
        />
        <meta name="Keywords" content="Punjab, Real Estate, Chandigarh" />
      </Helmet>
      <ToastContainer />
      <div className={styles.home}>
        <Navbar />
        <Banner />
        <About />
        <FeatureProperty/>
        <Features/>
        <WhyChooseUs/>
        <Explore />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;