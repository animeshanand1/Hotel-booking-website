import React, { useEffect, useState } from "react";
import styles from "./ReviewForm.module.css";

const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 500;

const ReviewForm = ({ initialValue, onSubmit, onCancel, isEditing }) => {
  const [rating, setRating] = useState(initialValue?.rating ?? 9);
  const [comment, setComment] = useState(initialValue?.comment ?? "");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setRating(initialValue?.rating ?? 9);
    setComment(initialValue?.comment ?? "");
    setTouched(false);
  }, [initialValue?.rating, initialValue?.comment]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);

    const trimmedComment = comment.trim();
    if (trimmedComment.length < MIN_COMMENT_LENGTH) {
      return;
    }

    onSubmit({
      rating: Number(rating),
      comment: trimmedComment,
    });
  };

  const handleCancel = () => {
    setTouched(false);
    onCancel();
  };

  const characterCount = comment.trim().length;
  const isValid = characterCount >= MIN_COMMENT_LENGTH;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h3>{isEditing ? "Edit your review" : "Write a review"}</h3>
        <p>
          {isEditing
            ? "Update your thoughts about this stay to keep them fresh."
            : "Share details about your stay to help other travellers decide."}
        </p>
      </div>

      <div className={styles.field}>
        <label htmlFor="review-rating">Rating</label>
        <div className={styles.sliderRow}>
          <input
            id="review-rating"
            type="range"
            min="1"
            max="10"
            step="1"
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <span className={styles.score}>{rating}/10</span>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="review-comment">Tell us about your stay</label>
        <textarea
          id="review-comment"
          name="review-comment"
          rows={5}
          maxLength={MAX_COMMENT_LENGTH}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="What did you love and what could be better?"
          required
        />
        <div className={styles.helper}>
          <span>
            {characterCount} / {MAX_COMMENT_LENGTH}
          </span>
          <span className={touched && !isValid ? styles.error : undefined}>
            {touched && !isValid
              ? `Please add at least ${MIN_COMMENT_LENGTH} characters.`
              : "Minimum 20 characters."}
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.cancel} onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit} disabled={!isValid}>
          {isEditing ? "Update review" : "Post review"}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
