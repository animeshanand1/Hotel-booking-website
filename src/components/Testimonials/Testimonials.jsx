import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials} aria-label="What our customers say">
      <h2 className={styles.heading}>What our customers say</h2>

      {/* Top summary */}
      <div className={styles.summary} aria-label="Average rating 4.9 out of 5">
        <div className={styles.stars} aria-hidden="true">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <span className={styles.score}>4.9/5</span>
        <span className={styles.count}>Based on 3,200+ reviews</span>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {/* Card 1 */}
        <article className={styles.card}>
          <p>
            "Booking my vacation was effortless! The customer service was
            excellent and everything was arranged perfectly. Highly recommend!"
          </p>
          <footer className={styles.footer}>
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Alice Johnson"
              className={styles.avatar}
            />
            <div>
              <strong>Alice Johnson</strong>
              <span className={styles.verified}>
                <i className="fa-solid fa-check"></i> Verified booking
              </span>
            </div>
          </footer>
        </article>

        {/* Card 2 */}
        <article className={styles.card}>
          <p>
            "I had the best travel experience! The app made everything smooth
            and easy, from choosing hotels to final booking."
          </p>
          <footer className={styles.footer}>
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="Mark Thompson"
              className={styles.avatar}
            />
            <div>
              <strong>Mark Thompson</strong>
              <span className={styles.verified}>
                <i className="fa-solid fa-check"></i> Verified booking
              </span>
            </div>
          </footer>
        </article>

        {/* Card 3 */}
        <article className={styles.card}>
          <p>
            "Quick, reliable, and affordable! I’ll definitely use this service
            again for my future travels."
          </p>
          <footer className={styles.footer}>
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Sophie Lee"
              className={styles.avatar}
            />
            <div>
              <strong>Sophie Lee</strong>
              <span className={styles.verified}>
                <i className="fa-solid fa-check"></i> Verified booking
              </span>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
