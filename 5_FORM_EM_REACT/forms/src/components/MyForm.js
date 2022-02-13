import { useState } from "react";
import "./MyForm.css";

/*6 - controlled inputs */
const MyForm = ({ user }) => {
  {
    /* 3 - gerencimento de valores */
  }
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);

  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form");
    console.log(name, email, bio, role);
    {
      /* 7 - limpar form */
    }
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}>
        {/* 1 - criacao form */}
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envovendo o input */}
        <label>
          E-mail
          {/* 4 - simplificando alteracao de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          Bio:
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Descrição do usuário"
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          Função no sistema
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Criar usuário" />
      </form>
    </div>
  );
};

export default MyForm;
