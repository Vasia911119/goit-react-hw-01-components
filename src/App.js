import './App.css';
import SocialProfile from './components/socialProfile/SocialProfile.jsx';
import user from './data/user.json';
import Statistics from './components/statistics/Statistics.jsx';
import data from './data/data.json';
import FriendList from './components/friendList/FriendList.jsx';
import friends from './data/friends.json';
import TransactionHistory from './components/transaction/Transaction.jsx';
import transaction from './data/transactions.json';

function App() {
  return (
    <>
      <SocialProfile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
