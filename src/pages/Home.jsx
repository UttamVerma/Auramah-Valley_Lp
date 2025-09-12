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
          content="Discover Auramah Valley Himalayan Country Estate, offering ultra-luxury homes amidst 100 acres of pristine Himalayan forest. Experience sustainable living, modern amenities, and breathtaking mountain views."
        />
        <meta name="title" property="og:title" content="Auramah Valley" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="Discover Auramah Valley Himalayan Country Estate, offering ultra-luxury homes amidst 100 acres of pristine Himalayan forest. Experience sustainable living, modern amenities, and breathtaking mountain views."
        />
        <meta name="Keywords" content="Himalayas, Real Estate, Luxury Homes, Sustainable Living" />
      </Helmet>
      <ToastContainer />
      <div className={styles.home}>
        <Navbar />
        <Banner id="home" />
        <About id="about" />
        <FeatureProperty id="featured-property" />
        <Features id="features" />
        <WhyChooseUs id="why-choose-us" />
        <Explore id="explore" />
        <ContactForm id="contact" />
        <Footer id="footer" />
      </div>
    </>
  );
};

export default Home;