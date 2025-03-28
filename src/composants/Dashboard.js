import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://hackathon-api-chi.vercel.app/"; 

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(`${API_URL}/users/${userId}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }

        setUserData(data);
        setMessage("Bienvenue, " + data.email);
      } catch (error) {
        console.error("Erreur :", error);
        navigate("/login");
      }
    };

    fetchProtectedData();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? <p>{message}</p> : <p>Chargement...</p>}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          navigate("/login");
        }}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default Dashboard;
