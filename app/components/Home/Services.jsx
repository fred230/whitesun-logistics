"use client"
import Head from "next/head";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
    return (
        <div>
           <div className="max-w-[85rem]   mx-auto py-16 bg-whitepx-4 sm:px-6 lg:px-16">
                        {/*component */} {/* */}
              <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

              {/*====== Cards Section Start */}
             
              <section class="pt-10  pb-10 lg:pb-20 bg-[#F3F4F6]">
              <div className="lg:text-4xl md:text-3xl text-2xl font-black pt-4 pb-6 leading-10 text-center text-gray-800 dark:text-white">
            <h1>Services we offer</h1>
          </div>
              
                <div class="container">
            
                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full md:w-1/3 xl:w-1/4 px-4">
                          <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="image"
                                class="w-full"
                                />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                  <a
                                      href="javascript:void(0)"
                                      class="
                                      font-semibold
                                      text-dark text-xl
                                      sm:text-[22px]
                                      md:text-xl
                                      lg:text-[22px]
                                      xl:text-xl
                                      2xl:text-[22px]
                                      mb-4
                                      block
                                      hover:text-primary
                                      "
                                      >
                                  Freight Transportation Arrangement:
                                  </a>
                                </h3>
                                <p class="text-base text-body-color leading-relaxed mb-7">
                                Including domestic and international freight forwarding, shipping brokerage, and the transportation of goods such as building materials (stones, sand, clay, bricks, concrete, steel bars, plastics, granites, and timber).
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  class="
                                  inline-block
                                  py-2
                                  px-7
                                  border border-[#E5E7EB]
                                  rounded-full
                                  text-base text-body-color
                                  font-medium
                                  hover:border-primary hover:bg-primary hover:text-white
                                  transition
                                  "
                                  >
                                View Details
                                </a>
                            </div>
                          </div>
                      </div>
                      <div class="w-full md:w-1/3 xl:w-1/4 px-4">
                          <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://images.pexels.com/photos/248837/pexels-photo-248837.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="image"
                                class="w-full"
                                />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                  <a
                                      href="javascript:void(0)"
                                      class="
                                      font-semibold
                                      text-dark text-xl
                                      sm:text-[22px]
                                      md:text-xl
                                      lg:text-[22px]
                                      xl:text-xl
                                      2xl:text-[22px]
                                      mb-4
                                      block
                                      hover:text-primary
                                      "
                                      >
                                  Warehousing and Storage Solutions:
                                  </a>
                                </h3>
                                <p class="text-base text-body-color leading-relaxed mb-7">
                                Offering short-term and long-term storage solutions, advanced storage methods, bonded storage, and specialized storage for industrial machinery, valuable artwork, and sensitive electronic items.
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  class="
                                  inline-block
                                  py-2
                                  px-7
                                  border border-[#E5E7EB]
                                  rounded-full
                                  text-base text-body-color
                                  font-medium
                                  hover:border-primary hover:bg-primary hover:text-white
                                  transition
                                  "
                                  >
                                View Details
                                </a>
                            </div>
                          </div>
                      </div>
                      <div class="w-full md:w-1/3 xl:w-1/4 px-4">
                          <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="image"
                                class="w-full"
                                />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                  <a
                                      href="javascript:void(0)"
                                      class="
                                      font-semibold
                                      text-dark text-xl
                                      sm:text-[22px]
                                      md:text-xl
                                      lg:text-[22px]
                                      xl:text-xl
                                      2xl:text-[22px]
                                      mb-4
                                      block
                                      hover:text-primary
                                      "
                                      >
                                  Customs Brokerage and Documentation:
                                  </a>
                                </h3>
                                <p class="text-base text-body-color leading-relaxed mb-7">
                                Handling customs documentation and processing, ensuring compliance with regulations, and facilitating the smooth clearance of goods through customs.
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  class="
                                  inline-block
                                  py-2
                                  px-7
                                  border border-[#E5E7EB]
                                  rounded-full
                                  text-base text-body-color
                                  font-medium
                                  hover:border-primary hover:bg-primary hover:text-white
                                  transition
                                  "
                                  >
                                View Details
                                </a>
                            </div>
                          </div>
                      </div>
                      <div class="w-full md:w-1/3 xl:w-1/4 px-4">
                          <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://images.pexels.com/photos/1793349/pexels-photo-1793349.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="image"
                                class="w-full"
                                />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                  <a
                                      href="javascript:void(0)"
                                      class="
                                      font-semibold
                                      text-dark text-xl
                                      sm:text-[22px]
                                      md:text-xl
                                      lg:text-[22px]
                                      xl:text-xl
                                      2xl:text-[22px]
                                      mb-4
                                      block
                                      hover:text-primary
                                      "
                                      >
                                  Packing and Crating Services:
                                  </a>
                                </h3>
                                <p class="text-base text-body-color leading-relaxed mb-7">
                                Providing professional packing materials and services, shockproof packaging, and custom-built wooden crates for the secure transportation and storage of delicate and high-value items.
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  class="
                                  inline-block
                                  py-2
                                  px-7
                                  border border-[#E5E7EB]
                                  rounded-full
                                  text-base text-body-color
                                  font-medium
                                  hover:border-primary hover:bg-primary hover:text-white
                                  transition
                                  "
                                  >
                                View Details
                                </a>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </section>
              {/*====== Cards Section End */}
          
           </div>
          
            <div class="max-w-[85rem]   mx-auto py-16 bg-white px-10 sm:px-6 lg:px-16">
            {/* Grid */}
            <div class="grid md:grid-cols-2 w-full gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div className="w-full">
                
                <h1 className="text-2xl md:text-4xl font-bold  ">Whitesun Logistics: Moving, shipping, and storing your world, seamlessly.</h1>
                
                <p class="mt-3 text-md lg:text-lg  text-gray-800 dark:text-neutral-400">Whitesun Logistics goes beyond just supplying building materials. They are a comprehensive logistics and storage solution provider. Their services include packing, crating, and storing your goods, freight forwarding and transportation (both locally and internationally), and secure warehousing with advanced storage methods for short-term or long-term needs. Essentially, they can handle all your moving, shipping, and storage requirements, ensuring your belongings arrive safe and secure.</p>

                {/* Buttons */}
                <div class="mt-7 flex gap-3 w-5/6  sm:inline-flex">
                    <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Get started
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    
                </div>
                {/* End Buttons */}

                
                </div>
                {/* End Col */}

                <div class="relative flex items-center justify-center ms-4">
                <img class="lg:w-2/3 lg:block hidden lg:h-1/3 w-full rounded-md " src="https://images.unsplash.com/photo-1576423596782-8c5478efd11f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="Image Description"/>
                <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

                {/* SVG*/}
                <div class="absolute bottom-0 hidden md:block  start-0">
                    <svg class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
                    <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
                    <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
                    <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
                    <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
                    <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
                    <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
                    <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
                    <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
                    <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
                    <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
                    <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
                    <rect x="581" width="49" height="49" fill="currentColor"/>
                    <rect x="581" width="49" height="64" fill="currentColor"/>
                    <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
                    <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
                    <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
                    </svg>
                </div>
                {/* End SVG*/}
                </div>
                {/* End Col */}
            </div>
            {/* End Grid */}
            </div>
 
        </div>
    );
}
