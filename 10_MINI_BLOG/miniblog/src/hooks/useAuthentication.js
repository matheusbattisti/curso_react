import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const createUser = async (data) => {
    const auth = getAuth();

    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    await res.user.updateProfile({ dispayName: data.displ });
  };

  return { createUser };
};
