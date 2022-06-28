import PropTypes from 'prop-types';

export const FriendListItem = ({friend}) => {
    
    const { avatar, name, isOnline} = friend;
    
    return (  
        <>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
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