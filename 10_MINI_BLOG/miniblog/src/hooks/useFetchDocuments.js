import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, docCollection);

    let q;

    if (!search) {
      q = query(collectionRef, orderBy("createdAt", "desc"));
    } else {
      q = query(
        collectionRef,
        where("title", "==", search),
        orderBy("createdAt", "desc")
      );
    }

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
