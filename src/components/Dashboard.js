import {connect} from "react-redux";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

const Dashboard = ({authedUser, questions, users}) => {

    return (
        <div className="ml-3">
            <h1 className="text-4xl font-bold mb-[50px] mt-[35px]" data-testid="heading">Dashboard</h1>
            <Unanswered/>

            <Answered />   

        </div>
    );
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
