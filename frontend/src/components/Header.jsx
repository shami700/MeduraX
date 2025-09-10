import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-[#EAEFFF] via-[#c7dbff] to-[#a3c7ff] rounded-xl px-6 sm:px-12 lg:px-20 my-12 shadow-md'>

      {/* --------- Header Left --------- */}
      <div className='md:w-1/2 flex flex-col gap-6 py-12 md:py-[8vw] text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug'>
          Find the Right Doctor <br className="hidden sm:block"/> Anytime, Anywhere
        </h1>

        <p className='text-gray-700 text-sm sm:text-base font-light'>
          Get expert medical advice and book your appointments <br className='hidden sm:block' />
          instantly with our trusted healthcare professionals.
        </p>

        <div className='flex items-center justify-center md:justify-start gap-3'>
          <img className='w-24 sm:w-28' src={assets.group_profiles} alt="Doctors group" />
          <span className='text-gray-600 text-xs sm:text-sm'>
            Trusted by 50,000+ patients across multiple specialties
          </span>
        </div>

        <a
          href='#speciality'
          className='inline-flex items-center gap-2 bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-white text-sm sm:text-base font-medium mx-auto md:mx-0 hover:scale-105 hover:shadow-lg transition-all duration-300'
        >
          Book Appointment <img className='w-3' src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className='md:w-1/2 flex justify-center relative'>
        <img
          className='w-[90%] md:w-full lg:max-w-lg rounded-lg md:rounded-2xl'
          src={assets.header_img}
          alt="Doctor consultation"
        />
      </div>
    </section>
  )
}

export default Header
