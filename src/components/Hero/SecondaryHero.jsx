import React from "react";
import styles from "./SecondaryHero.module.css";

const SecondaryHero = () => {
  return (
    <section className={styles['hero-2']} id="deals" aria-label="Seasonal highlights">
      <div className={`container ${styles['hero-2-wrap']}`}>
        <div>
          <h2 className="section-title reveal">Summer escapes — Save up to 35%</h2>
          <p className="section-sub reveal">
            Limited-time offers on beachside resorts, city boutique stays, and
            countryside retreats. Lock in exclusive perks: breakfast, late
            checkout, and spa credits.
          </p>
          <div className={styles['feature-list']}>
            <div className={`${styles.feature} reveal`}>
              <i>✓</i>
              <div>
                <strong>Flexible cancellation</strong>
                <br />
                <span className="muted">
                  Change plans up to 24h before check-in
                </span>
              </div>
            </div>
            <div className={`${styles.feature} reveal`}>
              <i>🏷️</i>
              <div>
                <strong>Security our Priority</strong>
                <br />
                <span className="muted">Extra 10% off with free signup</span>
              </div>
            </div>
            <div className={`${styles.feature} reveal`}>
              <i>✨</i>
              <div>
                <strong>Verified reviews</strong>
                <br />
                <span className="muted">Real stays. Real people.</span>
              </div>
            </div>
          </div>
          <div className={`${styles['hero-2-cta']} reveal`}>
            <a href="#hotels" className="btn btn-primary">
              Explore deals
            </a>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <div className={`${styles.collage} reveal`}>
          <div className={`${styles.ph} ${styles.p1} ${styles.floater}`}>
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzb3J0fGVufDB8fDB8fHww"
              alt="Infinity pool at sunset"
            />
          </div>
          <div className={`${styles.ph} ${styles.p2} ${styles.floater}`} style={{'animationDelay': '-2s'}}>
            <img
              src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww"
              alt="Cozy hotel lobby"
            />
          </div>
          <div className={`${styles.ph} ${styles.p3}`}>
            <img
              src="https://plus.unsplash.com/premium_photo-1672234450443-d790e211e84e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"
              alt="Boutique room interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
