import React from "react";
import styles from "./Footer.module.css";

const defaultLinks = {
  company: [
    { label: "About us", href: "#" },
    { label: "Contact", href: "#" },
  ],
  explore: [
    { label: "Beachfront stays", href: "#" },
    { label: "City breaks", href: "#" },
    { label: "Luxury hotels", href: "#" },
    { label: "Budget stays", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Cancellation options", href: "#" },
    { label: "Safety & FAQs", href: "#" },
  ],
};

const defaultSocial = [
  { icon: "facebook-f", label: "Facebook", href: "#" },
  { icon: "twitter", label: "Twitter", href: "#" },
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "tiktok", label: "TikTok", href: "#" },
];

const paymentIcons = ["cc-visa", "cc-mastercard", "cc-amex", "cc-paypal"];

function Footer({
  brandName = "StayEase",
  tagline = "Book stays you love. Save with exclusive deals.",
  address = "New Rajeev Nagar, New Delhi, India",
  phone = "+91 9876543210",
  email = "support@luxehotel.com",
  links = defaultLinks,
  social = defaultSocial,
  showAppBadges = true,
  showPayments = true,
  className = "",
}) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${className}`}
      aria-labelledby="footer-heading"
    >
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.topBar}>
            <div className={styles.brandBlock}>
              <div className={styles.brandRow}>
                <div className={styles.brandMark} aria-hidden="true">
                  <i className="fa-solid fa-hotel" />
                </div>
                <div className={styles.brandText}>
                  <h2 id="footer-heading" className={styles.brandName}>
                    {brandName}
                  </h2>
                  <p className={styles.tagline}>{tagline}</p>
                </div>
              </div>

              <nav className={styles.social} aria-label="Social links">
                {social.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className={styles.socialBtn}
                  >
                    <i
                      className={`fa-brands fa-${s.icon}`}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>

              <div className={styles.trust}>
                <span className={styles.trustChip}>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />{" "}
                  No booking fees
                </span>
                <span className={styles.trustChip}>
                  <i className="fa-solid fa-bolt" aria-hidden="true" /> Instant
                  confirmation
                </span>
                <span className={styles.trustChip}>
                  <i className="fa-solid fa-headset" aria-hidden="true" /> 24/7
                  support
                </span>
              </div>
            </div>

            <div className={styles.grid}>
              <nav
                aria-labelledby="footer-company"
                className={styles.linkGroup}
              >
                <h3 id="footer-company" className={styles.heading}>
                  Company
                </h3>
                <ul className={styles.list}>
                  {links.company.map((l, i) => (
                    <li key={i}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav
                aria-labelledby="footer-explore"
                className={styles.linkGroup}
              >
                <h3 id="footer-explore" className={styles.heading}>
                  Explore
                </h3>
                <ul className={styles.list}>
                  {links.explore.map((l, i) => (
                    <li key={i}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav
                aria-labelledby="footer-support"
                className={styles.linkGroup}
              >
                <h3 id="footer-support" className={styles.heading}>
                  Support
                </h3>
                <ul className={styles.list}>
                  {links.support.map((l, i) => (
                    <li key={i}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <address
                className={`${styles.linkGroup} ${styles.contact}`}
                aria-labelledby="footer-contact"
              >
                <h3 id="footer-contact" className={styles.heading}>
                  Contact
                </h3>
                <ul className={styles.contactList}>
                  <li>
                    <i
                      className="fa-solid fa-location-dot"
                      aria-hidden="true"
                    />
                    <span>{address}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                    <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                </ul>

                {showAppBadges && (
                  <div className={styles.appBadges}>
                    <a href="#" className={styles.badge}>
                      <i className="fa-brands fa-apple" aria-hidden="true" />
                      <span>
                        <small>Download on the</small>
                        App Store
                      </span>
                    </a>
                    <a href="#" className={styles.badge}>
                      <i
                        className="fa-brands fa-google-play"
                        aria-hidden="true"
                      />
                      <span>
                        <small>Get it on</small>
                        Google Play
                      </span>
                    </a>
                  </div>
                )}
              </address>
            </div>
          </div>

          <div className={styles.metaBar}>
            {showPayments && (
              <div
                className={styles.payments}
                aria-label="Accepted payment methods"
              >
                {paymentIcons.map((p, i) => (
                  <i
                    key={i}
                    className={`fa-brands fa-${p}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}

            <div className={styles.separator} />
          </div>

          <div className={styles.bottomBar}>
            <p className={styles.copy}>
              © {year} {brandName}. All rights reserved.
            </p>
            <nav className={styles.legal} aria-label="Legal links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
