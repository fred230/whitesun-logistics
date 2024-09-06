

import React from 'react'


const Brands = () => {
  return (
    <div className='w-full h-full flex justify-center bg-gray-800 p-20 items-center'>
       <div class="max-w-screen-md md:w-3/4 mx-auto">
    <div class="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-blue-800 rounded-xl">
      <p class="w-full text-2xl font-semibold text-white">Ready to Move Forward with Your Logistics Needs?</p>
      <p class="w-full  text-sm tracking-wide leading-tight text-white">At Whitesun Logistics, we are committed to providing exceptional logistics and supply chain solutions. Whether you need reliable freight transportation, secure storage, professional packing, or expert customs brokerage, we have the expertise to ensure your cargo reaches its destination safely and on time.</p>
      <p class="w-full pb-8 text-sm tracking-normal leading-tight text-white">
      Contact us today to discuss how we can tailor our services to meet your specific requirements. Experience the Whitesun difference with our dedicated team, advanced storage facilities, and top-quality packing materials.

      </p>
      <div class="rounded mr-auto">
        <div className='hover:text-blue-700 border-white hover:bg-white text-white border-2 py-1 px-5 rounded-sm cursor-pointer'>
        <p class="m-auto inset-0 text-sm font-medium leading-normal text-center  py-2">Call us now</p>
        </div>
         
        </div>
      </div>
    </div>
  </div>

    
  );
};

export default Brands;

