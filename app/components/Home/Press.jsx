import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ai from '@/public/images/ai.jpg'
import Clothing from '@/public/images/clothing.jpg'
import Electronics from '@/public/images/electro.jpg'
import Hotels from '@/public/images/hotels.jpg'

const Press = () => {
  return (
    <div className='items-center justify-center flex flex-col pb-5 bg-gray-200'>
      <div className='w-full  md:w-11/12 2xl:mx-auto flex flex-col md:py-12 lg:px-16 md:px-6 py-9 px-4'>
      <h2 className="  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 pb-4 lg:pb-10 leading-9 text-gray-800">What's in our Blog</h2>
      <article className="flex mt-4 bg-gray-100 hover:bg-white transition rounded-sm hover:shadow-xl w-full lg:w-5/6">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>May 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src="https://images.pexels.com/photos/4242158/pexels-photo-4242158.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                Whitesun Logistics Expands Storage Facilities to Meet Growing Demand
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              Whitesun Logistics Ltd is proud to announce the expansion of our state-of-the-art storage facilities in Nairobi, Kenya. This expansion is a response to the increasing demand for secure and efficient storage solutions in the region. Our new facilities are equipped with advanced security systems, climate control, and cutting-edge inventory management technology to ensure the safety and integrity of your goods. With our enhanced capacity, we continue to offer unparalleled service to our clients, reinforcing our commitment to excellence in logistics and supply chain management...
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </a>
            </div>
          </div>
      </article>
      <article className="flex mt-4 bg-gray-100 hover:bg-white transition hover:shadow-xl w-full lg:w-5/6">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src="https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                Innovative Packing Solutions by Whitesun Logistics Set Industry Standard
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              Whitesun Logistics Ltd is setting a new industry standard with our innovative packing solutions. Our team of skilled packing specialists employs the highest quality materials and techniques to ensure the safe transport of your valuable goods. From shockproof packaging for delicate items to custom-built crates for specialized equipment, we handle every item with the utmost care. By investing in top-tier packing materials and expertise, Whitesun Logistics ensures that your cargo arrives in perfect condition, reflecting our dedication to providing the best logistics services in East Africa...
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </a>
            </div>
          </div>
      </article>
      </div>
    </div>
  )
}

export default Press



