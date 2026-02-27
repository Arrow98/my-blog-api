import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Components/AppContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import BASE_URL from "../../config";
import "./CommentSection.css";

export function CommentSection({ postId }) {
  const { user } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    const token = localStorage.getItem("techblog_token");
    if (!token) return;

    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        const commentsData = data.data || data.comments || (Array.isArray(data) ? data : []);
        setComments(commentsData);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setIsSubmitting(true);
    const token = localStorage.getItem("techblog_token");

    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text: commentText,
          author: `${user.firstname} ${user.lastname}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Comment added!");
        setCommentText("");
        fetchComments(); // Refresh comments list
      } else {
        toast.error(data.message || "Failed to add comment");
      }
    } catch (err) {
      console.error("Error adding comment:", err);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="comment-section-wrapper">
      <h3>Comments ({comments.length})</h3>

      {user ? (
        <form onSubmit={handleCommentSubmit} className="add-comment-box">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            required
          ></textarea>
          <button 
            type="submit" 
            className="comment-submit-btn"
            disabled={isSubmitting || !commentText.trim()}
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
          </button>
        </form>
      ) : (
        <div className="signin-prompt">
          Please <Link to="/signin">sign in</Link> to join the conversation.
        </div>
      )}

      <div className="comment-list">
        <AnimatePresence>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <motion.div 
                key={comment._id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="comment-item"
              >
                <div className="comment-avatar">
                  {comment.author ? comment.author.charAt(0).toUpperCase() : "?"}
                </div>
                <div className="comment-content-box">
                  <div className="comment-header">
                    <span className="comment-author-name">{comment.author}</span>
                    <span className="comment-date">
                      {new Date(comment.createdAt || Date.now()).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
