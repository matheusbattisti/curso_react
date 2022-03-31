import "./Auth.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <form>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha" />
        <input type="submit" value="Entrar" />
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Login;
