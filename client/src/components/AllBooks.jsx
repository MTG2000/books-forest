import React from "react";
import BookCard from "./BookCard";
import Loading from "./layouts/Loading";
import useFetch from "../utils/useFetch";
import ErrorPage from "./layouts/ErrorPage";

const AllBooks = () => {
  const { loading, data: books, error } = useFetch("/api/books");

  if (error) return <ErrorPage number={error.status} message={error.message} />;

  if (loading) return <Loading />;
  return (
    <div className="row">
      {books.map((b, index) => (
        <BookCard key={b.Id} Id={b.Id} Title={b.Title} Image={b.Image} />
      ))}
    </div>
  );
};

export default AllBooks;
