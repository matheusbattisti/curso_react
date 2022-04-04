import "./Photo.css";

import { uploads } from "../../utils/config";

// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getPhoto } from "../../slices/photoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { photo, loading } = useSelector((state) => state.photo);

  // Load user data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  console.log(photo);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
