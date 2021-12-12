import PropTypes from 'prop-types';

function FriendList({friends}) {
  return (
    <ul className="friend-list">
      {
        friends.map(({id, isOnline, name}) => (
          <li className={isOnline ? 'item online' : 'item'} key={id}>
            <span className={isOnline ? 'status online' : 'status'}></span>
            <img className="avatar" src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))
      }
    </ul> 
  );
};

FriendList.propsTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired,
};

export default FriendList;