import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.testimonialsContainer}>
        <div className="testimonials-card">
          <div className="t-ring"></div>

          <header className="t-header">
            <span className="eyebrow">Guest testimonials</span>
            <h2 id="testimonials-title">Loved by travelers worldwide</h2>
            <p className="subtitle">Real stays. Real savings. Real smiles.</p>

            <div className="t-summary" aria-label="Average rating 4.9 out of 5">
              <div className="stars" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="score">4.9/5</span>
              <span className="count">Based on 3,200+ reviews</span>
            </div>
          </header>

          <div className="t-grid">
            <article className="t-card">
              <div className="t-quote" aria-hidden="true">
                “
              </div>
              <div className="t-rating" aria-label="5 out of 5 stars">
                <div className="stars" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <blockquote className="t-text">
                Booking was seamless and the price beat every site I checked. We
                even got a free upgrade and late checkout!
              </blockquote>
              <footer className="t-footer">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=80&auto=format&fit=crop"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="person">
                  <strong>Amelia R.</strong>
                  <span>2‑night stay • Santorini</span>
                </div>
                <span className="verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Verified booking
                </span>
              </footer>
              <div className="chips">
                <span className="chip">Free upgrade</span>
                <span className="chip">Late checkout</span>
              </div>
            </article>
            <article className="t-card">
              <div className="t-quote" aria-hidden="true">
                “
              </div>
              <div className="t-rating" aria-label="5 out of 5 stars">
                <div className="stars" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style="opacity:.4"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <blockquote className="t-text">
                The app notified me when prices dropped. Saved 22% on a
                last‑minute hotel in Dubai Marina. Instant confirmation!
              </blockquote>
              <footer className="t-footer">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="person">
                  <strong>Jamal K.</strong>
                  <span>1‑night stay • Dubai</span>
                </div>
                <span className="verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Verified booking
                </span>
              </footer>
              <div className="chips">
                <span className="chip">Price alert</span>
                <span className="chip">Instant confirmation</span>
              </div>
            </article>

            <article className="t-card">
              <div className="t-quote" aria-hidden="true">
                “
              </div>
              <div className="t-rating" aria-label="5 out of 5 stars">
                <div className="stars" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <blockquote className="t-text">
                Excellent customer support. They fixed a date mistake in 5
                minutes on chat. Hotel was exactly as shown.
              </blockquote>
              <footer className="t-footer">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=80&auto=format&fit=crop"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="person">
                  <strong>Luisa M.</strong>
                  <span>3‑night stay • Barcelona</span>
                </div>
                <span className="verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Verified booking
                </span>
              </footer>
              <div className="chips">
                <span className="chip">24/7 support</span>
                <span className="chip">As advertised</span>
              </div>
            </article>

            <article className="t-card">
              <div className="t-quote" aria-hidden="true">
                “
              </div>
              <div className="t-rating" aria-label="5 out of 5 stars">
                <div className="stars" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style="opacity:.4"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style="opacity:.4"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <blockquote className="t-text">
                Found a boutique hotel right by the beach. Clean, quiet, and the
                deal came with breakfast included.
              </blockquote>
              <footer className="t-footer">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=80&auto=format&fit=crop"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="person">
                  <strong>Mateo G.</strong>
                  <span>4‑night stay • Bali</span>
                </div>
                <span className="verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Verified booking
                </span>
              </footer>
              <div className="chips">
                <span className="chip">Beachfront</span>
                <span className="chip">Breakfast included</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
