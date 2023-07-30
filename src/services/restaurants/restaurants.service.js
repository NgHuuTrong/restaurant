import camelize from "camelize";

import { mocks } from "./mock";

export const restaurantsRequest = () => {
  return new Promise((resolve, reject) => {
    if (!mocks) {
      reject("Not Found");
    }
    resolve(mocks);
  });
};

export const restaurantsTransform = (results = {}) => {
  return camelize(results);
};
