import "./Profile.css";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile } from "../../slices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return <div>Profile</div>;
};

export default Profile;
