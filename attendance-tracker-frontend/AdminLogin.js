import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
    const [darkMode, setDarkMode] = useState(true);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/admin/login", { username, password });

            localStorage.setItem("token", response.data.token);
            navigate("/admin");
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className={`container ${darkMode ? "dark" : "light"}`}>
            <div className="theme-toggle">
                <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
                    {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="login-box"
            >
                <h2 className="login-title">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="text"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error">{error}</p>}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="login-button"
                        type="submit"
                    >
                        Login
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
