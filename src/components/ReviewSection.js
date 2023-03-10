import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../context/UserContext";
import AddReviewCard from "./AddReviewCard";
import LoginToReviewCard from "./LoginToReviewCard";
import ReviewSectionCard from "./ReviewSectionCard";

const ReviewSection = ({ serviceDetails }) => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const { _id } = serviceDetails;

    useEffect(() => {
        const url = `https://photographer-server-mu.vercel.app/review/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(fromDb => {
                setReviews(fromDb);
            });
    }, [_id]);

    return (
        <div className="my-10">
            <h2 className="text-center text-5xl mb-10">Latest Reviews</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-20 justify-items-center">
                {
                    user && <AddReviewCard serviceDetails={serviceDetails}></AddReviewCard>
                }
                {
                    !user && <LoginToReviewCard></LoginToReviewCard>
                }

                {
                    reviews.map((singleReview) => <ReviewSectionCard
                        key={singleReview._id}
                        singleReview={singleReview}
                    ></ReviewSectionCard>)
                }


            </div>
        </div >
    );
};

export default ReviewSection;