import "./Profile.css";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile, updateProfile } from "../../slices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setImageProfile] = useState("");
  const [bio, setBio] = useState("");

  // Load user data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // fill user form
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather user data from states
    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (bio) {
      userData.bio = bio;
    }

    dispatch(updateProfile(userData));
  };

  const handleFile = () => {};

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil, e conte mais um pouco sobre você...
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input type="email" placeholder="E-mail" disabled value={email || ""} />
        <input type="file" onChange={handleFile} />
        <input
          type="text"
          placeholder="Descrição do perfil"
          onChange={(e) => setBio(e.target.value)}
          value={bio || ""}
        />
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};

export default Profile;
