import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./cardpage.css";
import LikeOutline from "../../assets/images/Like_Outline.svg";
import LikeFilled from "../../assets/images/Like_Filled.svg";

const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "d5463767-a03a-4bce-aae0-bf9c42d7d708";

function CardPage() {
    const { id } = useParams();
    const [photoData, setPhotoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [nameError, setNameError] = useState(false);
    const [commentError, setCommentError] = useState(false);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(`${API_URL}/photos/${id}?api_key=${API_KEY}`);
                setPhotoData(response.data);
                setLiked(response.data.liked);
                setLoading(false);
            } catch (err) {
                setError("Photo not found");
                setLoading(false);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get(`${API_URL}/photos/${id}/comments?api_key=${API_KEY}`);
                setComments(response.data);
            } catch (err) {
                setError("Error fetching comments");
            }
        };

        fetchPhoto();
        fetchComments();
    }, [id]);

    const handleLikeClick = async () => {
        try {
            setLiked(!liked);
            setPhotoData((prevData) => ({
                ...prevData,
                likes: prevData.likes + (liked ? -1 : 1),
            }));
        } catch (err) {
            console.error("Error updating likes:", err);
            setError("Error updating likes");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setNameError(!name);
        setCommentError(!comment);

        if (!name || !comment) {
            return;
        }

        try {
            const response = await axios.post(
                `${API_URL}/photos/${id}/comments?api_key=${API_KEY}`,
                { name, comment },
                { headers: { "Content-Type": "application/json" } }
            );
            setComments([response.data, ...comments]);
            setName("");
            setComment("");
            setNameError(false);
            setCommentError(false);
        } catch (err) {
            setError("Error submitting comment");
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="card-page">
            <div className="card">
                <div className="image-container">
                    <img src={photoData.photo} alt="Photograph" className="card__image" />
                </div>

                <div className="card__tags">
                    {photoData.tags.map((tag, index) => (
                        <span key={index} className="card__tags__indi">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="card__bottom">
                    <p className="card__likes" onClick={handleLikeClick}>
                        <img
                            src={liked ? LikeFilled : LikeOutline}
                            alt="Like"
                            className="like-icon"
                        />
                        {photoData.likes} likes
                    </p>
                    <p className="card__names">Photo by {photoData.photographer}</p>
                    <p className="card__times">{new Date(photoData.timestamp).toLocaleDateString()}</p>
                </div>
            </div>

            <div className="commentsection">
                <form onSubmit={handleSubmit} className="comment-form">
                    <label className="title"> Name </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className={nameError ? "error" : ""}
                    />

                    <label className="title"> Comment </label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Enter your comment"
                        className={commentError ? "error" : ""}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>

                <h3>{comments.length} Comments</h3>
                {comments.map((c) => (
                    <div key={c.id} className="comments">
                        <p>
                            <strong>{c.name}</strong> - {new Date(c.timestamp).toLocaleDateString()}
                        </p>
                        <p>{c.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardPage;
