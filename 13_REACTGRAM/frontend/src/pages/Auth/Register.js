import "./Auth.css";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p class="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha" />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Register;
