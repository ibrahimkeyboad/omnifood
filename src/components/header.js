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
        className={styles.header__logo}
      />
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              section 01
            </Link>
          </li>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              section 02
            </Link>
          </li>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              section 03
            </Link>
          </li>
          <li>
            <Link className={styles.header__nav__link} href='#'>
              section 04
            </Link>
          </li>
          <li>
            <Link
              className={` ${styles.header__nav__cta}  ${styles.header__nav__link}`}
              href='#'>
              section 05
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
