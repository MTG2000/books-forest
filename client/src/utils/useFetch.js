import React, { useState, useEffect } from "react";
import Axios from "axios";

const useFetch = (url, type = "GET", body = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const authToken = localStorage.getItem("auth-token");

      try {
        const response = await Axios({
          method: type,
          url,
          body,
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        if (response.status === 200) setData(response.data);
        else
          setError({ status: response.status, message: response.statusText });
      } catch ({ response }) {
        setError({
          status: response.status,
          message: response.statusText
        });
      } finally {
        setLoading(false);
      }
    })();
    return () => {};
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
