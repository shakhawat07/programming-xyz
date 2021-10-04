import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="container-fluid">
            <div className="login-container m-5 p-5">
                <form action="">
                    <h2 className="text-black fw-bold">Login</h2>
                    <label className="text-black fw-bold mx-3">Username : </label>
                    <input type="text" placeholder="Enter Username" name="username" required />
                    <br />
                    <label className="text-black fw-bold mx-3">Password : </label>
                    <input type="password" placeholder="Enter Password" name="password" autoComplete="on" required />
                    <br />
                    <div className="mt-4 ms-5">
                        <button className="btn btn-danger ps-3 mx-4 rounded" type="submit">Login</button>
                        <input type="checkbox" />
                        <span className="ms-3 text-black fw-bolder">Remember me</span>
                        <button className="btn btn-danger px-3 mx-4 rounded" type="button"> Cancel</button>
                        <span className="ms-3 text-black fw-bolder">Forgot <Link to="#"> password? </Link></span>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;