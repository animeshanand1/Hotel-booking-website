import React from "react";
import { useParams } from "react-router-dom";
import styles from './HotelDetailsPage.module.css';

const HotelDetailsPage = () => {
  const { hotelId } = useParams();
  return (
    <section className={styles['hotel-details']} aria-label="Hotel details page">
      <div className={styles['hd-container']}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <a href="#">Home</a>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <a href="#">Hotels</a>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span aria-current="page">Azure Bay Resort</span>
        </nav>

        <div className={styles.hero}>
          <div className={styles['hero-ring']}></div>
          <div className={styles['hero-grid']}>
            <figure className={`${styles['hg-item']} ${styles['hg-main']}`}>
              <img
                src="https://images.unsplash.com/photo-1501117716987-c8e3f9f0f4b1?q=80&w=1600&auto=format&fit=crop"
                alt="Hotel infinity pool overlooking the ocean"
                loading="eager"
              />
            </figure>
            <figure className={styles['hg-item']}>
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
                alt="Spacious king room with ocean view"
                loading="lazy"
              />
            </figure>
            <figure className={styles['hg-item']}>
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
                alt="Modern hotel lobby"
                loading="lazy"
              />
            </figure>
            <figure className={styles['hg-item']}>
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                alt="Rooftop bar at sunset"
                loading="lazy"
              />
            </figure>
            <figure className={styles['hg-item']}>
              <img
                src="https://images.unsplash.com/photo-1522708323590-30f93d91bd17?q=80&w=800&auto=format&fit=crop"
                alt="Private balcony with lounge chairs"
                loading="lazy"
              />
            </figure>

            <button
              className={styles['photo-cta']}
              type="button"
              aria-label="View all photos"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M7 16l2.5-3a1 1 0 0 1 1.6 0L14 16l1.5-2a1 1 0 0 1 1.6.05L19 16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              View photos (34)
            </button>

            <button className={styles['save-btn']} type="button" aria-pressed="false">
              <svg
                className={styles.heart}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Save
            </button>
          </div>
        </div>

        <header className={styles['hotel-header']}>
          <div className={styles['title-side']}>
            <h1>Hotel Details for ID: {hotelId}</h1>
            <div className={styles.meta}>
              <span className={styles['rating-badge']} aria-label="Rated 4.8 out of 5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-1.05L12 2 9.19 8.19 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                4.8
              </span>
              <a className={styles['reviews-link']} href="#reviews">
                (3,215 reviews)
              </a>
              <span className={styles.dot}>•</span>
              <span className={styles.verified}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Verified property
              </span>
              <div className={styles.location}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s7-6.326 7-11a7 7 0 1 0-14 0c0 4.674 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" fill="currentColor" />
                </svg>
                Seminyak, Bali · <a href="#map">View on map</a>
              </div>
            </div>

            <div className={styles.highlights}>
              <span className={styles['hl-chip']}>Free cancellation</span>
              <span className={styles['hl-chip']}>Breakfast included</span>
              <span className={styles['hl-chip']}>Beachfront</span>
              <span className={styles['hl-chip']}>Infinity pool</span>
              <span className={styles['hl-chip']}>Spa & wellness</span>
              <span className={styles['hl-chip']}>Airport shuttle</span>
            </div>
          </div>

          <div className={styles['price-side']}>
            <div className={styles.price}>
              <span className={styles.from}>From</span>
              <div className={styles.amount}>
                <strong>$189</strong>
                <span>/night</span>
              </div>
              <span className={styles.tax}>Includes taxes & fees</span>
            </div>
            <button className={`${styles.btn} ${styles.primary}`}>Check availability</button>
            <div className={styles['trust-row']}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12.5l4 4 12-12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              No booking fees
            </div>
          </div>
        </header>

        <div className={styles['page-grid']}>
          <div className={styles['col-left']}>
            <section className={`${styles.card} ${styles.about}`} aria-labelledby="about-title">
              <h2 id="about-title">About this property</h2>
              <p>
                Overlooking the turquoise waters of the Indian Ocean, Azure Bay
                Resort blends contemporary design with island soul. Wake up to
                ocean breezes, unwind at the award‑winning spa, and sip sunset
                cocktails at the rooftop bar.
              </p>
              <ul className={styles.bullet}>
                <li>200m to Seminyak Beach</li>
                <li>Rooftop infinity pool and sky bar</li>
                <li>24/7 concierge and in‑room dining</li>
              </ul>
            </section>

            <section className={`${styles.card} ${styles.amenities}`} aria-labelledby="amenities-title">
              <h2 id="amenities-title">Amenities</h2>
              <div className={styles['amenities-grid']}>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2 8h20M6 8V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M6 21h12a2 2 0 0 0 2-2v-7H4v7a2 2 0 0 0 2 2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  King beds
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 12h18M6 5h12M8 19h8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Free Wi‑Fi
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 6h16M6 6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  In‑room safe
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12a8 8 0 0 1 16 0v3H4v-3Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M6 18h12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Air conditioning
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4h16v10a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V4Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M9 9h6M8 13h8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Breakfast included
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12c2-3.333 6-5 12-5a2 2 0 0 1 2 2v8H4v-5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  Infinity pool
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3 7h7l-5.6 4.1 2.1 6.9L12 16l-6.5 4 2.1-6.9L2 9h7l3-7Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  Spa & sauna
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2 12h20M6 12v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  Gym
                </div>
                <div className={styles.amenity}>
                  <span className={styles.ico}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l2-7h10l2 7M5 12v7h14v-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  Restaurant & bar
                </div>
              </div>
            </section>

            <section className={`${styles.card} ${styles.rooms}`} aria-labelledby="rooms-title">
              <h2 id="rooms-title">Available rooms</h2>

              <article className={styles['room-card']}>
                <div className={styles['room-media']}>
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
                    alt="Deluxe Ocean View Room"
                  />
                  <span className={styles.tag}>Popular choice</span>
                </div>
                <div className={styles['room-info']}>
                  <h3>Deluxe Ocean View</h3>
                  <ul className={styles['room-points']}>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 8h20M6 8V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                      1 king bed • 35 m²
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 12h18M6 5h12M8 19h8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      Free Wi‑Fi
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 12a8 8 0 0 1 16 0v3H4v-3Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                      Air conditioning
                    </li>
                  </ul>
                </div>
                <div className={styles['room-cta']}>
                  <div className={styles['room-price']}>
                    <span className={styles.from}>From</span>
                    <div className={styles.amount}>
                      <strong>$189</strong>
                      <span>/night</span>
                    </div>
                    <span className={`${styles.policy} ${styles.good}`}>Free cancellation</span>
                  </div>
                  <button className={`${styles.btn} ${styles.primary}`}>Select room</button>
                  <span className={styles.policy}>Pay at property available</span>
                </div>
              </article>

              <article className={styles['room-card']}>
                <div className={styles['room-media']}>
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
                    alt="Junior Suite with balcony"
                  />
                </div>
                <div className={styles['room-info']}>
                  <h3>Junior Suite with Balcony</h3>
                  <ul className={styles['room-points']}>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 8h20M6 8V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                      1 king bed + sofa • 48 m²
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M4 12a8 8 0 1 1 16 0"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                      Oceanfront balcony
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 6h16M6 6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                      Breakfast included
                    </li>
                  </ul>
                </div>
                <div className={styles['room-cta']}>
                  <div className={styles['room-price']}>
                    <span className={styles.from}>From</span>
                    <div className={styles.amount}>
                      <strong>$249</strong>
                      <span>/night</span>
                    </div>
                    <span className={`${styles.policy} ${styles.good}`}>Fully refundable</span>
                  </div>
                  <button className={`${styles.btn} ${styles.primary}`}>Select room</button>
                  <span className={styles.policy}>No prepayment needed</span>
                </div>
              </article>
            </section>

            <section
              className={`${styles.card} ${styles.reviews}`}
              id="reviews"
              aria-labelledby="reviews-title"
            >
              <h2 id="reviews-title">Guest reviews</h2>
              <div className={styles['reviews-head']}>
                <div className={styles['score-box']}>
                  <strong>4.8</strong>
                  <span>Exceptional</span>
                  <div className={styles.stars}>
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
                  <small>3,215 reviews</small>
                </div>
                <div className={styles.bars}>
                  <div className={styles.bar}>
                    <span>Cleanliness</span>
                    <div>
                      <i style={{width:'95%'}}></i>
                    </div>
                    <b>9.5</b>
                  </div>
                  <div className={styles.bar}>
                    <span>Location</span>
                    <div>
                      <i style={{width:'92%'}}></i>
                    </div>
                    <b>9.2</b>
                  </div>
                  <div className={styles.bar}>
                    <span>Staff</span>
                    <div>
                      <i style={{width:'96%'}}></i>
                    </div>
                    <b>9.6</b>
                  </div>
                  <div className={styles.bar}>
                    <span>Value</span>
                    <div>
                      <i style={{width:'90%'}}></i>
                    </div>
                    <b>9.0</b>
                  </div>
                </div>
              </div>

              <div className={styles['reviews-grid']}>
                <article className={styles.rev}>
                  <div className={styles['rev-top']}>
                    <div className={styles.avatar}>
                      <img
                        src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=80&auto=format&fit=crop"
                        alt=""
                      />
                    </div>
                    <div className={styles.who}>
                      <strong>Amelia</strong>
                      <span>United Kingdom</span>
                    </div>
                    <span className={styles.badge}>10/10</span>
                  </div>
                  <p>
                    Gorgeous views and the infinity pool is unreal. Got a late
                    checkout at no extra cost—staff were lovely.
                  </p>
                </article>

                <article className={styles.rev}>
                  <div className={styles['rev-top']}>
                    <div className={styles.avatar}>
                      <img
                        src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop"
                        alt=""
                      />
                    </div>
                    <div className={styles.who}>
                      <strong>Jamal</strong>
                      <span>UAE</span>
                    </div>
                    <span className={styles.badge}>9/10</span>
                  </div>
                  <p>
                    Price alerts saved me money and check‑in was instant.
                    Balcony view worth every penny.
                  </p>
                </article>

                <article className={styles.rev}>
                  <div className={styles['rev-top']}>
                    <div className={styles.avatar}>
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=80&auto=format&fit=crop"
                        alt=""
                      />
                    </div>
                    <div className={styles.who}>
                      <strong>Luisa</strong>
                      <span>Spain</span>
                    </div>
                    <span className={styles.badge}>9.5/10</span>
                  </div>
                  <p>
                    Support fixed a booking date in minutes. Rooms exactly as
                    shown. Great breakfast selection.
                  </p>
                </article>
              </div>
            </section>

            <section className={`${styles.card} ${styles.policies}`} aria-labelledby="policies-title">
              <h2 id="policies-title">Policies</h2>
              <details>
                <summary>Check‑in/Check‑out</summary>
                <p>
                  Check‑in after 3:00 PM · Check‑out before 12:00 PM. Early
                  check‑in and late check‑out subject to availability.
                </p>
              </details>
              <details>
                <summary>Cancellation</summary>
                <p>
                  Free cancellation up to 48 hours before arrival on most rates.
                  Non‑refundable rates may apply on special deals.
                </p>
              </details>
              <details>
                <summary>Children & extra beds</summary>
                <p>
                  Children of all ages welcome. Extra beds available on request
                  (additional charges may apply).
                </p>
              </details>
              <details>
                <summary>Pets</summary>
                <p>
                  Small pets allowed in designated rooms. A cleaning fee may
                  apply.
                </p>
              </details>
              <details>
                <summary>Smoking</summary>
                <p>Smoke‑free property. Designated outdoor areas provided.</p>
              </details>
            </section>

            <section className={`${styles.card} ${styles.map}`} id="map" aria-labelledby="map-title">
              <h2 id="map-title">Location</h2>
              <div
                className={styles['map-box']}
                role="img"
                aria-label="Map preview of Azure Bay Resort"
              >
                <div className={styles.pin}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.326 7-11a7 7 0 1 0-14 0c0 4.674 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="12" cy="10" r="2.5" fill="currentColor" />
                  </svg>
                  Azure Bay Resort
                </div>
              </div>
            </section>
          </div>

          <aside className={styles['col-right']}>
            <div className={`${styles.booking} ${styles.card}`}>
              <div className={styles['book-head']}>
                <div className={styles.price}>
                  <span className={styles.from}>From</span>
                  <div className={styles.amount}>
                    <strong>$189</strong>
                    <span>/night</span>
                  </div>
                </div>
                <span className={`${styles.badge} ${styles.deal}`}>10% off first stay</span>
              </div>
              <form className={styles['book-form']} action="#" method="post">
                <label className={styles.field}>
                  <span className={styles['field-icon']}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M3 10h18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M8 2v4M16 2v4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="date"
                    className={styles.input}
                    required
                    aria-label="Check-in date"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles['field-icon']}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M3 10h18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M8 2v4M16 2v4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="date"
                    className={styles.input}
                    required
                    aria-label="Check-out date"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles['field-icon']}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9a7 7 0 0 1 14 0"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <select className={styles.input} aria-label="Guests">
                    <option>2 guests</option>
                    <option>1 guest</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </label>
                <button className={`${styles.btn} ${styles.primary}`} type="submit">
                  Check availability
                </button>
                <p className={styles.guarantee}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12.5l4 4 12-12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Best price guarantee · Instant confirmation
                </p>
              </form>
            </div>

            <div className={`${styles.why} ${styles.card}`}>
              <h3>Why book with us</h3>
              <ul>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12.5l4 4 12-12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  No hidden fees
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12.5l4 4 12-12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Free cancellations on most stays
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12.5l4 4 12-12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  24/7 support
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div className={styles['sticky-cta']} role="region" aria-label="Mobile booking bar">
        <div className={styles['sticky-price']}>
          <strong>$189</strong>
          <span>/night</span>
        </div>
        <button className={`${styles.btn} ${styles.primary}`}>Check availability</button>
      </div>
    </section>
  );
};

export default HotelDetailsPage;
