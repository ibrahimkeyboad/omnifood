import React from 'react';

import styles from '@/styles/meals.module.scss';
import Image from 'next/image';

import MealDiets from './MealDiets';
import MealCard from './MealCard';

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
        <MealCard styles={styles} />

        <MealDiets />
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
