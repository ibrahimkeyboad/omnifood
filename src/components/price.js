import React from 'react';
import styles from '@/styles/price.module.scss';

function Price() {
  return (
    <section class={styles['section-pricing']}>
      <div class='container'>
        <span class='subheading'>Pricing</span>
        <h2 class='heading-secondary'>Eating well without breaking the bank</h2>
      </div>

      <div class='container grid grid--2-cols margin-bottom-md'>
        <div
          class={`${styles['princing-plan']} ${styles['princing-plan--starter']}`}>
          <header class={styles['plan-header']}>
            <p class={styles['plan-name']}>Starter</p>
            <p class={styles['plan-price']}>
              <span>$</span>399
            </p>
            <p
              class={
                styles['plan-text']
              }>{`per month. That's just $13 per meal!`}</p>
          </header>
          <ul class='list'>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li class='list-item'>
              <ion-icon class='list-icon' name='close-outline'></ion-icon>
            </li>
          </ul>
          <div class={styles['plan-sing-up']}>
            <a href='#' class='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>

        <div
          class={`${styles['princing-plan']} ${styles['princing-plan--complete']}`}>
          <header class={styles['plan-header']}>
            <p class={styles['plan-name']}>Complete</p>
            <p class={styles['plan-price']}>
              <span>$</span>649
            </p>
            <p
              class={
                styles['plan-text']
              }>{`per month. That's just $11 per meal!`}</p>
          </header>
          <ul class='list'>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li class='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div class={styles['plan-sing-up']}>
            <a href='#' class='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div class='container grid'>
        <aside class={styles['plan-details']}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div class='container grid grid--4-cols'>
        <div class={styles['feature']}>
          <ion-icon
            class={styles['feature-icon']}
            name='infinite-outline'></ion-icon>
          <p class={styles['feature-title']}>Never cook again!</p>
          <p class={styles['feature-text']}>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div class={styles['feature']}>
          <ion-icon
            class={styles['feature-icon']}
            name='nutrition-outline'></ion-icon>
          <p class={styles['feature-title']}>Local and organic</p>
          <p class={styles['feature-text']}>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div class={styles['feature']}>
          <ion-icon
            class={styles['feature-icon']}
            name='leaf-outline'></ion-icon>
          <p class={styles['feature-title']}>No waste</p>
          <p class={styles['feature-text']}>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div class={styles['feature']}>
          <ion-icon
            class={styles['feature-icon']}
            name='pause-outline'></ion-icon>
          <p class={styles['feature-title']}>Pause anytime</p>
          <p class={styles['feature-text']}>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Price;
