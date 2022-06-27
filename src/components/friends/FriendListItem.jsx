export const FriendListItem = ({friend}) => {
    
    const { avatar, name, isOnline} = friend;
    
    return (  
        <li className="item">
            <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>   
    )
  
}