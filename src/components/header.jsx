import Image from 'next/image';
import React from 'react';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src='/img/omnifood-logo.png'
        alt='ominfood logo'
        width={200}
        height={200}
        className='logo'
      />
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              How it works
            </Link>
          </li>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              Meals
            </Link>
          </li>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              Testimonials
            </Link>
          </li>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={` ${styles.header__nav__cta}  ${styles.header__nav__link}`}
              href='#'>
              Try for free
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
