import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

function PricePlan({ styles }) {
  return (
    <>
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
    </>
  );
}

export default PricePlan;
