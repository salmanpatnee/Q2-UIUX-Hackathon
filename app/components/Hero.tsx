import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] lg:pt-20 py-10 bg-cover bg-fixed bg-no-repeat lg:h-[600px]">
        <div className="wrapper">
            <div className='grid lg:grid-cols-2'>
                <div></div>
                <div className='rounded bg-[#FFF3E3] pt-16 pb-9 px-10'>
                  <span className='font-semibold mb-1 text-text text-base tracking-[3px]'>New Arrival</span>
                  <h1 className='text-primary font-bold md:text-[52px] text-3xl  sm:leading-[65px] mb-4'>Discover Our <br></br>New Collection</h1>
                  <p className='font-medium text-lg text-text mb-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  <Link className='bg-primary text-white text-center py-6 text-base font-bold px-16 inline-block w-auto hover:bg-black transition-all' href="/">
                  BUY NOW
                  </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
