import "./Profile.css";

import { uploads } from "../../utils/config";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";

const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch]);

  console.log(user);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="profile">
      <div className="profile-header">
        <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
