import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
               
                return (
                    <li className="item" key={friend.id}>
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