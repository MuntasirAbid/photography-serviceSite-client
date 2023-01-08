import React from 'react';
import { Link } from "react-router-dom";

const Banner2 = () => {
    return (
        <div className="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="mb-12 lg:mb-0">
                        <img
                            src="https://s.studiobinder.com/wp-content/uploads/2021/02/Creative-Photography-Ideas-Techniques-To-Get-You-Inspired-StudioBinder.jpeg"
                            className="w-full rounded-lg shadow-lg"
                            alt=""
                        />
                    </div>
                    <div className="mt-12 lg:mt-0 text-right">
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">Experienced Photographer over more then <br /><span className="text-blue-600 text-3xl md:text-4xl xl:text-7xl">5 years!</span></h1>
                        <Link to='/services' className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Get started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;