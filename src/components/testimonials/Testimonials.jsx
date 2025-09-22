import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/av1.jpg';
import AVTR2 from '../../assets/av2.jpeg';
import AVTR3 from '../../assets/av3.png';
import AVTR4 from '../../assets/av4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam ab nemo obcaecati sed. Voluptatum ratione facere fuga! Fugit mollitia necessitatibus quo! At molestias dolorem aliquam debitis itaque neque magni eligendi unde, aut autem! Minima officia sed nobis cupiditate enim a possimus voluptate laboriosam, officiis explicabo, doloremque repellat velit beatae."
  },
  {
    avatar: AVTR2,
    name: "Mark Thomas",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, doloremque beatae. Asperiores eos corrupti laudantium maiores, molestias ea fugiat accusantium deleniti velit ratione, alias aliquid! Officiis non harum laboriosam voluptate."
  },
  {
    avatar: AVTR3,
    name: "Sara Lee",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet officiis ullam fugit molestias, rerum nemo molestiae! Cumque praesentium modi quod eveniet voluptates officia, recusandae consequatur quam possimus libero ullam expedita."
  },
  {
    avatar: AVTR4,
    name: "John Doe",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dicta laborum ipsam pariatur ea! Eveniet exercitationem mollitia placeat ipsum recusandae culpa distinctio nostrum totam eius quia velit, illum fuga veniam."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"

        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={`${name}'s avatar`} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
