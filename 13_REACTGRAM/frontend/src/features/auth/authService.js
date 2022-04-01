const api = "http://localhost:5000/api";

// Register a user
const register = async (user) => {
  const res = await fetch
    .post(api + "/users/register", user)
    .then((response) => {
      return response.data;
    });

  if (res) {
    localStorage.setItem("user", JSON.stringify(res));
  }

  return res;
};

const authService = {
  register,
};

export default authService;
