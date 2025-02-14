import React from "react";
import styles from "./Header.module.css"; // Import CSS Module
import logo from "../assets/logo.png"; // Import logo

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        {/* Use the imported logo in the src */}
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>CogniMatch</span>
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#features" className={styles.navLink}>Features</a>
        <a href="#signup" className={styles.navLink}>Sign Up</a>
        <a href="#login" className={styles.navLink}>Log In</a>
      </nav>

      {/* CTA Button */}
      <a href="#signup" className={styles.ctaButton}>Get Started</a>
    </header>
  );
};

export default Header;
