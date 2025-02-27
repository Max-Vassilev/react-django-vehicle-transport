import { useState } from "react"; 
import api from "../api"; 
import { useNavigate } from "react-router-dom"; 
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"; 
import LoadingIndicator from "./LoadingIndicator"; 

function Form({ route, method }) { 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate(); 
    const name = method === "login" ? "Login" : "Register"; 

    const handleSubmit = async (e) => { 
        setLoading(true); 
        e.preventDefault(); 
        try { 
            const res = await api.post(route, { username, password }); 
            if (method === "login") { 
                localStorage.setItem(ACCESS_TOKEN, res.data.access); 
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh); 
                navigate("/"); 
            } else { 
                navigate("/login"); 
            } 
        } catch (error) { 
            alert(error); 
        } finally { 
            setLoading(false); 
        } 
    }; 

    return ( 
        <div className="bg-gray-800 min-h-screen flex items-center justify-center"> 
            <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-md"> 
                <h1 className="text-2xl font-semibold text-center text-white mb-4">{name}</h1> 

                <input 
                    className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                /> 

                <input 
                    className="block w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
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
                    {name} 
                </button> 

                {method === "login" && ( 
                    <div className="text-center mt-4 text-gray-400"> 
                        Have no account? <a href="/register" className="text-blue-500 hover:underline">Register from here.</a> 
                    </div> 
                )} 

                {method === "register" && ( 
                    <div className="text-center mt-4 text-gray-400"> 
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login from here.</a> 
                    </div> 
                )} 
            </form> 
        </div> 
    ); 
}

export default Form;
