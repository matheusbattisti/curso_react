import { api, requestConfig } from "../utils/config";

// Publish an user's photo
const publishPhoto = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/photos", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
};

export default photoService;
