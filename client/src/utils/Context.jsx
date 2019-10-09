import React, { useState, createContext } from "react";

export const context = createContext();

const Context = props => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <context.Provider value={{ user, setUser }}>
      {props.children}
    </context.Provider>
  );
};

export default Context;
