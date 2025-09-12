import styles from "../styles/About.module.css";
import { useState, useEffect, useRef } from "react";
import bg from "../assets/aboutBg.png";
import bigImage from "../assets/banner2.jpg";
import smallImage from "../assets/banner3.jpg";
import Button from "./Button";
import Himalya from "../assets/HimalayanCountryEstate1.png";
import Himalya2 from "../assets/HimalayanCountryEstate2.png";

let About = () => {
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFirstView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div className={styles.about} id="about">
      <div className={styles.innerAbout}>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
          ref={aboutRef}
        >
          <img alt="Himalayan Estate" className={styles.bigImage} src={Himalya} />
          <img
            alt="Auramah Valley View"
            className={styles.smallImage}
            src={Himalya2}
          />
          <img alt="Background Image" className={styles.bgImage} src={bg} />
          <div className={styles.imageDetailsSection}>
            <h5>Discover Auramah Valley</h5>
            <p>
              Nestled in the serene Himalayas, Auramah Valley offers a perfect blend of luxury and nature, designed for those seeking tranquility and elegance.
            </p>
          </div>
        </div>
        <div className={`${styles.aboutContent} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}>
          <div className={styles.yellowLineFlex}>
            <div></div>
            <h5>About Auramah Valley</h5>
          </div>
          <h1>
            Himalayan Country Estate: A Sanctuary of Peace and Luxury
          </h1>
          <p>
            Auramah Valley Himalayan Country Estate is a premier real estate destination located in the heart of the Himalayas. Offering breathtaking views, world-class amenities, and sustainable living, our estate is designed to provide an unparalleled lifestyle. Whether you're looking for a vacation home, a permanent residence, or an investment opportunity, Auramah Valley promises a harmonious blend of modern luxury and natural beauty.
          </p>
          <p>
            Our properties are crafted with eco-friendly materials and innovative designs, ensuring comfort and sustainability. With proximity to scenic trails, wellness centers, and cultural landmarks, Auramah Valley is more than a home—it's a lifestyle. Explore the opportunity to own a piece of paradise in the Himalayas.
          </p>
          <Button text={"Enquire Now"} />
        </div>
      </div>
    </div>
  );
};

export default About;
