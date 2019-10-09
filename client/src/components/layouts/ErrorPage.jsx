import React from "react";

const ErrorPage = ({ number, message }) => {
  return (
    <div className="container pt-5">
      <h1 className="text-center text-white mt-5">
        Error <span className="text-danger">{number}</span> :(
      </h1>
      <h5 className=" text-center text-white mt-5">{message}</h5>
    </div>
  );
};

export default ErrorPage;
