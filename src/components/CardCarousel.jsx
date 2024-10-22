import React from "react";
import Slider from "react-slick";

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on larger screens
    slidesToScroll: 1,
    autoplay: true,  // Enable automatic sliding
    autoplaySpeed: 3000,  // Slide every 3 seconds
    pauseOnHover: true,  // Pause on hover
    responsive: [
      {
        breakpoint: 1024, // For smaller screens
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const cards = [
    { title: "Card 1", text: "Lorem ipsum dolor sit amet." },
    { title: "Card 2", text: "Consectetur adipiscing elit." },
    { title: "Card 3", text: "Nunc commodo posuere." },
    { title: "Card 4", text: "Aliquam at ipsum eu nunc." },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 mb-7">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.text}</p>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg">
                Action
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
