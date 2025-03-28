import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentification.css";

const API_URL = "https://ton-api.vercel.app/api"; 

function Authentification() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const endpoint = isSignIn ? "/login" : "/register";
        const payload = { email, password };

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            setIsLoading(false);

            if (!response.ok) {
                throw new Error(data.message || "Erreur inconnue");
            }

            if (isSignIn) {
                localStorage.setItem("token", data.token);
                navigate("/dashboard");
            } else {
                navigate("/login");
            }
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <img src="./MclaRent.png" alt="Logo" className="auth-logo" />
                <h2 className="auth-title">{isSignIn ? "Se connecter" : "S'inscrire"}</h2>

                {error && <p className="auth-error">❌ {error}</p>}
                {isLoading && <p className="auth-loading">⏳ Chargement...</p>}

                <form onSubmit={handleAuth}>
                    <div className="auth-input-container">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="auth-input"
                            required
                        />
                    </div>
                    <div className="auth-input-container">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="auth-input"
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button primary" disabled={isLoading}>
                        {isSignIn ? "Se connecter" : "S'inscrire"}
                    </button>
                </form>

                <div className="auth-switch">
                    <button onClick={() => setIsSignIn(!isSignIn)} className="auth-button secondary">
                        {isSignIn ? "Créer un compte" : "Se connecter"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Authentification;
