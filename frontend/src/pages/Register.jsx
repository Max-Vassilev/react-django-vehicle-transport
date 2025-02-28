import { useState } from "react";
import api from "../api"; 
import { useNavigate } from "react-router-dom"; 
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"; 
import LoadingIndicator from "../components/LoadingIndicator";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const res = await api.post("/api/user/register/", { username, email, password });
            navigate("/login");
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="bg-gray-800 min-h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold text-center text-white mb-4">Register</h1>

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <input
                        className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />

                    {loading && (
                        <div className="my-6 flex justify-center">
                            <LoadingIndicator />
                        </div>
                    )}

                    <button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                        type="submit"
                    >
                        Register
                    </button>

                    <div className="text-center mt-4 text-gray-400">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login from here.</a>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register;
