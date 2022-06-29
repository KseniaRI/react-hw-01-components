import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
    
    return (
    <div className={css.statisticsWrap}>   
        {title && <h2 className={css.title}>{title}</h2>}   
        <ul className={css.statistics}>
           {stats.map(data => {
               const { id, label, percentage } = data;
               return (
                   <li key={id} className="item">
                       <span className={css.label}>{label}</span>
                       <span className={css.percentage}>{percentage}%</span>
                   </li>
               )
           })
           }
        </ul>
    </div> 
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