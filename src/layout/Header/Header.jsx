import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          <div className={styles["logo-badge"]} aria-hidden="true">
            🏨
          </div>
          <div>LuxeStay</div>
        </div>
        <nav aria-label="Primary">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#hotels">Destinations</a>
            </li>
            <li>
              <a href="#deals">Deals</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <div className={styles["nav-cta"]}>
          <button className="btn">Sign in</button>
          <button className="btn btn-primary">Book now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
