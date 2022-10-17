import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div className="ml-3">
      <h1 className="text-3xl font-bold mt-9 mb-5">Leaderboard</h1>

      <table className="border-collapse table-auto w-full text-sm">
        <thead className="table-header-group">
          <tr className="table-row bg-[#eee] pt-5">
            <th className="border-b font-medium p-4 pl-8 pt-0 pt-3 text-black text-left">
              User
            </th>
            <th className="border-b font-medium p-4 pl-8 pt-0 pt-3  text-black text-left">
              Answered
            </th>
            <th className="border-b font-medium p-4 pl-8 pt-0 pt-3  text-black text-left">
              Created
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="border-b border-slate-100 dark:border-slate-200 p-4 pl-8 text-slate-500 dark:text-slate-800">
                <span className="font-bold">{user.name}</span>
                <br />
                {user.id}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-200 p-4 pl-8 text-slate-500 dark:text-slate-800">
                {Object.keys(user.answers).length}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-200 p-4 pl-8 text-slate-500 dark:text-slate-800">
                {user.questions.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const mapStateToProps = ({ users }) => ({
//   users: Object.values(users).sort(
//     (a, b) => Object.keys(b.answers).length - Object.keys(a.questions).length
//   ),
// });

const mapStateToProps = ({ users }) => {
  Object.values(users).forEach((user) => {
    user["score"] = user.questions.length + Object.keys(user.answers).length;
  });
  return {
    users: Object.values(users).sort((a, b) => b.score - a.score),
  };
};

// const mapStateToProps = ({ users }) => {
//   console.log(users);
//   Object.values(users).forEach((user) => {
//     user["score"] = user.questions.length + Object.keys(user.answers).length;
//   });
//   console.log(Object.values(users).sort((a, b) => b.score - a.score));
//   //   let leaderboardData = [];
//   //   Object.values(users).map((user) =>
//   //     leaderboardData.push({
//   //       id: user.id,
//   //       name: user.name,
//   //       questions: user.questions.length,
//   //       answers: Object.keys(user.answers).length,
//   //       score: user.questions.length + Object.keys(user.answers).length,
//   //     })
//   //   );
//   //   return leaderboardData.sort((a, b) => b.score - a.score);
//   return Object.values(users).sort((a, b) => b.score - a.score);
// };

// const mapStateToProps = ({ users }) => {
//   let leaderboardData = [];
//   Object.values(users).map((user) =>
//     leaderboardData.push({
//       id: user.id,
//       name: user.name,
//       questions: user.questions.length,
//       answers: Object.keys(user.answers).length,
//       score: user.questions.length + Object.keys(user.answers).length,
//     })
//   );
//   leaderboardData.sort((a, b) => b.score - a.score);
// };

// function mapStateToProps({ users }) {
//   let leaderboardData = Object.values(users)
//     .map((user) => ({
//       id: user.id,
//       name: user.name,
//       answers: Object.values(user.answers).length,
//       questions: user.questions.length,
//       total: Object.values(user.answers).length + user.questions.length,
//     }))
//     .sort((a, b) => a.total - b.total)
//     .reverse();
//   return {
//     leaderboardData,
//   };
// }

// const mapStateToProps = ({ users }) => {
//   let leaderboardData = [];
//   Object.values(users)
//     .map((user) =>
//       leaderboardData.push({
//         id: user.id,
//         name: user.name,
//         questions: user.questions.length,
//         answers: Object.keys(user.answers).length,
//         score: user.questions.length + Object.keys(user.answers).length,
//       })
//     )
//     .sort((a, b) => a.total - b.total)
//     .reverse();
//   return {
//     leaderboardData,
//   };
// };

export default connect(mapStateToProps)(Leaderboard);
