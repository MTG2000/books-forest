import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="container mx-auto mt-5 row justify-content-center">
      <ReactLoading type="bars" color="#f1ee3b" height={200} width={160} />
      <h2 className="text-white text-center col-12">Loading . . .</h2>
    </div>
  );
};

export default Loading;
