import { connect } from "react-redux";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import { useState } from "react";

const Dashboard = ({ authedUser, questions, users }) => {

    const [displayList, setDisplayList] = useState("unanswered"); 
    const toggle = () => setDisplayList(displayList === "answered" ? "unasnwered" : "answered");
    return (
    <div className="ml-3">
        <h1 className="text-4xl font-bold mb- [50px] mt-[35px]">Dashboard</h1> 
        <button className="w-full text-center font-bold my-5" onClick={toggle}>{`Show ${displayList === "answered" ? "Unanswered" : "Answered"} questions`}</button>
        {displayList === "answered" ? <Answered /> : <Unanswered />} </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
