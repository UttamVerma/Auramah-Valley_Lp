import styles from "../styles/Features.module.css";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import featImg1 from "../assets/featImg1.jpg";
import featImg2 from "../assets/featImg2.jpg";
import Himalya from "../assets/featuresProject.jpg";
import Couple from "../assets/couple.jpg";
 
const Features = () => {
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
    <>
      <div className={styles.FeaturesParent} id="features">
        <div className={styles.FeaturesChild}>
          <div className={`${styles.FeaturesImage} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}>
            <img className={styles.img2} src={Couple} alt="Auramah Valley Landscape" />
            <img className={styles.img1} src={Himalya} alt="Auramah Villa Exterior" />
          </div>
          <div className={`${styles.FeaturesContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}>
            <div className={styles.yellowLineFlex}>
              <div></div>
              <h5>Featured Project</h5>
            </div>
            <h1>Auramah Valley Himalayan Residences</h1>
            <p className={styles.FeaturesContentPara}>
              Auramah Valley Himalayan Country Estate offers an exclusive collection of residences designed for luxury and sustainability. Nestled amidst the majestic Himalayas, these homes provide breathtaking views, modern amenities, and a serene environment, perfect for those seeking a tranquil yet sophisticated lifestyle.
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Eco-friendly architecture with sustainable materials.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Access to wellness centers and nature trails.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Spacious interiors with panoramic mountain views.</p>
            </div>
            <span className={styles.encquireNowButton}>
              <Button text={"Learn More"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;