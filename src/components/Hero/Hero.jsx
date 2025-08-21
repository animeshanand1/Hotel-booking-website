import React, { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import CustomCursor from "../ui/CustomCursor/customCursor";

const Hero = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("hotels").scrollIntoView({ behavior: "smooth" });
  };
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !heroContentRef.current) return;

      const { clientX, clientY } = e;
      const { clientWidth, clientHeight } = heroRef.current;

      const x = (clientX - clientWidth / 2) / 25;
      const y = (clientY - clientHeight / 2) / 25;

      heroContentRef.current.style.transform = `rotateY(${
        x * -0.5
      }deg) rotateX(${y * 0.5}deg)`;
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (isMouseOver) {
      document.body.classList.add("hide-cursor");
    } else {
      document.body.classList.remove("hide-cursor");
    }

    return () => {
      document.body.classList.remove("hide-cursor");
    };
  }, [isMouseOver]);

  return (
    <section
      ref={heroRef}
      className={styles["hero-1"]}
      aria-label="Find your stay"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {isMouseOver && <CustomCursor />}
      <div className={styles["hero-bg"]} aria-hidden="true"></div>
      <span className={`${styles.blob} ${styles.b1}`}></span>
      <span className={`${styles.blob} ${styles.b2}`}></span>
      <div ref={heroContentRef} className={`container ${styles["hero-content"]}`}>
        <span className={`${styles["hero-eyebrow"]} reveal`}>
          Trending now • Maldives, Kyoto, Santorini
        </span>
        <h1 className={`${styles["hero-title"]} reveal`}>
          Find your next <span className={styles.grad}>unforgettable</span> stay
        </h1>
        <p className={`${styles["hero-sub"]} reveal`}>
          From boutique hideaways to grand resorts, compare top deals, check
          real reviews, and book with confidence — all in one beautiful place.
        </p>

        <div className={`${styles["search-card"]} reveal`} role="search" aria-label="Hotel search">
          <form
            id="searchForm"
            onSubmit={handleSubmit}
          >
            <div className={styles["search-grid"]}>
              <div className={styles.field}>
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Where to?"
                  autoComplete="off"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="checkin">Check-in</label>
                <input id="checkin" name="checkin" type="date" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="checkout">Check-out</label>
                <input id="checkout" name="checkout" type="date" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="guests">Guests</label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  defaultValue="2"
                />
              </div>
              <div className={styles["search-btn"]}>
                <button className="btn btn-primary btn-hotelSearch" type="submit">
                  Search hotels 
                </button>
              </div>
            </div>
          </form>
          <div className={styles.stats} id="stats">
            <div className={styles.stat}>
              <span className={styles.num} data-to="500">
                40
              </span>
              <span className={styles.label}>+ handpicked hotels</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.num} data-to="2500">
                40
              </span>
              <span className={styles.label}>+ destinations</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.num} data-to="98">
                100
              </span>
              <span className={styles.label}>% satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["scroll-ind"]} aria-hidden="true">
        <div>Scroll</div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
