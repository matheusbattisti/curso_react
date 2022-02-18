import { useEffect, useState } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - estado de loading
  const [loading, setLoading] = useState(false);

  // 8 - tratando erros
  const [error, setError] = useState(false);

  // 9 - desafio
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod("DELETE");
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6 - estado de loading
      // mudar throttling no network p 3g
      setLoading(true);

      // 8 - tratando erros
      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);

        setMethod(null);

        // 8 - tratando erros
        setError(null);
      } catch (error) {
        console.log(error.message);

        setError("Houve um erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        // 7 - loading no post
        // mudar throttling no network p 3g
        setLoading(true);

        // 5 - refatorando post
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
        // 9 - desafio
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config]);

  console.log(config);

  return { data, httpConfig, loading, error };
};
