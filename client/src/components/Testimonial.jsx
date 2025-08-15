import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

    const testimonials = [
        { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've rented cars from various companies, but this was by far the best experience!" },
        { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "CarRantal made my trip unforgettable. The car was in pristine condition and the service was top-notch." },
        { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm driving a brand new car." }
    ];


  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

        <Title title="What Our Customers Say" subTitle="Discover why discerning travelers choose StayCenture for their luxury accommodations around the world"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,index) => (
                    <motion.div
                    initial={{ opacity: 0,y:40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay:index *0.2, ease:"easeOut" }}
                    viewport={{once:true,amount:0.3}} 
                    
                    
                    key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon"/>                                
                                
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
