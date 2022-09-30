import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn, users}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    const onSelect = (e)=>{
        let ourUser =  users.find(user => user.id == e.target.value)
        if(ourUser) {
            setUsername(ourUser.id)
            setPassword(ourUser.password)
        }
    }

    return (
        <div className="w-[450px] mx-auto">
            <h1 className="text-3xl font-bold mt-9 mb-5 text-center" data-testid="login-heading">Login</h1>

            <div className="mt-4">
                <span className="mb-2 text-xl font-bold">Choose a User:</span>
                <br />
                <select onChange={onSelect} className="bg-[#0ca5e9] mb-8 p-3 w-full text-white">
                { 
                    users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>

                    ))
                } 
                 </select>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                    <div className="mt-1">
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                    <div className="mt-1">
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>
                <div className="mt-6 text-right">
                    <button type="submit"
                        data-testid="submit"
                        className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 font-semibold text-white w-[100%]">
                        Login
                    </button>
                </div>
            </form>




        </div>


    );
};

const mapStateToProps = ({ authedUser, users }) => ({
    loggedIn: !!authedUser,
    users: Object.values(users)
});

export default connect(mapStateToProps)(Login);
