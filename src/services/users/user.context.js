import React, { useState, createContext, useEffect } from 'react';
import { usersRequest, usersTransform } from './user.service';

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      usersRequest()
        .then(usersTransform)
        .then((res) => {
          setIsLoading(false);
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setError(err);
        });
    }, 3000);
  };

  useEffect(() => {
    retrieveUsers();
  }, []);

  return <UsersContext.Provider value={{ user, isLoading, error }}>{children}</UsersContext.Provider>;
};
