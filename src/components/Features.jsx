import styles from "../styles/Features.module.css";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import featImg1 from "../assets/featImg1.jpg";
import featImg2 from "../assets/featImg2.jpg";

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
      <div className={styles.FeaturesParent}>
        <div className={styles.FeaturesChild}>
          <div className={`${styles.FeaturesImage} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}>
            <img className={styles.img2} src={featImg2} alt="" />
            <img className={styles.img1} src={featImg1} alt="" />
          </div>
          <div  className={`${styles.FeaturesContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}>
            <div className={styles.yellowLineFlex}>
              <div></div>
              <h5>Featured Project</h5>
            </div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p className={styles.FeaturesContentPara}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos cupiditate suscipit eius aut eveniet. Doloremque, eum
              tempore! Excepturi nostrum aperiam commodi nulla nihil, animi ad
              impedit accusantium in? Vel, cum.
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
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
