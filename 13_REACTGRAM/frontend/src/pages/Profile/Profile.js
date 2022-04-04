import "./Profile.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";
import {
  getUserPhotos,
  publishPhoto,
  resetMessage,
} from "../../slices/photoSlice";

const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);
  const {
    photo,
    photos,
    loading: loadingPhoto,
    error: errorPhoto,
    message: messagePhoto,
  } = useSelector((state) => state.photo);

  const [title, setTitle] = useState();
  const [image, setImage] = useState();

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  console.log(user);

  // Publish a new photo
  const submitHandle = (e) => {
    e.preventDefault();

    const photoData = {
      title,
      image,
    };

    console.log(photoData);

    // build form data
    const formData = new FormData();

    const photoFormData = Object.keys(photoData).forEach((key) =>
      formData.append(key, photoData[key])
    );

    formData.append("photo", photoFormData);

    dispatch(publishPhoto(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  // change image state
  const handleFile = (e) => {
    const image = e.target.files[0];

    setImage(image);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="profile">
      <div className="profile-header">
        {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )}
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      {id === user._id && (
        <div className="new-photo">
          <h3>Compartilhe algum momento seu:</h3>
          <form onSubmit={submitHandle}>
            <label>
              <span>Título para a foto:</span>
              <input
                type="text"
                placeholder="Insira um título"
                onChange={(e) => setTitle(e.target.value)}
                value={title || ""}
              />
            </label>
            <label>
              <span>Imagem:</span>
              <input type="file" onChange={handleFile} />
            </label>
            {!loadingPhoto && <input type="submit" value="Postar" />}
            {loadingPhoto && (
              <input type="submit" disabled value="Aguarde..." />
            )}
            {errorPhoto && <Message msg={errorPhoto} type="error" />}
            {messagePhoto && <Message msg={messagePhoto} type="success" />}
          </form>
        </div>
      )}
      <div className="user-photos">
        <h2>Fotos publicadas:</h2>
        <div className="photos-container">
          {photos &&
            photos.map((photo) => (
              <Link
                to={`/photos/${photo._id}`}
                className="photo"
                key={photo._id}
              >
                <img
                  src={`${uploads}/photos/${photo.image}`}
                  alt={photo.title}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
