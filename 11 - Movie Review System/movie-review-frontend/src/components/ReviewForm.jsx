import { useState } from "react";
import { addReview } from "../api/reviewService";

function ReviewForm({ movieId, onReviewAdded }) {

    const [review, setReview] = useState({
        reviewerName: "",
        rating: 5,
        comment: ""
    });

    const handleChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await addReview(movieId, review);

            alert("Review Added Successfully!");

            setReview({
                reviewerName: "",
                rating: 5,
                comment: ""
            });

            if (onReviewAdded) {
                onReviewAdded();
            }

        } catch (error) {
            console.error(error);
            alert("Failed to add review");
        }
    };

    return (
        <div className="card shadow mt-4">

            <div className="card-body">

                <h4 className="mb-4">Add Review</h4>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">
                            Reviewer Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="reviewerName"
                            placeholder="Enter your name"
                            value={review.reviewerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Rating
                        </label>

                        <select
                            className="form-select"
                            name="rating"
                            value={review.rating}
                            onChange={handleChange}
                        >
                            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                            <option value="4">⭐⭐⭐⭐ (4)</option>
                            <option value="3">⭐⭐⭐ (3)</option>
                            <option value="2">⭐⭐ (2)</option>
                            <option value="1">⭐ (1)</option>
                        </select>

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Comment
                        </label>

                        <textarea
                            className="form-control"
                            name="comment"
                            rows="4"
                            placeholder="Write your review..."
                            value={review.comment}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="d-grid">

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit Review
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default ReviewForm;