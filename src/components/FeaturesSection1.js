import React from 'react';

import Image from '../assets/img/feature-1-img.png'

const FeaturesSection1 = () => {
  return( 
  <section className='pb-[30px] lg:pb-[120px] pt-0'>
    <div className='flex flex-col lg:flex-row'>
      <div className='max-w-[454px] mb-6 lg:mt-10'
      data-aos='fade-right'
      data-aos-offset='400'>
        <h3 className='h3 mb-6'>Invest Smart</h3>
        <p className='text-gray mb-8'>Get full statistic about the behavior of buyers 
          and sellers will help you to make the decicsion.</p>
          <button className='btn px-8 '>Learn more</button>
      </div>
      <div className='flex-1 justify-end'
      data-aos='fade-left'
      data-aos-offset='400'>
        <img src={Image} alt='' />
      </div>
    </div>
    </section>

  );
};

export default FeaturesSection1;
