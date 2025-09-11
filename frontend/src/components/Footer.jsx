import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo + Description */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="MeduraX Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            MeduraX is your trusted platform for booking doctor appointments and managing healthcare needs easily. 
            We aim to connect patients with the right doctors in the simplest way possible.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>📞 +91 9122855831</li>
            <li>📧 shamiarzoo2@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2025 © MeduraX.com - All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
