import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

function MealDiets() {
  return (
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
  );
}

export default MealDiets;
