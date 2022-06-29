import PropTypes from 'prop-types';
import css from './Friends.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendsList}>
            {friends.map(friend => {
               
                return (
                    <li className={css.item} key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                )
            }
            )}
        </ul>
    );
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
  
}