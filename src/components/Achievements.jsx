import React from 'react';
import { achievementsData } from '../data/dummy';

function Achievements() {
  return (
    <div className='grid grid-cols-2 w-[50%] m-20 text-center'>
      {achievementsData.map((achievement, index) => (
        <div key={index} className={`m-8 ${index < 2 ? 'border-b-2 pb-8' : ''} border-black `}>
          <p className='text-xl font-bold'>{achievement.title} <span>+</span></p>
          <p>{achievement.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
