import React from 'react';
import styles from '@/styles/feature.module.scss';
import Image from 'next/image';

function Features() {
  return (
    <section className={styles['section-featured']}>
      <div className='container'>
        <h2 className={styles['heading-featured-in']}>As featured in</h2>
        <div className={styles['logos']}>
          <Image
            width={300}
            height={300}
            src='/img/logos/techcrunch.png'
            alt='Techcrunch logo'
          />
          <Image
            width={300}
            height={300}
            src='/img/logos/business-insider.png'
            alt='Business Insider logo'
          />
          <Image
            width={300}
            height={300}
            src='/img/logos/the-new-york-times.png'
            alt='The New York Times logo'
          />
          <Image
            width={300}
            height={300}
            src='/img/logos/forbes.png'
            alt='Forbes logo'
          />
          <Image
            width={300}
            height={300}
            src='/img/logos/usa-today.png'
            alt='USA Today logo'
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
