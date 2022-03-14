import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const loadDocument = async () => {
      const docRef = await doc(db, docCollection, id);
      const docSnap = await getDoc(docRef);

      setDocument(docSnap.data());
    };

    loadDocument();
  }, [docCollection, db, id]);

  console.log(document);

  return { document, loading, error };
};
