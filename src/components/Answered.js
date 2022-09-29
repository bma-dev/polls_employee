import {connect} from "react-redux";

import Card from "./Card";

const Answered = ({ authedUser, questions, users }) => {


    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
    || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div>
            <h2 className="text-2xl font-bold mt-6 ml-9 mb-4">Answered Questions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
                {questions
                    .filter(answered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>

         
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

export default connect(mapStateToProps)(Answered);