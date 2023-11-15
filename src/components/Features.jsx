import React from 'react';
import styles from '@/styles/feature.module.scss';
import Image from 'next/image';

function Features() {
  const images = [
    {
      src: '/img/logos/techcrunch.png',
      alt: 'Techcrunch logo',
    },

    {
      src: '/img/logos/business-insider.png',
      alt: 'Business Insider logo',
    },

    {
      src: '/img/logos/forbes.png',
      alt: 'Forbes logo',
    },

    {
      src: '/img/logos/usa-today.png',
      alt: 'USA Today logo',
    },
  ];

  return (
    <section className={styles['section-featured']}>
      <div className='container'>
        <h2 className={styles['heading-featured-in']}>As featured in</h2>
        <div className={styles['logos']}>
          {images.map((img) => (
            <Image
              key={img.alt}
              width={300}
              height={300}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
