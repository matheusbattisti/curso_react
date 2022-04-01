export const api = "http://localhost:5000/api";

export const requestConfig = (method, data, token = null) => {
  const config = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
