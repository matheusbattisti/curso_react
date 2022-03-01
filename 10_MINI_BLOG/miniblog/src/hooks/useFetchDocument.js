import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(async () => {
    const docRef = doc(db, docCollection, id);
    const docSnap = await getDoc(docRef);

    setDocument(docSnap.data());
  }, [docCollection, db, id]);

  console.log(document);

  return { document, loading, error };
};
