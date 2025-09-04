import React, { useMemo, useRef } from 'react';
import styles from './Testimonials.module.css';

const Stars = ({ rating = 5, className = '' }) => {
  const stars = useMemo(() => {
    const out = [];
    const rounded = Math.round(rating * 2) / 2; 
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rounded)) {
        out.push(<i key={i} className={`fa-solid fa-star ${styles.star} ${className}`} aria-hidden="true"></i>);
      } else if (i - 0.5 === rounded) {
        out.push(<i key={i} className={`fa-solid fa-star-half-stroke ${styles.star} ${className}`} aria-hidden="true"></i>);
      } else {
        out.push(<i key={i} className={`fa-regular fa-star ${styles.star} ${className}`} aria-hidden="true"></i>);
      }
    }
    return out;
  }, [rating, className]);

  return <span className={styles.stars} aria-hidden="true">{stars}</span>;
};

const defaultItems = [
  {
    name: 'Amelia R.',
    meta: '2‑night stay • Santorini',
    rating: 5,
    text: 'Booking was seamless and the price beat every site I checked. We even got a free upgrade and late checkout!',
    avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=80&auto=format&fit=crop',
    verified: true,
  },
  {
    name: 'Jamal K.',
    meta: '1‑night stay • Dubai',
    rating: 4.5,
    text: 'The app notified me when prices dropped. Saved 22% on a last‑minute hotel in Dubai Marina. Instant confirmation!',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop',
    verified: true,
  },
  {
    name: 'Luisa M.',
    meta: '3‑night stay • Barcelona',
    rating: 5,
    text: 'Excellent customer support. They fixed a date mistake in 5 minutes on chat. Hotel was exactly as shown.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=80&auto=format&fit=crop',
    verified: true,
  },
  {
    name: 'Mateo G.',
    meta: '4‑night stay • Bali',
    rating: 5,
    text: 'Found a boutique hotel right by the beach. Clean, quiet, and the deal came with breakfast included.',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=80&auto=format&fit=crop',
    verified: true,
  },
  {
    name: 'Saanvi P.',
    meta: '3‑night stay • Phuket',
    rating: 5,
    text: 'We got a free room upgrade and late checkout. The rooftop pool and sunset views were unreal.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop',
    verified: true,
  },
  {
    name: 'Ethan L.',
    meta: '2‑night stay • Lisbon',
    rating: 4.5,
    text: 'Breakfast variety was great, rooms spotless, and check‑in was instant. Will book again.',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=80&auto=format&fit=crop',
    verified: true,
  },
];

function Testimonials({
  items = defaultItems,
  totalReviews = 3200,
  title = 'Loved by travelers worldwide',
  subtitle = 'Real stays. Real savings. Real smiles.',
  className = '',
}) {
  const scrollerRef = useRef(null);

  const avgRating = useMemo(() => {
    if (!items.length) return 0;
    const sum = items.reduce((acc, i) => acc + (i.rating || 0), 0);
    return Math.round((sum / items.length) * 10) / 10;
  }, [items]);

  const handleScroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const page = el.clientWidth;
    el.scrollBy({ left: dir * page, behavior: 'smooth' });
  };

  return (
    <section className={`${styles.section} ${className}`} aria-labelledby="tcar-title">
      <div className={styles.container}>
        <div className={styles.wrap}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Guest testimonials</span>
            <h2 id="tcar-title" className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.summary} aria-label={`Average rating ${avgRating} out of 5`}>
              <Stars rating={5} />
              <span className={styles.score}>{avgRating}/5</span>
              <span className={styles.count}>Based on {totalReviews.toLocaleString()}+ reviews</span>
            </div>
          </header>

          <div className={styles.scrollerWrap}>
            <button
              type="button"
              className={`${styles.nav} ${styles.prev}`}
              aria-label="Previous"
              onClick={() => handleScroll(-1)}
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>

            <div className={styles.scroller} ref={scrollerRef} role="region" aria-label="Testimonials">
              {items.map((t, idx) => (
                <div className={styles.slide} key={idx}>
                  <article className={styles.item}>
                    <div className={styles.rating} aria-label={`${t.rating} out of 5 stars`}>
                      <Stars rating={t.rating} />
                    </div>

                    <blockquote className={styles.text}>
                      {t.text}
                    </blockquote>

                    <footer className={styles.footer}>
                      <div className={styles.avatar}>
                        <img src={t.avatar} alt="" loading="lazy" />
                      </div>
                      <div className={styles.person}>
                        <strong>{t.name}</strong>
                        <span>{t.meta}</span>
                      </div>
                      {t.verified && (
                        <span className={styles.verified}>
                          <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                          Verified booking
                        </span>
                      )}
                    </footer>
                  </article>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.nav} ${styles.next}`}
              aria-label="Next"
              onClick={() => handleScroll(1)}
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;