import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {
    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData, userId } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [availableDates, setAvailableDates] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)
    const [alreadyBooked, setAlreadyBooked] = useState(0)

    const navigate = useNavigate()

    // Fetch doctor info
    const fetchDocInfo = async () => {
        const doc = doctors.find((d) => d._id === docId)
        setDocInfo(doc)
    }

    // Get next 7 days
    const getAvailableDates = () => {
        let today = new Date()
        let next7days = []
        for (let i = 0; i < 7; i++) {
            let d = new Date()
            d.setDate(today.getDate() + i)
            next7days.push(d)
        }
        setAvailableDates(next7days)
    }

    // Handle date selection
    const handleDateSelect = (date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const slotDate = day + "_" + month + "_" + year

        setSelectedDate(slotDate)

        const count = docInfo.slots_booked[slotDate]
            ? docInfo.slots_booked[slotDate].filter(s => s.payment).length
            : 0

        setAlreadyBooked(count)
    }

    // Book appointment
    const bookAppointment = async () => {
        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        if (!selectedDate) {
            toast.warning("Please select a date")
            return
        }

        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/book-appointment',
                { docId, slotDate: selectedDate, userId },
                { headers: { token } }
            )

            if (data.success) {
                toast.success(data.message)
                getDoctosData()   // Refresh doctor slots
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableDates()
        }
    }, [docInfo])

    return docInfo ? (
        <div>
            {/* Doctor Details */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
                </div>
                <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>
                        {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>
                    <p className='text-gray-600 font-medium mt-4'>Appointment fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span> </p>
                </div>
            </div>

            {/* Booking Dates */}
            <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
                <p>Select Date</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {availableDates.map((date, index) => (
                        <div
                            key={index}
                            onClick={() => handleDateSelect(date)}
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                                selectedDate === (date.getDate() + "_" + (date.getMonth() + 1) + "_" + date.getFullYear())
                                    ? 'bg-primary text-white'
                                    : 'border border-[#DDDDDD]'
                            }`}
                        >
                            <p>{daysOfWeek[date.getDay()]}</p>
                            <p>{date.getDate()}</p>
                        </div>
                    ))}
                </div>

                {selectedDate && (
                    <p className="mt-4 text-gray-700">
                        {alreadyBooked} patients already booked.{" "}
                        {alreadyBooked < docInfo.maxPatientsPerDay
                            ? `Your number will be ${alreadyBooked + 1}`
                            : "No slots available"}
                    </p>
                )}

                <button
                    onClick={bookAppointment}
                    className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'
                >
                    Book an appointment
                </button>
            </div>

            {/* Related Doctors */}
            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
        </div>
    ) : null
}

export default Appointment
