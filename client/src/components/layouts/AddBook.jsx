import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    numberOfPages: 100,
    image: "",
    tags: [1, 2]
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = e => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "/api/books",
        {
          Title: form.title,
          Author: form.author,
          Image: form.image,
          NumberOfPages: form.numberOfPages,
          Tags: form.tags
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth-token")}`
          }
        }
      );
      console.log(response);
      setRedirect(true);
    } catch ({ response }) {
      if (response.status === 400) setErrorMessage("Invalid Username/Password");
    }
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <main className="py-3 container">
      <form
        className="row mt-5 mb-5 justify-content-center w-100"
        onSubmit={handleSubmit}
        style={{ overflowX: "hidden" }}
      >
        <h1 className="text-primary text-center col-12 ">Add New Book </h1>
        <h6 className="text-danger text-left">{errorMessage}</h6>
        <div className="form-group mb-5 col-lg-6 mx-2" data-aos123="fade-right">
          <label className="text-white">Book Title</label>
          <input
            value={form.title}
            type="text"
            className="form-control"
            name="title"
            required
            onChange={handleChange}
            minLength="5"
          />
        </div>
        <div className="form-group mb-5 col-lg-6 mx-2" data-aos123="fade-right">
          <label className="text-white">Book Author</label>
          <input
            value={form.author}
            type="text"
            className="form-control"
            name="author"
            required
            onChange={handleChange}
            minLength="5"
          />
        </div>
        <div className="form-group mb-5 col-lg-6 mx-2" data-aos123="fade-right">
          <label className="text-white">Book Image Url</label>
          <input
            value={form.image}
            type="text"
            className="form-control"
            name="image"
            required
            onChange={handleChange}
            minLength="5"
          />
        </div>
        <div className="form-group mb-5 col-lg-6 mx-2" data-aos123="fade-right">
          <label className="text-white">Number Of Pages</label>
          <input
            value={form.numberOfPages}
            type="text"
            className="form-control"
            name="numberOfPages"
            required
            onChange={handleChange}
            minLength="5"
          />
        </div>
        <div className="col-12 d-flex px-2 justify-content-center">
          <button
            type="submit"
            className="btn btn-lg btn-primary"
            data-aos123="flip-right"
            data-aos123-offset="0"
          >
            Add Book
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddBook;
