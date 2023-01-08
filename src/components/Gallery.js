import React from 'react';

const Gallery = () => {
    return (
        <div className="container mx-auto ">
            <h3 className="text-5xl font-bold text-center my-10">Gallery</h3>
            <div className="grid grid-cols-3 gap-5">

                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://webneel.com/daily/sites/default/files/images/daily/02-2013/10-best-wildlife-photography.jpg"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1586734073732-fd664fbd85c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYXRpdmUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        className="w-full object-fit aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=612x612&w=0&k=20&c=o5XHlEhG_IkXq3i1_zwW4E_0hi5fulOBogSPyIy2uZA="
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://media.istockphoto.com/id/547493466/pl/zdj%C4%99cie/sprz%C4%99t-fotografa-podr%C3%B3%C5%BCnego-z-pi%C4%99knym-krajobrazem.jpg?s=612x612&w=0&k=20&c=q-fnYufOuLy7qjBmuB25oneH01krtAT9DZurTf8mKJw="
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://i.pinimg.com/originals/65/b7/43/65b743cb3fcf0e32690826bfefc6a63c.jpg"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/09/photo-effects-1.jpg"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>

            </div>
        </div>
    );
};

export default Gallery;