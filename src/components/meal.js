import React from 'react';

import styles from '@/styles/meals.module.scss';
import Image from 'next/image';
import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from 'react-icons/io5';

import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

function Meals() {
  return (
    <section class={styles['section-meals']}>
      <div class='container center-text'>
        <span class='subheading'>Meals</span>
        <h2 class='heading-secondary'>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div class='container grid grid--3-cols margin-bottom-md'>
        <div class={styles['meal']}>
          <Image
            height={600}
            width={600}
            src='/img/meals/meal-1.jpg'
            class={styles['meal-img']}
            alt='Japanese Gyozas'
          />
          <div class={styles['meal-content']}>
            <div class={styles['meal-tags']}>
              <span class={`${styles.tag} ${styles['tag--vegetarian']}`}>
                Vegetarian
              </span>
            </div>
            <p class={styles['meal-title']}>Japanese Gyozas</p>
            <ul class={styles['meal-attributes']}>
              <li class={styles['meal-attribute']}>
                <IoFlameOutline class={styles['meal-icon']} />
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li class={styles['meal-attribute']}>
                <IoRestaurantOutline class={styles['meal-icon']} />
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li class={styles['meal-attribute']}>
                <IoStarOutline class={styles['meal-icon']} />
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class={styles['meal']}>
          <Image
            width={600}
            height={600}
            src='/img/meals/meal-2.jpg'
            class={styles['meal-img']}
            alt='Avocado Salad'
          />
          <div class={styles['meal-content']}>
            <div class={styles['meal-tags']}>
              <span class='tag tag--vegan'>Vegan</span>
              <span class='tag tag--paleo'>Paleo</span>
            </div>
            <p class={styles['meal-title']}>Avocado Salad</p>
            <ul class={styles['meal-attributes']}>
              <li class={styles['meal-attribute']}>
                <IoFlameOutline class={styles['meal-icon']} />
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li class={styles['meal-attribute']}>
                <IoRestaurantOutline class={styles['meal-icon']} />
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li class={styles['meal-attribute']}>
                <IoStarOutline
                  class={styles['meal-icon']}
                  name='star-outline'
                />
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class='diets'>
          <h3 class='heading-tertiary'>Works with any diet:</h3>
          <ul class='list'>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Vegetarian</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Vegan</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Pescatarian</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Gluten-free</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Lactose-free</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Keto</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Paleo</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Low FODMAP</span>
            </li>
            <li class='list-item'>
              <IoMdCheckmark class='list-icon' />
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div class={`container ${styles['all-recipes']}`}>
        <a href='#' class='link'>
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
