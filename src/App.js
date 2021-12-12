import './App.css';
import SocialProfile from './components/social-profile.jsx';
import user from './data/user.json';
import Statistics from './components/statistics.jsx';
import data from './data/data.json';
import FriendList from './components/friend-list.jsx';
import friends from './data/friends.json';
import TransactionHistory from './components/transaction.jsx';
import transaction from './data/transactions.json';

function App() {
  return (
    <>
      <SocialProfile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
