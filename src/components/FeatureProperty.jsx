import styles from "../styles/FeatureProperty.module.css";
import { useState, useEffect, useRef } from "react";
import bigImage from "../assets/homeThree.jpg";
import smallImage from "../assets/homeTwo.jpg";
import Button from "./Button";

 
let FeatureProperty = () => {
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
    <div className={styles.FeatureProperty} id="featured-property">
      <div className={styles.innerFeatureProperty}>
        <div
          className={`${styles.FeaturePropertyContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}
        >
          <div className={styles.yellowLineFlex}>
            <h5>Featured Property</h5>
            <div></div>
          </div>
          <h1>
            Luxurious Himalayan Villas at Auramah Valley
          </h1>
          <p>
            Discover the epitome of luxury with our featured villas at Auramah Valley Himalayan Country Estate. These residences combine modern architecture with eco-friendly design, offering spacious interiors, panoramic mountain views, and access to exclusive amenities. Perfect for those seeking a serene retreat or a prestigious investment in the heart of the Himalayas.
          </p>
          <p>
            Each villa is thoughtfully designed with sustainable materials, large windows for natural light, and private terraces to immerse you in the breathtaking surroundings. Enjoy proximity to wellness centers, nature trails, and cultural experiences, making your home a gateway to both relaxation and adventure.
          </p>
          <Button text={"Enquire Now"} />
        </div>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img alt="Villa Exterior" className={styles.bigImage} src={bigImage} />
          <img
            alt="Villa Interior"
            className={styles.smallImage}
            src={smallImage}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;