import { FaStar, FaTrash, FaUserCircle } from "react-icons/fa";
import { deleteReview } from "../api/reviewService";

function ReviewList({ reviews, onReviewDeleted }) {

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this review?")) {
            return;
        }

        try {

            await deleteReview(id);

            alert("Review Deleted");

            if (onReviewDeleted) {
                onReviewDeleted();
            }

        } catch (error) {
            console.log(error);
            alert("Unable to delete review");
        }

    };

    return (

        <div className="mt-5">

            <h3 className="mb-4">
                Reviews ({reviews.length})
            </h3>

            {reviews.length === 0 && (

                <div className="alert alert-info">

                    No reviews yet.

                </div>

            )}

            {reviews.map(review => (

                <div
                    className="card shadow-sm mb-3"
                    key={review.id}
                >

                    <div className="card-body">

                        <div className="d-flex justify-content-between">

                            <div>

                                <h5>

                                    <FaUserCircle
                                        size={24}
                                        className="me-2 text-primary"
                                    />

                                    {review.reviewerName}

                                </h5>

                                <div className="mb-2">

                                    {[1,2,3,4,5].map(star => (

                                        <FaStar
                                            key={star}
                                            color={
                                                star <= review.rating
                                                    ? "gold"
                                                    : "#ddd"
                                            }
                                        />

                                    ))}

                                </div>

                            </div>

                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() =>
                                    handleDelete(review.id)
                                }
                            >
                                <FaTrash />
                            </button>

                        </div>

                        <p className="mt-3 mb-0">

                            {review.comment}

                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default ReviewList;