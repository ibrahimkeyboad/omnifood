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
    <section className={styles['section-meals']}>
      <div className='container center-text'>
        <span className='subheading'>Meals</span>
        <h2 className='heading-secondary'>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className='container grid grid--3-cols margin-bottom-md'>
        <div className={styles['meal']}>
          <Image
            height={600}
            width={600}
            src='/img/meals/meal-1.jpg'
            className={styles['meal-img']}
            alt='Japanese Gyozas'
          />
          <div className={styles['meal-content']}>
            <div className={styles['meal-tags']}>
              <span className={`${styles.tag} ${styles['tag--vegetarian']}`}>
                Vegetarian
              </span>
            </div>
            <p className={styles['meal-title']}>Japanese Gyozas</p>
            <ul className={styles['meal-attributes']}>
              <li className={styles['meal-attribute']}>
                <IoFlameOutline className={styles['meal-icon']} />
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className={styles['meal-attribute']}>
                <IoRestaurantOutline className={styles['meal-icon']} />
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className={styles['meal-attribute']}>
                <IoStarOutline className={styles['meal-icon']} />
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles['meal']}>
          <Image
            width={600}
            height={600}
            src='/img/meals/meal-2.jpg'
            className={styles['meal-img']}
            alt='Avocado Salad'
          />
          <div className={styles['meal-content']}>
            <div className={styles['meal-tags']}>
              <span className='tag tag--vegan'>Vegan</span>
              <span className='tag tag--paleo'>Paleo</span>
            </div>
            <p className={styles['meal-title']}>Avocado Salad</p>
            <ul className={styles['meal-attributes']}>
              <li className={styles['meal-attribute']}>
                <IoFlameOutline className={styles['meal-icon']} />
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li className={styles['meal-attribute']}>
                <IoRestaurantOutline className={styles['meal-icon']} />
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className={styles['meal-attribute']}>
                <IoStarOutline
                  className={styles['meal-icon']}
                  name='star-outline'
                />
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='diets'>
          <h3 className='heading-tertiary'>Works with any diet:</h3>
          <ul className='list'>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Vegetarian</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Vegan</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Pescatarian</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Gluten-free</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Lactose-free</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Keto</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Paleo</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Low FODMAP</span>
            </li>
            <li className='list-item'>
              <IoMdCheckmark className='list-icon' />
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles['all-recipes']}`}>
        <a href='#' className='link'>
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
