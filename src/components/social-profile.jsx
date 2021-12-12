import PropTypes from 'prop-types';

function SocialProfile({ username, tag, location, followers = 0, views = 0, likes = 0 }) {
  return (
    <div className="profile">
      <div className="description">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt={username} className="avatar" width = "150"/>
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>

        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>

        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
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