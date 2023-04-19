import React from 'react';
import styles from '@/styles/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className={styles['hero-text-box']}>
          <h1 className='heading-primary'>
            Headline: A healthy meal delivered to your door, every single day
          </h1>
          <p className={styles['hero-description']}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>
          <nav className={styles.hero__btnContainer}>
            <Link href='#' className='btn btn--full'>
              Start eating well
            </Link>
            <Link href='#' className='btn btn--outline'>
              Learn more &darr;
            </Link>
          </nav>
          <div className={styles['delivered-meals']}>
            <div className={styles['delivered-imgs']}>
              {customers.map((img, i) => (
                <Image
                  src={img}
                  width={100}
                  height={100}
                  key={img}
                  alt={`customer-${i}`}
                />
              ))}
            </div>
            <p className={styles['delivered-text']}>
              <span>{`250,000+ `}</span>
              meals delivered last year!
            </p>
          </div>
        </div>
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
