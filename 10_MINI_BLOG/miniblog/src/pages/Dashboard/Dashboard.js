import React from "react";

import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents } = useFetchDocuments("posts", null, uid);

  console.log(uid);
  console.log(documents);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
    </div>
  );
};

export default Dashboard;
