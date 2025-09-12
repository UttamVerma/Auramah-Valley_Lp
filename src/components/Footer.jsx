 
import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
 

let Footer = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    console.log(`Attempting to scroll to section: ${sectionId}`); // Debugging
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Found section: ${sectionId}`); // Debugging
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Section not found: ${sectionId}`); // Debugging
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <img src={logo} className={styles.logo} alt="Auramah Valley Logo" />
          <p>
            Auramah Valley Himalayan Country Estate offers a unique blend of luxury and nature in the heart of the Himalayas. Discover sustainable living, modern amenities, and breathtaking views, creating a perfect sanctuary for relaxation and adventure.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>About Us</a>
          <a href="#featured-property" onClick={(e) => handleScroll(e, "featured-property")}>Featured Property</a>
          <a href="#features" onClick={(e) => handleScroll(e, "features")}>Features Project</a>
          <a href="#why-choose-us" onClick={(e) => handleScroll(e, "why-choose-us")}>Why Choose Us</a>
          <a href="#explore" onClick={(e) => handleScroll(e, "explore")}>Explore</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact Us</a>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <div>
            <img src={location} alt="Location Icon" />
            <p>Auramah Valley, Himalayan Country Estate, Himachal Pradesh, India</p>
          </div>
      
          <div>
            <img src={mail} alt="Mail Icon" />
            <p>info@auramahvalley.com</p>
          </div>
        </div>
        <div>
          <h3>Follow Us On</h3>
          <p>
            Stay connected with Auramah Valley on social media for the latest updates, offers, and insights into Himalayan living.
          </p>
          <div className={styles.socialDiv}>
            <a href="https://facebook.com/auramah.valley.1" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>
                <img src={facebook} alt="Facebook Icon" />
              </div>
            </a>
            <a href="https://instagram.com/auramahvalley" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>
                <img src={instagram} alt="Instagram Icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;