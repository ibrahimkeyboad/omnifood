import React from 'react';
import styles from '@/styles/hero.module.scss';
import Image from 'next/image';
import HeroTextBox from './HeroTextBox';

function HeroSection() {
  const customers = [
    '/img/customers/customer-1.jpg',
    '/img/customers/customer-2.jpg',
    '/img/customers/customer-3.jpg',
    '/img/customers/customer-4.jpg',
    '/img/customers/customer-5.jpg',
    '/img/customers/customer-6.jpg',
  ];
  return (
    <section className={styles['section-hero']}>
      <div className={styles.hero}>
        <HeroTextBox styles={styles} customers={customers} />
        <div className={styles['hero-img-box']}>
          <Image
            src='/img/hero.png'
            width={800}
            height={500}
            alt='hero image'
            className={styles['hero-img']}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
