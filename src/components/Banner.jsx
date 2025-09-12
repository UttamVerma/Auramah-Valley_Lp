import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { AuthContext } from '../context/AuthContextProvider';
import banner from "../assets/banner2.jpg";
import banner3 from "../assets/banner5.jpg";
import banner5 from "../assets/banner6.jpg";
import banner6 from "../assets/banner7.jpg";
import styles from "../styles/Banner.module.css";
import Button from "./Button";
import Bannerr from "../assets/banner_01.jpg";
import Bannerr2 from "../assets/banner_02.png";
import Bannerr3 from "../assets/banner_03.png";
import Bannerr4 from "../assets/banner_05.jpg";

let Banner = () => {
  let images = [Bannerr, Bannerr2, Bannerr3, Bannerr4];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  const notifySuccess = () => {
    toast.success('Form Submitted Successfully', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  const FormHandler = async (e) => {
    e.preventDefault();
    setShowWaitingLoading(true);

    try {
      // Instead of sending an email, append "sended" to the message
      setMessage((prevMessage) => prevMessage + " sended");
      notifySuccess();
      setShowWaitingLoading(false);
      setTimeout(() => {
        window.location.href = "/thankyou";
      }, 5000);
    } catch (error) {
      notifyError();
      setShowWaitingLoading(false);
    }
  };

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
      <div id="home" className={styles.banner}>
        {images.map((item, index) => {
          return (
            <img
              className={styles.bannerImg}
              style={{
                opacity: activeIndex === index ? "1" : "0",
                transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
              }}
              src={item}
              alt={`Auramah Valley View ${index + 1}`}
              key={index}
            />
          );
        })}
        <div className={styles.overlay}></div>
        <div className={styles.bannerMain} ref={aboutRef}>
          <div
            className={`${styles.bannerContentSection} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <h1>
              Welcome to Auramah Valley Himalayan Country Estate
            </h1>
            <p>
              Nestled in the heart of the Himalayas, Auramah Valley offers a unique blend of luxury, tranquility, and natural beauty. Discover your dream home in a serene sanctuary designed for sustainable living and unparalleled comfort.
            </p>
            <span className={styles.encquireNowButton}>
              <Button text={'Enquire Now'}/>
            </span>
          </div>
          <div
            className={`${styles.bannerFormSection} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <h3>Download Our Brochure</h3>
            <form onSubmit={FormHandler}>
              <div>
                <input
                  placeholder="Your Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  placeholder="Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Banner;