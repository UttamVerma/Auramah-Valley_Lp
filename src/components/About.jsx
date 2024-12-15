import styles from "../styles/About.module.css";
import { useState, useEffect, useRef } from "react";
import bg from "../assets/aboutBg.png";
import bigImage from "../assets/banner2.jpg";
import smallImage from "../assets/banner3.jpg";
import Button from "./Button";

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
    <div className={styles.about}>
      <div className={styles.innerAbout}>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
          ref={aboutRef}
        >
          <img alt="First Image" className={styles.bigImage} src={bigImage} />
          <img
            alt="Small Image"
            className={styles.smallImage}
            src={smallImage}
          />
          <img alt="Bg Image" className={styles.bgImage} src={bg} />
          <div
            className={styles.imageDetailsSection}
          >
            <h5>Lorem heading here</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              fugit quaerat eaque ipsum enim eos
            </p>
          </div>
        </div>
        <div className={`${styles.aboutContent} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}>
          <div className={styles.yellowLineFlex}>
            <div></div>
            <h5>About Us</h5>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            mollitia!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ad officiis consequuntur distinctio unde itaque eligendi suscipit
            laboriosam quod nostrum quas et ea laudantium reiciendis
            exercitationem omnis cupiditate pariatur laborum, saepe sapiente!
            Inventore et rem voluptatem similique beatae dolores aliquam
            maiores, distinctio nesciunt blanditiis mollitia praesentium odit,
            natus exercitationem nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            consectetur magni quisquam dolorem perspiciatis non fugit. Tenetur,
            dolorum natus eaque nam inventore facere pariatur accusamus
            aspernatur nesciunt quibusdam exercitationem eligendi?
          </p>
          <Button text={"Enquire Now"} />
        </div>
      </div>
    </div>
  );
};

export default About;
