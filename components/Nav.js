import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import styles from '../styles/Nav.module.scss';

export default function Nav() {
  const [active, setActive] = useState(false);
  const navRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          navRef.current.classList.add(styles.sticky);
        } else {
          navRef.current.classList.remove(styles.sticky);
        }
      },
      {
        threshold: 0,
        rootMargin: '300px',
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.nav__logo}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/images/svg/logo.svg"
                height={115.54}
                width={180}
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        <ul className={`${styles.nav__links} ${active ? styles.active : ''}`}>
          <li className={styles.nav__item}>
            <Link href="/about-us">
              <a className={styles.nav__link} title="About">
                About
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/blog">
              <a className={styles.nav__link} title="Blog">
                Blog
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/contact-us">
              <a className={styles.nav__link} title="Contact">
                Contact
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <ButtonLink
              className={`${styles.nav__button} ${active ? styles.active : ''}`}
              link="https://webdevpath.slack.com/join/shared_invite/zt-xqqgwwo5-a09BSVWC9ZrHmS6RaMBzVw#/shared-invite/email"
            >
              Join us
            </ButtonLink>
          </li>
        </ul>
        <button
          className={`${styles.nav__hamburger} ${active ? styles.active : ''}`}
          onClick={() => setActive(active => !active)}
          aria-label="toggle navigation"
        >
          <span className={styles.nav__hamburger__bar}></span>
          <span className={styles.nav__hamburger__bar}></span>
          <span className={styles.nav__hamburger__bar}></span>
        </button>
      </nav>
    </header>
  );
}
