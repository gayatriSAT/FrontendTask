import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sophie D.",
    title: "Customer Service Manager",
    message:
      "Thank you for the fantastic customer service. We are very happy with your service and will definitely come back.",
  },
  {
    name: "John K.",
    title: "CEO",
    message:
      "As a small business, we needed something that could give us a voice. We’re very pleased with your knowledge, support, and an affordable price.",
  },
  {
    name: "Sophie M.",
    title: "Customer Experience Lead",
    message:
      "Talent’s ability to support multiple languages helped us reach a wider demographic. It’s rare to find support this responsive in multiple languages, and we really value it.",
  },
  {
    name: "Emily R.",
    title: "Marketing Director",
    message:
      "The creativity and speed of execution were outstanding. You delivered exactly what we needed.",
  },
  {
    name: "Liam T.",
    title: "Product Manager",
    message:
      "Very impressed by the support team. They were there whenever we needed help during integration.",
  },
  {
    name: "Nina B.",
    title: "HR Specialist",
    message:
      "Great experience working with you. The results speak for themselves and exceeded expectations.",
  },
];

const TestimonialCard = ({ name, title, message }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 h-full">
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-gray-700 text-base">{message}</p>
    </div>
  );
};

const EchoesOfExcellence = () => {
  const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 6) {
    chunkedTestimonials.push(testimonials.slice(i, i + 6));
  }

  return (
    <section className="py-12 px-40">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-10">
          Echoes of <span className="text-dark-pink">Excellence</span>
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full"
        >
          {chunkedTestimonials.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.map((item, i) => (
                  <TestimonialCard
                    key={i}
                    name={item.name}
                    title={item.title}
                    message={item.message}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EchoesOfExcellence;
export { TestimonialCard };