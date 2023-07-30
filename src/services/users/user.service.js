import camelize from "camelize";

import user from "./user.json";

export const usersRequest = () => {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject("Not Found");
    }
    resolve(user);
  });
};

export const usersTransform = (results = {}) => {
  return camelize(results);
};
