import React from 'react'
import Header from '../layout/Header'
import brand from '../../img/brand.png'
import enpowerment from '../../img/enpowerment.PNG'
import brandAward from '../../img/brandAward.PNG'
import resBrandAward from '../../img/resBrandAward.PNG'
import faucone from '../../img/faucone.PNG'
import Footer from '../layout/Footer'

const Services = () => {
  return (
    <>
      {/*1st section - nav bar */}
      <Header />

      {/*2nd section - faucone business */}
      <section className='lg:tw-flex tw-items-center tw-justify-center lg:tw-mx-16'>

        <img src={brand} alt="" className='tw-mt-8 lg:tw-order-1 md:tw-w-[40%]' />

        <div className=' tw-flex lg:tw-block tw-items-center tw-justify-center tw-flex-col lg:tw-w-[50%]'>
          <p className='tw-font-abel tw-text-[#2c9be6] tw-text-center lg:tw-text-left tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-5 tw-font-bold tw-mx-10'>MULTI-DIMENSIONAL <span className=' tw-text-gray-500 tw-font-normal lg:tw-block'>BRANDING <span className='lg:tw-block'>AND MARKETING</span></span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto lg:tw-mx-10'></p>
          <p className='tw-text-center lg:tw-text-left lg:tw-mx-5 tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 lg:tw-w-[80%]'>As a business owner or aspiring marketer, it is essential that you understand branding and marketing, conceptually and tactically, so you can do both effectively. Let's take a look at each in turn, and how they differ.</p>
        </div>

      </section>

      {/* 3rd section - our msg */}
      <section className='lg:tw-flex lg:tw-mx-40 lg:tw-gap-x-16'>
        
        <div className='  tw-flex tw-items-center  tw-justify-center lg:tw-justify-end lg:tw-items-end tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 lg:tw-my-0 tw-py-10 lg:tw-py-0'>

          <img src={brand} alt="" className=' tw-text-center tw-w-[80%] md:tw-w-[40%]' />
          <p className=' lg:tw-text-right tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  lg:tw-px-14'>WHAT IS <span className='tw-text-[#2c9be6] tw-font-bold'>BRANDING?</span></p>
          <p className=' tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-20'></p>
          <p className=' lg:tw-text-right tw-text-center  tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-14 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>Branding is who you are, the very identity and character of your business, while marketing is how you build brand awareness. Branding is your strategy, while marketing encompasses your tactical goals. In order to determine your brand identity, you need to ask yourself several questions. These questions go beyond industry cliches, and they are deeper than a mere description of your services or products Invest your time in giving detailed answers, and bounce them off your colleagues and professional mentors. What you will notice is that all of the questions are related to your internal operations and culture. What you build on the inside is what will emanate externally as your brand.</p>

        </div>

        <div className=' tw-flex tw-items-center tw-justify-center lg:tw-items-start tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 tw-py-10 '>
          <img src={brand} alt="" className='tw-w-[80%]  md:tw-w-[40%]' />
          <p className='tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  lg:tw-px-20'>WHAT IS <span className='tw-text-[#2c9be6] tw-font-bold'>MARKETING?</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-20'></p>
          <p className='tw-text-center lg:tw-text-left tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-20 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>Marketing is the methods, tools, and tactics your business uses to communicate your brand identity and message and to drive customer interest, engagement, and ultimately, sales. Marketing campaigns continually change and evolve based on a wide range of parameters, including consumer sentiment, the economy, competitors, and even seasonality. They are also targeted towards different segments Of your audience, all while supporting and reflecting the core values of your brand. Marketing is a vast umbrella, incorporating several tools, tactics, and vibes, depending on the audience and the moment. Marketing can be heartfelt, funny, or serious. It can be any mix of content, including text, keywords, images, videos, and memes.</p>
        </div>
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
      <section className=' tw-flex tw-items-center tw-justify-center tw-flex-col tw-mb-20'>
        <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>RECOGNISED SUCCESS ON <span className='tw-text-[#2c9be6] tw-font-bold'>SEVERAL CONTINENTS</span></p>
        <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
        <p className='tw-text-center tw-text-sm tw-font-semibold tw-px-20 tw-mt-10 tw-text-gray-500 md:tw-w-[60%] lg:tw-w-[80%]'>Our software helps companies of all sizes and industries to optimize their visibility across key channels and create engaging content for their users, and it's proved by recognition by our users as the best SEO software at a number of international awards.</p>
        <img src={resBrandAward} alt="" className='lg:tw-hidden tw-w-[75%] tw-mt-12' />
        <img src={brandAward} alt="" className='tw-mt-12 tw-hidden lg:tw-block' />
      </section>

      {/* 6th section - faucone */}
      <section className='tw-mt-72 tw-mb-40'>
        <img src={faucone} alt="" className='tw-w-[80%] lg:tw-w-[25%]  tw-mx-auto' />
        <p className='tw-text-[#49b0ff] tw-text-center tw-font-bold tw-text-lg tw-w-[70%] tw-mx-auto tw-mt-10 lg:tw-mt-5'>Book a Consultation to Revolutionize Your Operations!</p>
        <p className='tw-text-center tw-text-gray-500 tw-mx-5 tw-font-semibold tw-mt-5 tw-text-sm'>with our Infrastructure Management services</p>
        <button className='tw-bg-[#2c9be6] tw-text-white tw-block tw-mx-auto tw-mt-10 tw-font-bold tw-rounded-md tw-px-16 tw-py-3'>Contact Us</button>
      </section>

      {/* 7th section - Footer */}
      <Footer />




    </>
  )
}

export default Services