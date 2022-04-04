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

  const [title, setTitle] = useState();
  const [photo, setPhoto] = useState();

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch]);

  console.log(user);

  // Publish a new photo
  const submitHandle = (e) => {
    e.preventDefault();
  };

  // change image state
  const handleFile = (e) => {
    const image = e.target.files[0];

    setPhoto(image);
  };

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
                value={title}
              />
            </label>
            <label>
              <span>Imagem:</span>
              <input type="file" onChange={handleFile} />
            </label>
            <input type="submit" value="Postar" />
          </form>
        </div>
      )}
      <div className="user-photos">
        <p>fotos...</p>
      </div>
    </div>
  );
};

export default Profile;
