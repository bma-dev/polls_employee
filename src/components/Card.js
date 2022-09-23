import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Card = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
        <div className="m-3 p-4 rounded-l shadow-md hover:shadow-xl transition bg-black-300 max-w-sm flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src={author?.avatarURL} alt="Author" />
            </div>
            <div className="w-100">
                <div className="text-xl font-medium text-black">{question.author}</div>
                <p className="text-xs italic">{new Date(question.timestamp).toDateString()}</p>
            </div>
            <p className="underline underline-offset-4 w-100 text-right !ml-auto">Show</p>
        </div>
        </Link>
    );
}

export default connect()(Card);


/*
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
 */
