export const Statistics = ({ datas, title=null}) => {
    
    return (
    <>   
        <h2 className="title">{title}</h2>   
        <ul className="statistics">
           {datas.map(data => {
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