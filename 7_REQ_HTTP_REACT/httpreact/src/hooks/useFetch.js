import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);

      const json = await res.json();

      setData(json);
    };

    getData();
  }, [url]);

  console.log(data);

  return { data };
};
