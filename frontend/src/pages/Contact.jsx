import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      {/* Heading */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact MeduraX" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Office Info */}
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>
            MeduraX Headquarters <br />
            Koderma, Jharkhand, India <br />
            Pincode: 825410
          </p>
          <p className='text-gray-500'>
            📞 Tel: +91 9122855831 <br />
            📧 Email: shamiarzoo2@gmail.com
          </p>

          {/* Careers */}
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT MEDURAX</p>
          <p className='text-gray-500'>
            We’re always looking for passionate people to join our team.  
            Explore opportunities to grow with us.
          </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
