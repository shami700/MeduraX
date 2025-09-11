import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      {/* Heading */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About MeduraX" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to <span className='font-semibold text-gray-800'>MeduraX</span>, 
            your trusted digital partner for managing healthcare needs easily and efficiently. 
            At MeduraX, we understand the challenges of booking doctor appointments and staying 
            on top of health records in today’s busy world.
          </p>
          <p>
            MeduraX is dedicated to making healthcare more accessible through technology. 
            We continuously improve our platform to ensure seamless appointment booking, 
            secure data management, and a user-friendly experience. 
            Whether it’s your first consultation or ongoing care, MeduraX is with you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our vision is to build a connected healthcare ecosystem where patients and doctors 
            can interact effortlessly. We aim to bridge the gap between healthcare providers and patients, 
            ensuring timely access to quality care for everyone.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
                        hover:bg-primary hover:text-white transition-all duration-300 
                        text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling designed to save your valuable time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
                        hover:bg-primary hover:text-white transition-all duration-300 
                        text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Connect with trusted healthcare professionals anytime, anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
                        hover:bg-primary hover:text-white transition-all duration-300 
                        text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Get reminders, suggestions, and updates tailored to your health needs.</p>
        </div>
      </div>

    </div>
  )
}

export default About
