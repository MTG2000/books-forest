import React from "react";
import "./BookCard.scss";
import { Link } from "react-router-dom";

const BookCard = ({ Title, Image, Id }) => {
  return (
    <Link to={`/book/${Id}`} className="mx-4">
      <div className="book-card" data-toggle="tooltip" title={Title}>
        <img src={Image} alt={Title} />
      </div>
    </Link>
  );
};

export default BookCard;
