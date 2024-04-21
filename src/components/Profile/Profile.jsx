import css from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats:{followers, views, likes}}) => {
    return (<div className={css.userProfile}>
    <div>
      <img
        src={image}
        alt="User avatar"
        className={css.avatar}
      />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  
    <ul className={css.profileStatsList}>
      <li className={css.profileStatsItem}>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li className={css.profileStatsItem}>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li className={css.profileStatsItem}>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>)
}

export default Profile