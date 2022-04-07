import "./Home.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Redux
import { getPhotos, like } from "../../slices/photoSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photos, loading, resetComponentMessage } = useSelector(
    (state) => state.photo
  );

  // Load all photos
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = (photo = null) => {
    dispatch(like(photo._id));

    resetComponentMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
