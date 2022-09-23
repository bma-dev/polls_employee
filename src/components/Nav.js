import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {handleLogout} from "../actions/authedUser";

const Nav = ({dispatch, authedUserId, author}) => {

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return (
        <nav className="flex justify-between space-x-4 m-3 p-4 bg-[#65C9FF]">
            <div className="mt-2">
            <Link to="/"
                  className="font-medium px-3 py-2 text-slate-700 hover:text-slate-100">Home</Link>
            <Link to="/leaderboard"
                  className="font-medium px-3 py-2 text-slate-700 hover:text-slate-100">Leaderboard</Link>
            <Link to="/new"
                  className="font-medium px-3 py-2 text-slate-700 hover:text-slate-100">New
                Poll
            </Link>
            </div>

            <div>
            <span
                className="font-medium px-3 py-2 text-white"
                data-testid="user-information"> {authedUserId}</span>
            <button onClick={logout}
                    className="font-medium px-3 py-2 text-red">Logout
            </button>
            </div>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});


export default connect(mapStateToProps)(Nav);
