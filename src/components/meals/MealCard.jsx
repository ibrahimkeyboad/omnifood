import Image from 'next/image';

import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from 'react-icons/io5';

function MealCard({ styles }) {
  return (
    <>
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
    </>
  );
}

export default MealCard;
