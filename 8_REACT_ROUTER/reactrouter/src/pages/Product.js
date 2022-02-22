import { useFetch } from "../hooks/useFetch";

import { useParams, Link } from "react-router-dom";

const Product = () => {
  //4  - rota dinamica
  const { id } = useParams();

  //5 - carregamento de dados
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do produto: {id}</p>

      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando produto...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
