const API_URL = import.meta.env.VITE_BACKEND_URL

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const requestApi = <T extends any>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  return fetch(API_URL + url, options)
    .then((res) => {
      return checkResponse<T>(res);
    })
    .then((data) => {

      // if (!data.success) {
      //   return Promise.reject(`${data.message}`);
      // }
      return data;
    });
};