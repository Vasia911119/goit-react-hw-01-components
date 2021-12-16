import PropTypes from 'prop-types';
import s from './Social-profile.module.css';

function SocialProfile({ username, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt={username} className={s.avatar} width = "150"/>
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>

        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>

        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

SocialProfile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default SocialProfile;