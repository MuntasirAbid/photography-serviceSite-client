import React, { useContext } from 'react';
import { toast } from "react-toastify";
import { AuthContext } from "../context/UserContext";

const AddReviewCard = ({ serviceDetails }) => {

    const { user } = useContext(AuthContext);
    const { _id } = serviceDetails;

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;



        const newReview = {
            serviceId: _id,
            serviceName: serviceDetails.service,
            reviewerName: user.displayName,
            revieweremail: user.email,
            reviewerImg: user.photoURL,
            reviewText
        };




        fetch('https://photographer-server-mu.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(fromDb => {
                if (fromDb.acknowledged) {
                    toast.success('Review Added Successfully');
                    form.reset();
                }
            })
            .catch(err => {
                console.error(err);
                toast.error('Review Added failed');

            });

    };

    return (
        <form onSubmit={handleAddReview} className="w-full mb-12 md:mb-0 max-w-md shadow-lg p-5 flex flex-col justify-between ">
            <h3 className="text-center text-2xl mb-3">Add your review</h3>
            <textarea
                className="form-control block w-full px-3  py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="reviewText"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Your message"
            ></textarea>
            <button type="submit" className="py-3 justify-self-end mb-2 w-full inline-block px-6 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Post</button>
        </form>
    );
};

export default AddReviewCard;