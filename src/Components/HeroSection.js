import React from "react";
import styles from "../Pages/LandingPage.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Welcome to CogniMatch</h1>
        <p>Find your perfect study buddy today!</p>
        <a href="#signup" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
