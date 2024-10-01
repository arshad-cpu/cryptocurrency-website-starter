import React from "react";

import Image from "../assets/img/feature-3-img.png";

const FeaturesSection3 = () => {
  return (
    <section className='pb-[30px] lg:pb-[120px] pt-0'>
    <div className='flex flex-col lg:flex-row'>
      <div className='max-w-[454px] mb-6 lg:mt-10'
      data-aos='fade-right'
      data-aos-offset='400'>
        <h3 className='h3 mb-6'>Grow your profit and track your invetsmets</h3>
        <p className='text-gray mb-8 max-w-[408px]'>Use advanced analytical tools.
          Clear TradingView charts let you track current and historical 
          profit investments.
        </p>
          <button className='btn px-8 '>Learn more</button>
      </div>
      <div className='flex-1 justify-end'
      data-aos='fade-left'
      data-aos-offset='450'>
        <img src={Image} alt='' />
      </div>
    </div>
    </section>
  );
};

export default FeaturesSection3;
