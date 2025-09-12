import styles from "../styles/Explore.module.css";
import { useState, useEffect, useRef } from "react";

const Explore = () => {
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
      <div className={styles.ExploreParent} id="explore">
        <div
          className={`${styles.ExploreChild} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
          ref={aboutRef}
        >
          <div className={styles.ExploreHeading}>
            <div className={styles.yellowLineFlex}>
              <div></div>
              <h5>Explore</h5>
              <div></div>
            </div>
            <h1>Discover Auramah Valley</h1>
            <p>
              Experience the essence of Himalayan living at Auramah Valley. From luxurious residences to breathtaking natural surroundings, explore what makes our estate a unique sanctuary for relaxation and adventure.
            </p>
          </div>
          <div
            className={`${styles.ExploreImageParent} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <div className={styles.ExploreFirstImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Luxury Villas</h4>
                <p>Modern, eco-friendly homes with stunning mountain views.</p>
              </div>
            </div>
            <div className={styles.ExploreSecondImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Nature Trails</h4>
                <p>Explore scenic hiking paths amidst lush greenery.</p>
              </div>
            </div>
            <div className={styles.ExploreThirdImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Wellness Retreat</h4>
                <p>Rejuvenate with yoga and spa facilities in serene settings.</p>
              </div>
            </div>
            <div className={styles.ExploreFourthImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Community Living</h4>
                <p>Connect with like-minded residents in a vibrant community.</p>
              </div>
            </div>
            <div className={styles.ExploreFifthImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Cultural Experiences</h4>
                <p>Immerse in local Himalayan traditions and festivals.</p>
              </div>
            </div>
            <div className={styles.ExploreSixImage}>
              <div className={styles.ExploreImageInnerContent}>
                <h4>Sustainable Design</h4>
                <p>Eco-conscious architecture for a greener tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Explore;