import React from 'react';
import styles from '@/styles/price.module.scss';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

import {
  IoInfiniteOutline,
  IoNutritionOutline,
  IoLeafOutline,
  IoPauseOutline,
} from 'react-icons/io5';

function Price() {
  return (
    <section className={styles['section-pricing']}>
      <div className='container'>
        <span className='subheading'>Pricing</span>
        <h2 className='heading-secondary'>
          Eating well without breaking the bank
        </h2>
      </div>

      <div className='container grid grid--2-cols margin-bottom-md'>
        <div
          className={`${styles['princing-plan']} ${styles['princing-plan--starter']}`}>
          <header className={styles['plan-header']}>
            <p className={styles['plan-name']}>Starter</p>
            <p className={styles['plan-price']}>
              <span>$</span>399
            </p>
            <p
              className={
                styles['plan-text']
              }>{`per month. That's just $13 per meal!`}</p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>1 meal per day</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Delivery is free</span>
            </li>
            <li className='list-item'>
              <IoMdClose className='list-icon' />
            </li>
          </ul>
          <div className={styles['plan-sing-up']}>
            <a href='#' className='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>

        <div
          className={`${styles['princing-plan']} ${styles['princing-plan--complete']}`}>
          <header className={styles['plan-header']}>
            <p className={styles['plan-name']}>Complete</p>
            <p className={styles['plan-price']}>
              <span>$</span>649
            </p>
            <p
              className={
                styles['plan-text']
              }>{`per month. That's just $11 per meal!`}</p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Delivery is free</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className={styles['plan-sing-up']}>
            <a href='#' className='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className='container grid'>
        <aside className={styles['plan-details']}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

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
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
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
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Price;
