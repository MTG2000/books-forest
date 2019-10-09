import React, { useState, useContext } from "react";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { context } from "../../utils/Context";

const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(context);

  const handleChange = e => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/users/login", {
        Name: form.name,
        Password: form.password
      });
      const token = response.data.token;
      if (token) {
        localStorage.setItem("auth-token", token);
        localStorage.setItem("user", form.name);
        setUser(form.name);
      }
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
        <h1 className="text-primary text-center col-12 ">Login</h1>
        <h6 className="text-danger text-left">{errorMessage}</h6>
        <div className="form-group mb-5 col-lg-6 mx-2" data-aos123="fade-right">
          <label className="text-white">User Name</label>
          <input
            value={form.name}
            type="text"
            className="form-control"
            name="name"
            required
            onChange={handleChange}
            minLength="5"
          />
        </div>
        <div className="form-group mb-5 col-lg-6 mx-2" data-aos123="fade-right">
          <label className="text-white">Password</label>
          <input
            value={form.password}
            type="password"
            className="form-control"
            name="password"
            required
            onChange={handleChange}
            minLength="8"
          />
        </div>

        <div className="col-12 d-flex px-2 justify-content-center">
          <button
            type="submit"
            className="btn btn-lg btn-primary"
            data-aos123="flip-right"
            data-aos123-offset="0"
          >
            Login
          </button>
        </div>
        <Link to="/register" className="col-12 text-center my-5">
          Dont Have an account yet ?
        </Link>
      </form>
    </main>
  );
};

export default Login;
