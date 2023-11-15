import React from 'react';
import styles from '@/styles/price.module.scss';

import PricePlan from './PricePlan';
import PriceFeature from './PriceFeature';

function Price() {
  return (
    <section className={styles['section-pricing']}>
      <div className='container'>
        <span className='subheading'>Pricing</span>
        <h2 className='heading-secondary'>
          Eating well without breaking the bank
        </h2>
      </div>

      <PricePlan styles={styles} />
      <PriceFeature styles={styles} />
    </section>
  );
}

export default Price;
