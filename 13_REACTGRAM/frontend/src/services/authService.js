const api = "http://localhost:5000/api";

const requestConfig = (method, data) => {
  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

// Register a user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/register", config)
      .then((res) => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res);

        return res.json();
      })
      .catch((err) => {
        console.log(err);

        return err;
      });

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
};

export default authService;
