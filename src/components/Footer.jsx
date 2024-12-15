// import styles from "../styles/Footer.module.css";

// let Footer = () => {
//   return (
//     <div className={styles.footer}>
//       <h1>This is the footer</h1>
//     </div>
//   );
// };

// export default Footer;

import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

let Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <img src={logo} className={styles.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam
            nihil, ipsum neque accusamus eaque debitis quisquam tempore nostrum
            autem soluta dolores consectetur! Non sit odit eaque aliquam
            pariatur maxime.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <a href="#about"> Lorem</a>
          <a href="#prime-location"> Lorem</a>
          <a href="#why-choose-ibc"> Lorem</a>
          <a href="#surroundings"> Lorem</a>
          <a href="#plot-sizes"> Lorem</a>
          <a href="#infrastructure"> Lorem</a>
          <a href="#in-punjab"> Lorem</a>
          <a href="#contact"> Lorem</a>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <div>
            <img src={location} />
            <p>Address</p>
          </div>
          <div>
            <img src={phone} />
            <p>Mobile Number</p>
          </div>
          <div>
            <img src={mail} />
            <p>Email</p>
          </div>
        </div>
        <div>
          <h3>Follow Us On</h3>
          <p>
            Follow Us On Our Social Media handles to always stay updated with
            us.
          </p>
          <div className={styles.socialDiv}>
            <a href="#">
              <div className={styles.socialIcon}>
                <img src={facebook} />
              </div>
            </a>
            <a href="#">
              <div className={styles.socialIcon}>
                <img src={instagram} />
              </div>
            </a>
            <a href="#">
              <div className={styles.socialIcon}>
                <img src={linkedin} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
