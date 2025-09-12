import styles from "../styles/ContactForm.module.css";
import WhyImage from "../assets/whychooseus.png";
import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { AuthContext } from "../context/AuthContextProvider";

const ContactForm = () => {
  let [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading] =
    useContext(AuthContext);
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);
  const [formData, setFormData] = useState({
    inquiryType: "",
    address: "",
    name: "",
    email: "",
    role: "",
    maxPrice: "",
    minSize: "",
  });
  const [errors, setErrors] = useState({});

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

  const notifySuccess = () => {
    toast.success("Form Submitted Successfully", {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Please enter a valid email";
    if (!formData.inquiryType)
      newErrors.inquiryType = "Inquiry type is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.maxPrice || formData.maxPrice < 0)
      newErrors.maxPrice = "Max price must be 0 or greater";
    if (!formData.minSize || formData.minSize < 0)
      newErrors.minSize = "Min size must be 0 or greater";
    return newErrors;
  };

  const FormHandler = async (e) => {
    e.preventDefault();
    setShowWaitingLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowWaitingLoading(false);
      return;
    }

    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Instead of sending an email, append "sended" to inquiryType
      setFormData((prevFormData) => ({
        ...prevFormData,
        inquiryType: prevFormData.inquiryType + " sended",
      }));
      notifySuccess();
      setShowWaitingLoading(false);
      setFormData({
        inquiryType: "",
        address: "",
        name: "",
        email: "",
        role: "",
        maxPrice: "",
        minSize: "",
      });
    } catch (error) {
      notifyError();
      setShowWaitingLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.ContactFormParent} id="contact">
        <div className={styles.ContactFormChild} ref={aboutRef}>
          <div
            className={`${styles.ContactFormContent} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <div className={styles.yellowLineFlex}>
              <h5>Query</h5>
              <div></div>
            </div>
            <h1>Real Estate Inquiry Form</h1>
            <p className={styles.ContactFormContentPara}>
              As the complexity of buildings increases, we want to help you.
            </p>
            <form className={styles.ContactForm} onSubmit={FormHandler}>
              {/* Inquiry Type */}
              <div className={styles.formGroup}>
                <label htmlFor="inquiryType">
                  <h3>Inquiry Type</h3>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={errors.inquiryType ? styles.error : ""}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                  <option value="sell">Sell</option>
                </select>
              </div>

              {/* How to Address and Your Name in Same Line */}
              <div className={styles.rowFlex}>
                <div className={styles.formGroup}>
                  <label htmlFor="address">
                    <h3>How to Address</h3>
                  </label>
                  <select
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? styles.error : ""}
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <h3>Your Name</h3>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.error : ""}
                  />
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  <h3>Email</h3>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.error : ""}
                />
              </div>

              {/* Personnel Role */}
              <div className={styles.formGroup}>
                <label htmlFor="role">
                  <h3>Personnel Role</h3>
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={errors.role ? styles.error : ""}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="buyer">Buyer</option>
                  <option value="agent">Agent</option>
                  <option value="owner">Owner</option>
                </select>
              </div>

              {/* Max Price and Min Size in Same Line */}
              <div className={styles.rowFlex}>
                <div className={styles.formGroup}>
                  <label htmlFor="maxPrice">
                    <h3>Max Price</h3>
                  </label>
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="e.g. 500"
                    value={formData.maxPrice}
                    onChange={handleChange}
                    min="0"
                    className={errors.maxPrice ? styles.error : ""}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="minSize">
                    <h3>Min Size (sq ft)</h3>
                  </label>
                  <input
                    type="number"
                    id="minSize"
                    name="minSize"
                    placeholder="e.g. 20"
                    value={formData.minSize}
                    onChange={handleChange}
                    min="0"
                    className={errors.minSize ? styles.error : ""}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div
            className={`${styles.ContactFormImage} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <img className={styles.img1} src={WhyImage} alt="Why Choose Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;