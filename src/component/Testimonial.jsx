import React, { useRef } from 'react';
import Heading from './Heading';
import Client from './Client';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Testimonial() {
  const client = [1, 2, 3, 4];
  let sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='lg:container mx-auto mb-16 px-4'>
      <Heading heading='Clients Testimonial' text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />

      <div className='relative px-4 w-fll'>

        <div className='slider-container'>
          <Slider ref={slider => {
            sliderRef = slider;
          }} {...settings}>
            {client.map((item, index) => (
              <Client key={index} />
            ))}
          </Slider>
        </div>
        <div className='absolute top-0 right-0 flex justify-center items-center space-x-2 '>
          <button
            className=' border-[.80px] border-[#076280] text-[#076280] hover:bg-[#076280] hover:text-white py-1 px-3 md:text-[42px] text-[25px] flex justify-center items-center'
            onClick={previous}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className=' border-[.80px] border-[#076280] text-[#076280] hover:bg-[#076280] hover:text-white py-1 px-3 md:text-[42px] text-[25px] flex justify-center items-center'
            onClick={next}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
