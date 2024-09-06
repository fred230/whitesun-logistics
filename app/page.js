import React from "react";
import Hero from "./components/Home/Hero";
import PreHero from "./components/Home/PreHero";
import Services from "./components/Home/Services";
import Press from "./components/Home/Press";
import Brands from './components/Home/Brands'
import Customer from "./components/Home/Customer";
import 'remixicon/fonts/remixicon.css'
import About from './components/Home/About'
import FAQ from "./components/Home/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-shrink-0 flex-col   ">
      <div className='flex-grow items-center justify-center'>
        <PreHero/>
      <Hero/>
      <About/>
     
        <div className="pt-16 flex items-center justify-center  w-full min-h-screen " >
          <Services />

        </div>
        <div className="pt-16  flex flex-grow  pb-16">
          <Brands/>
        </div>
        <div className="w-full  justify-center items-center flex flex-col">
          <Customer/>
        </div>

        <div className="mt-16 mb-16 flex bg-white w-full">
        <Press/>

        </div>
        
        <div className="mt-16 flex items-center justify-center ">
        <FAQ/>

        </div>


    </div>
         
    </main>
  );
}
