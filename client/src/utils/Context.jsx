import React, { useState, createContext, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const Context = props => {
  const [user, setUser] = useState({
    name: localStorage.getItem("user"),
    isAdmin: false
  });
  const { loading, error, data: authResult } = useFetch(
    "/api/users/authenticate"
  );
  useEffect(() => {
    if (!loading) {
      if (!error) {
        if (authResult.isAdmin) {
          setUser({ ...user, isAdmin: true });
        }
      }
    }
  }, [loading]);

  return (
    <context.Provider value={{ user, setUser }}>
      {props.children}
    </context.Provider>
  );
};

export default Context;
