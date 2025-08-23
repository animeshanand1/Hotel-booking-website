import React from 'react';
import styles from './Card.module.css';

const Star = (props) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16" {...props}>
    <path fill="currentColor" d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.98 4.8 17.5l1-5.78L1.6 7.62l5.82-.85L10 1.5z" />
  </svg>
);

const LocationPin = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" {...props}>
    <path fill="currentColor" d="M12 2C8.7 2 6 4.69 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.31-2.69-6-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
  </svg>
);

const Heart = ({ filled }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
    <path
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.6"
      d="M12.1 20.3l-1.1-1C6.1 14.8 3 12 3 8.7 3 6.1 5.1 4 7.7 4c1.5 0 3 .7 3.9 1.9C12.6 4.7 14.1 4 15.6 4 18.2 4 20.3 6.1 20.3 8.7c0 3.3-3.1 6.1-8 10.6l-1.2 1z"
    />
  </svg>
);

const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" {...props}>
    <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
  </svg>
);

const Card = ({ hotel, onBook, onToggleFavorite }) => {
  const { name, image, rating, location, price, badge, isFavorite } = hotel;

  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img
          className={styles.img}
          src={image}
          alt={`${name} in ${location}`}
          loading="lazy"
          decoding="async"
        />
        {badge ? <span className={styles.badge}>{badge}</span> : null}

        <button
          type="button"
          className={styles.wishlist}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-pressed={!!isFavorite}
          onClick={() => onToggleFavorite?.(hotel)}
        >
          <Heart filled={!!isFavorite} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title} title={name}>{name}</h3>
          <div className={styles.rating} aria-label={`Rated ${rating} out of 5`}>
            <Star />
            <span>{rating?.toFixed ? rating.toFixed(1) : rating}</span>
          </div>
        </div>

        <p className={styles.location}>
          <LocationPin />
          <span title={location}>{location}</span>
        </p>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceValue}>${price}</span>
            <span className={styles.per}>/night</span>
          </div>
          <button
            type="button"
            className={styles.cta}
            onClick={() => onBook?.(hotel)}
          >
            <span>Book now</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;