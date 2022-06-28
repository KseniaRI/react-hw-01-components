import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
    
    return (
    <>   
        {title && <h2 className="title">{title}</h2>}   
        <ul className="statistics">
           {stats.map(data => {
               const { id, label, percentage } = data;
               return (
                   <li key={id} className="item">
                       <span className="label">{label}</span>
                       <span className="percentage">{percentage}</span>
                   </li>
               )
           })
           }
        </ul>
    </> 
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
    })),
}