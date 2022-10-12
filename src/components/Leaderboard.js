import {connect} from "react-redux";

const Leaderboard = ({users}) => {

    return (
        <div className="ml-3">
            <h1 className="text-3xl font-bold mt-9 mb-5">Leaderboard</h1>

            <table className="border-collapse table-auto w-full text-sm">
                <thead className="table-header-group">
                <tr className="table-row bg-[#eee] pt-5">
                    <th className="border-b font-medium p-4 pl-8 pt-0 pt-3 text-black text-left">User</th>
                    <th className="border-b font-medium p-4 pl-8 pt-0 pt-3  text-black text-left">Answered</th>
                    <th className="border-b font-medium p-4 pl-8 pt-0 pt-3  text-black text-left">Created</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td className="border-b border-slate-100 dark:border-slate-200 p-4 pl-8 text-slate-500 dark:text-slate-800">
                                <span className="font-bold">{user.name}</span>
                                <br/>{user.id}</td>
                            <td className="border-b border-slate-100 dark:border-slate-200 p-4 pl-8 text-slate-500 dark:text-slate-800">{Object.keys(user.answers).length}</td>
                            <td className="border-b border-slate-100 dark:border-slate-200 p-4 pl-8 text-slate-500 dark:text-slate-800">{Object.keys(user.questions).length}</td>
                        </tr>
                    ))
                    
                }
                </tbody>
            </table>

        </div>
    );
};

                                                                        
const mapStateToProps = ({users}) => ({
    users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.questions).length)
});

export default connect(mapStateToProps)(Leaderboard);
