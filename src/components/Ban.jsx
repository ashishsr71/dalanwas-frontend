import React from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// Sample Banner Data (replace with your actual data)


const Ban = ({bannerData}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides the default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-1 rounded-full z-10 text-black'>
      <FaAngleRight />
    </button>
  );

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-1 rounded-full z-10 text-black'>
      <FaAngleLeft />
    </button>
  );

  return (
    <section className='w-full h-full'>
      {/* Loader can be added here if needed */}
      <div className='flex min-h-full max-h-[90vh] overflow-hidden relative'>
        <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
          {bannerData.map((data, index) => (
            <div
              key={ 'bannerHome' + index}
              className='relative group transition-transform'>
              <div className='relative h-full'>
                <img
                  src={data.imgUrl}
                  alt={data.title}
                  className='w-full h-full object-cover'
                  style={{ objectPosition: 'top' }}
                />
                <div className='absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-neutral-900 to-transparent'></div>
              </div>

              {/* Text Content */}
              <div className='container mx-auto'>
                <div className='absolute bottom-0 max-w-md px-3'>
                  <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>
                    {/* {data.title} */}
                  </h2>
                  <div className='flex items-center gap-4'>
                    <p className='text-white'>Rating: </p>
                    <span>|</span>
                    <p className='text-white'>View: </p>
                  </div>
                  <Link to='/gallery'>
                    <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Ban;
