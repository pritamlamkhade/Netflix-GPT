import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Private from "./Private";
import Public from "./Public";

const Body = () => {
  const user = useSelector((store) => store.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(user ? true : false);
  }, [user]);

  return !isAuthenticated ? <Public /> : <Private />;
};

export default Body;
