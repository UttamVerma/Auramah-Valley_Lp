 
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/closeBlack.png";
import { useState } from "react";

let Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
    setShowMenu(false); // Close mobile menu
  };

  return (
    <>
      {/* Regular Navbar */}
      <div className={styles.navbar}>
        <div className={styles.innerNavbar}>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img src={logo} alt="Auramah Valley Logo" className={styles.logo} />
          </a>
          <div className={styles.optionsDiv}>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About Us</a>
            <a href="#featured-property" onClick={(e) => handleScroll(e, "featured-property")}>Featured Property</a>
            <a href="#features" onClick={(e) => handleScroll(e, "features")}>Features Project</a>
            <a href="#why-choose-us" onClick={(e) => handleScroll(e, "why-choose-us")}>Why Choose Us</a>
            <a href="#explore" onClick={(e) => handleScroll(e, "explore")}>Explore</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact Us</a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Hamburger Icon) */}
      <div className={styles.smallNavbar}>
        <div className={styles.logoDiv}>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img src={logo} alt="Auramah Valley Logo" className={styles.logo} />
          </a>
        </div>
        <img
          src={hamburger}
          className={styles.hamburger}
          onClick={() => {
            console.log("Hamburger clicked, showMenu:", !showMenu); // Debugging
            setShowMenu(true);
          }}
          alt="Hamburger Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`${styles.hamburgerParent} ${showMenu ? styles.showHamburger : ""}`}
      >
        <div
          onClick={() => {
            console.log("Overlay clicked, closing menu"); // Debugging
            setShowMenu(false);
          }}
          className={`${styles.hamburgerOverlay} ${showMenu ? styles.showMenu : ""}`}
        ></div>
        <div
          className={`${styles.hamburgerContent} ${showMenu ? styles.showMenuContent : ""}`}
        >
          <div className={styles.quickAccess}>
            <p>Menu</p>
            <img
              src={close}
              className={styles.closeIcon}
              onClick={() => {
                console.log("Close icon clicked, closing menu"); // Debugging
                setShowMenu(false);
              }}
              alt="Close"
            />
          </div>
          <div className={styles.smallOptionsDiv}>
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About Us</a>
            <a href="#features" onClick={(e) => handleScroll(e, "features")}>Features</a>
            <a href="#explore" onClick={(e) => handleScroll(e, "explore")}>Explore</a>
            <a href="#why-choose-us" onClick={(e) => handleScroll(e, "why-choose-us")}>Why Choose Us</a>
            <a href="#featured-property" onClick={(e) => handleScroll(e, "featured-property")}>Featured Property</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
 