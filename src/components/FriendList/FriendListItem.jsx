import css from "./FriendList.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      {friend.isOnline ? (
        <p className={css.green}>Online</p>
      ) : (
        <p className={css.red}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
