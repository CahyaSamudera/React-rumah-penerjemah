import React from 'react';
import './Car.css';
import Car3 from '../../Images/car.png';
import Wheel from '../../Images/wheel.png';

const Car = () => {
  return (
    <div className='car-section' id='car'>
      <div className='highway'></div>
      <div className='city'></div>
      <div className='car'>
        <img src={Car3} alt='' />
      </div>
      <div className='wheel'>
        <img src={Wheel} alt='' className='back-wheel' />
        <img src={Wheel} alt='' className='front-wheel' />
      </div>
    </div>
  );
};

export default Car;
