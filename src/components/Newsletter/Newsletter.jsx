
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles["newsletter-container"]}>
        <div className={styles["newsletter-card"]}>
          <div className={styles.ring}></div>

          <div className={styles["newsletter-grid"]}>
            <div className={styles["newsletter-visual"]} aria-hidden="true">
              <div className={styles.blob}></div>

              <div className={styles["deal-card"]}>
                <div className={styles["deal-icon"]}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="14"
                      rx="3"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <path
                      d="M9 10v4M15 10v4"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className={styles["deal-text"]}>
                  <strong>Members save</strong>
                  <span>Up to 30% off</span>
                </div>
              </div>

              <div className={styles["deal-chip"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s7-6.326 7-11a7 7 0 1 0-14 0c0 4.674 7 11 7 11Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" fill="currentColor" />
                </svg>
                Beachfront stays
              </div>

              <div className={`${styles.sprinkle} ${styles.s1}`}></div>
              <div className={`${styles.sprinkle} ${styles.s2}`}></div>
              <div className={`${styles.sprinkle} ${styles.s3}`}></div>
            </div>

            <div className={styles["newsletter-content"]}>
              <h2 id="newsletter-title">Unlock exclusive hotel deals</h2>
              <p className={styles.subtitle}>
                Join 200k+ travelers and get early access to flash sales, secret
                rates, and city tips.
              </p>

              <form className={styles["newsletter-form"]} action="#" method="post">
                <div className={styles["form-row"]}>
                  <label className={styles.field}>
                    <span className={styles["field-icon"]} aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                        />
                        <path
                          d="M22 8l-9.172 6.115a2 2 0 0 1-2.256 0L1.4 8"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      autocomplete="email"
                      required
                      aria-label="Email address"
                    />
                  </label>

                  <button className={styles.btn} type="submit">
                    Get deals
                  </button>
                </div>

                <label className={styles.consent}>
                  <input type="checkbox" required aria-required="true" />
                  <span>I agree to the Terms and Privacy Policy</span>
                </label>

                <p className={styles.hint}>No spam. Unsubscribe anytime.</p>
              </form>

              <div className={styles.badges}>
                <span className={styles.badge}>Exclusive deals</span>
                <span className={styles.badge}>Price alerts</span>
                <span className={styles.badge}>City guides</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
