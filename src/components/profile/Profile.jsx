import { Description } from './Description';
import { Stats } from './Stats';


export const Profile = ({user}) => {
    return (
        <div className="profile">
          <Description user={user} />
          <Stats user={user}/>  
        </div>
        
     );
    
}
