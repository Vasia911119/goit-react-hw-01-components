import PropTypes from 'prop-types';
import FriendListItem from './friend-list-item/friend-list-item.jsx';
import s from './Friends-list.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};

export default FriendList;