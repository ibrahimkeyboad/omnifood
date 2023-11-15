import {
  IoInfiniteOutline,
  IoNutritionOutline,
  IoLeafOutline,
  IoPauseOutline,
} from 'react-icons/io5';

function PriceFeature({ styles }) {
  return (
    <div className='container grid grid--4-cols'>
      <div className={styles['feature']}>
        <IoInfiniteOutline className={styles['feature-icon']} />
        <p className={styles['feature-title']}>Never cook again!</p>
        <p className={styles['feature-text']}>
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>
      <div className={styles['feature']}>
        <IoNutritionOutline className={styles['feature-icon']} />
        <p className={styles['feature-title']}>Local and organic</p>
        <p className={styles['feature-text']}>
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </div>
      <div className={styles['feature']}>
        <IoLeafOutline className={styles['feature-icon']} />
        <p className={styles['feature-title']}>No waste</p>
        <p className={styles['feature-text']}>
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>
      <div className={styles['feature']}>
        <IoPauseOutline className={styles['feature-icon']} />
        <p className={styles['feature-title']}>Pause anytime</p>
        <p className={styles['feature-text']}>
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div>
    </div>
  );
}

export default PriceFeature;
