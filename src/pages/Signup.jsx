import React, {use, useState} from "react";
import API from "../services/api";
//import Signup from './pages/Signup';

import { useNavigate } from "react-router-dom";
import "./Signup.css";


const Signup = () => {
    const navigate = useNavigate();

    const[formData, setformData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try{
            await API.post("/auth/signup",formData);
            alert("Signup successful Please login. ");
            navigate("/login");
        }
        catch(err){
            setError(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="signup-container">
            <h2 className="singup-title">Signup</h2>
            {error && <p className="error-text">{error}</p>}
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                    type="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                    type="password"
                    name="password"
                    className="form-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit" className="submit-button">signup</button>
            </form>
        </div>
    );
};

export default Signup;