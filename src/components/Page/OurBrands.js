import React from 'react'
import Header from '../layout/Header'
import brand from '../../img/brand.png'
import enpowerment from '../../img/enpowerment.PNG'

import faucone from '../../img/faucone.PNG'
import Footer from '../layout/Footer'
import Award from '../layout/Award'

const OurBrands = () => {

  return (
    <>
      {/*1st section - nav bar */}
      <Header />

      {/*2nd section - faucone business */}
      <section className='lg:tw-flex tw-items-center tw-justify-center lg:tw-mx-16'>

        <img src={brand} alt="" className='tw-mt-8 lg:tw-order-1 md:tw-w-[40%]' />

        <div className=' tw-flex lg:tw-block tw-items-center tw-justify-center tw-flex-col lg:tw-w-[50%]'>
          <p className='tw-font-abel tw-text-[#2c9be6] tw-text-center lg:tw-text-left tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-5 tw-font-bold tw-mx-10'>FAUCONE <span className=' tw-text-gray-500 tw-font-normal lg:tw-block'>BUSINESS <span className='lg:tw-block'>SERVICE</span></span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto lg:tw-mx-10'></p>
          <p className='tw-text-center lg:tw-text-left lg:tw-mx-5 tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 lg:tw-w-[80%]'>Business service that can meet all the needs of business consulting service. Our business services are carefully designed to perfectly meet the needs of each business and brand.</p>

        </div>

      </section>

      {/* 3rd section - our msg */}
      <section className=' tw-flex tw-items-center tw-justify-center lg:tw-items-start tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 tw-py-10 lg:tw-w-[70%] lg:tw-mx-auto'>
        <p className='tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  lg:tw-px-20'>OUR <span className='tw-text-[#2c9be6] tw-font-bold'>MESSAGE</span></p>
        <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-20'></p>
        <p className='tw-text-center lg:tw-text-left tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-20 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi songs architecto beatae could vitae dicta sunt explicabo. Nemo change enim ipsam voluptatem.</p>
      </section>

      {/* 4th section - leading the way */}
      <section className='tw-py-16 tw-bg-blue-50 tw-mt-24 tw-pr-2'>

        <div className=' tw-flex tw-justify-center tw-items-center tw-flex-col '>
          <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>LEADING <span className='tw-text-[#2c9be6] tw-font-bold'>THE WAY</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-6'></p>

        </div>

        <main className='tw-grid  lg:tw-grid-cols-3 tw-pl-2 tw-gap-y-14 lg:tw-gap-y-0 lg:tw-gap-x-16 tw-mt-10 tw-mx-auto lg:tw-mx-20 lg:tw-pb-14'>
          <div className=''>
            <img src={enpowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>Business Consulting</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturicupiditate provident</p>

          </div>

          <div className=''>
            <img src={enpowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>Branding & Marketing Strategy</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturicupiditate provident</p>
          </div>

          <div className=''>
            <img src={enpowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>Movie Analysis</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturicupiditate provident</p>
          </div>

        </main>

      </section>

      {/* 5th section - award */}
      <Award/>

      {/* 6th section - faucone */}
      <section className='tw-mt-72 tw-mb-40'>
        <img src={faucone} alt="" className='tw-w-[80%] lg:tw-w-[25%]  tw-mx-auto' />
        <p className='tw-text-[#49b0ff] tw-text-center tw-font-bold tw-text-lg tw-w-[70%] tw-mx-auto tw-mt-10 lg:tw-mt-5'>Book a Consultation to Revolutionize Your Operations!</p>
        <p className='tw-text-center tw-text-gray-500 tw-mx-5 tw-font-semibold tw-mt-5 tw-text-sm'>with our Infrastructure Management services</p>
        <button className='tw-bg-[#2c9be6] tw-text-white tw-block tw-mx-auto tw-mt-10 tw-font-bold tw-rounded-md tw-px-16 tw-py-3'>Contact Us</button>
      </section>

      {/* 7th section - Footer */}
      <Footer/>




    </>
  )
}

export default OurBrands