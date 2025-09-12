import styles from "../styles/WhyChooseUs.module.css";
import { useState, useEffect, useRef } from "react";
import WhyImage from "../assets/whychooseus.png";
import whyImg1 from "../assets/whyImg1.png";
import whyImg2 from "../assets/whyImg2.png";
import whyImg3 from "../assets/whyImg3.png"
import Button from "./Button";
import WhyImg from "../assets/whystandout.png";
 

const WhyChooseUs = () => {
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
      <div className={styles.WhyChooseUsParent} id="why-choose-us">
        <div className={styles.WhyChooseUsChild}>
          <div className={`${styles.WhyChooseUsContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}>
            <div className={styles.yellowLineFlex}>
              <h5>Why Choose Us</h5>
              <div></div>
            </div>
            <h1>Why Auramah Valley Stands Out</h1>
            <p className={styles.WhyChooseUsContentPara}>
              At Auramah Valley Himalayan Country Estate, we offer more than just a home—we provide a lifestyle defined by luxury, sustainability, and community. Nestled in the serene Himalayas, our estate is designed for those who value tranquility, modern amenities, and a deep connection with nature.
            </p>
            <div className={styles.WhyChooseUsListParent}>
              <div className={styles.WhyChooseUsListImgPar}>
                <img src={whyImg1} alt="Sustainability Icon" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Sustainable Living</h3>
                 <p>Eco-friendly designs with energy-efficient materials and green practices.</p>
              </div>
            </div>
            <div className={styles.WhyChooseUsListParent}>
              <div className={styles.WhyChooseUsListImgPar}>
                <img src={whyImg2} alt="Luxury Icon" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Unmatched Luxury</h3>
                 <p>Spacious villas with premium finishes and panoramic mountain views.</p>
              </div>
            </div>
            <div className={styles.WhyChooseUsListParent}>
              <div className={styles.WhyChooseUsListImgPar}>
                <img src={whyImg3} alt="Community Icon" />
              </div>{" "}
              <div className={styles.WhyChooseUsListInnerChild}>
                <h3>Vibrant Community</h3>
                 <p>Connect with like-minded residents through cultural and wellness events.</p>
              </div>
            </div>
            <span className={styles.ButtonSpan}>
              <Button text={"Learn More"} />
            </span>
          </div>
          <div className={`${styles.WhyChooseUsImage} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}>
            <img
              className={styles.img1}
              src={WhyImg}
              alt="Auramah Valley Estate"
            />
          </div>
        </div>
      </div>
    </>
  );
}; 
export default WhyChooseUs;
