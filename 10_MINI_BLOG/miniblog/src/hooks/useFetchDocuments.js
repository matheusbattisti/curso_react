import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, docCollection);

    let q = query(collectionRef, orderBy("createdAt", "desc"));

    onSnapshot(q, (querySnapshot) => {
      setDocuments(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, [docCollection, db]);

  console.log(documents);

  return { documents, loading, error };
};
