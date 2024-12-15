// import styles from "../styles/Navbar.module.css";
// import logo from "../assets/logo.png";

// let Navbar = () => {
//   return (
//     <div className={styles.navbar}>
      
//       <div className={styles.innerNavbar}>
//         <a href="/home">
//           <img src={logo} alt="Logo" className={styles.logo}/>
//         </a>
//         <div className={styles.optionsDiv}>
//           <a href="/section1">Section 1</a>
//           <a href="/section2">Section 2</a>
//           <a href="/section3">Section 3</a>
//           <a href="/section4">Section 4</a>
//           <a href="/section5">Section 5</a>
//           <a href="/section6">Section 6</a>
//           <a href="/section7">Section 7</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/closeBlack.png";
import { useState } from "react";

let Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Regular Navbar */}
      <div className={styles.navbar}>
        <div className={styles.innerNavbar}>
          <a href="/home">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>
          <div className={styles.optionsDiv}>
            <a href="/section1">Section 1</a>
            <a href="/section2">Section 2</a>
            <a href="/section3">Section 3</a>
            <a href="/section4">Section 4</a>
            <a href="/section5">Section 5</a>
            <a href="/section6">Section 6</a>
            <a href="/section7">Section 7</a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Hamburger Icon) */}
      <div className={styles.smallNavbar}>
        <div className={styles.logoDiv}>
          <a href="/home">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>
        </div>
        <img
          src={hamburger}
          className={styles.hamburger}
          onClick={() => setShowMenu(true)}
          alt="Hamburger Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`${styles.hamburgerParent} ${showMenu ? styles.showHamburger : ""}`}
      >
        <div
          onClick={() => setShowMenu(false)}
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
              onClick={() => setShowMenu(false)}
              alt="Close"
            />
          </div>
          <div className={styles.smallOptionsDiv}>
            <a href="/section1" onClick={() => setShowMenu(false)}>Section 1</a>
            <a href="/section2" onClick={() => setShowMenu(false)}>Section 2</a>
            <a href="/section3" onClick={() => setShowMenu(false)}>Section 3</a>
            <a href="/section4" onClick={() => setShowMenu(false)}>Section 4</a>
            <a href="/section5" onClick={() => setShowMenu(false)}>Section 5</a>
            <a href="/section6" onClick={() => setShowMenu(false)}>Section 6</a>
            <a href="/section7" onClick={() => setShowMenu(false)}>Section 7</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
