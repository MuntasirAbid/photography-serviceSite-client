import React from 'react';

import SliderComponent from './Carousel';
const About = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 mt-12'>
            <section>
                <h1 className='text-7xl mt-12'>Welcome to my website!!</h1>
                <h1 className='mt-5 text-3xl'>I am a full-time professional photographer.</h1>
                <p className='text-xl'>I have experience with photography in many fields. Photography is my passion. </p>
            </section>
            <section>
                <SliderComponent></SliderComponent>
            </section>
        </div>
    );
};

export default About;