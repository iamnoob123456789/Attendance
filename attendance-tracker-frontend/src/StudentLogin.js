import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentLogin() {
    const [darkMode, setDarkMode] = useState(true);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent page refresh

        try {
            const response = await axios.post("http://localhost:5000/login", { username, password });
           if(response){
            setError(""); // Clear previous errors
            navigate("/studentdashboard");
           }
        } catch (error) {
            setError(error.response?.data?.message || "Login failed");
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
                <h2 className="login-title">Student Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="text"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
