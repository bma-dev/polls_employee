import React, {useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import {connect} from "react-redux";
import Login from "./components/Login";
import {handleInitialData} from "./actions/shared";
import Leaderboard from "./components/Leaderboard";
import PrivateRoute from "./components/PrivateRoute";
import Answered from './components/Answered';
import Unanswered from './components/Unanswered';
import Error404 from './components/404'

function App({dispatch, loggedIn}) {
    useEffect(() => {
        dispatch(handleInitialData());
    });

    return (
        <div className="container mx-auto py-4">
            {loggedIn && <Nav/>}
            <Routes>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
                <Route path="/questions/:id" element={<PrivateRoute><PollPage/></PrivateRoute>}/>
                <Route path="/add" element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
                <Route path="/answered" exact element={<PrivateRoute><Answered/></PrivateRoute>}/>
                <Route path="/unanswered" exact element={<PrivateRoute><Unanswered/></PrivateRoute>}/>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
