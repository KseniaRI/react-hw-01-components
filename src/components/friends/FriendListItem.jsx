import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendListItem = ({ friend}) => {
    
    const { avatar, name, isOnline} = friend;
    const status = isOnline ? css.online : css.offline;
    return (  
        <>
            <span className={status} ></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </>
    )
  
}
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
}