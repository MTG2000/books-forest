import React from "react";
import Loading from "./Loading";
import useFetch from "../../utils/useFetch";
import ErrorPage from "./ErrorPage";

const BookPage = ({ match }) => {
  const id = match.params.id;

  const { loading, data: book, error } = useFetch(`/api/books/${id}`);

  if (error) {
    if (error.status === 401) window.location.pathname = "/login";
    else return <ErrorPage number={error.status} message={error.message} />;
  }
  if (loading) return <Loading />;

  return (
    <div className="container pt-5 row mx-auto justify-content-around">
      <div className="col-lg-4">
        <img
          src={book.Image}
          alt={book.Title}
          style={{ width: 300, height: 480 }}
          className="mx-auto d-block"
        />
      </div>
      <div className="col-lg-8 row flex-column justify-content-between">
        <div>
          <h1 className="text-white mt-4 ">{book.Title}</h1>
          <h4 className="text-white mt-2 ">
            <span className="h6">Author: </span> {book.Author}
          </h4>
          <h4 className="text-white mt-2 ">
            <span className="h6">Number Of Pages: </span> {book.NumberOfPages}{" "}
            Page
          </h4>
          <div className="mt-5"></div>
          {book.Tags.map((t, index) => (
            <span
              key={index}
              className="badge badge-primary mx-2"
              style={{ fontSize: 15 }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="py-3  d-flex">
          <button className="btn btn-lg btn-success">Get This Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
