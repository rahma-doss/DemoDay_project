import React from 'react';
import { Link } from 'react-router-dom';
import './Coachs.css';
const CoachCard = props => {
    return (
//         <div className="container cardContainer">
//             <div className="row">
//                 <div className="col">
//                     <div className="card" style={{ width: '20rem'}}>
//                         <div className="card-image" >
//                             <img src={props.coach.Image} alt="personal profile"  className='image-card'/>
//                         </div>
//                         <div className="card-content">
//                             <span className="card-title"> <h3>{props.coach.FirstName} {props.coach.LastName}</h3> </span>
//                             <span className="card-title"> <h5>{props.coach.Specialite}</h5></span>
//                             <span className="card-title"> <h5>{props.coach.Ville}</h5></span>
//                         </div>
//                         <div className="card-action">
//                         <Link  to={`/Description/${props.coach._id}`}>Plus D'info </Link>
//                         <Link  to={`/Feedback/${props.coach._id}`}> Feedback</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


<div className="not_container">
  <div className="row">
    <div className="col">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={props.coach.Image}/>
        </div>
        <div className="team-content">
          <h3 className="name">{props.coach.FirstName}  {props.coach.LastName}</h3>
          <h4 className="title">{props.coach.Specialite}</h4>
           <h4 className>{props.coach.Ville}</h4>
        </div>
        <ul className="social">
          <li> <Link  to={`/Description/${props.coach._id}`}>Plus D'info </Link></li>
          <li>  <Link  to={`/Feedback/${props.coach._id}`}> Feedback</Link></li>
          
        </ul>
      </div>
    </div>
    
      
  </div>
</div>
    );
}







export default CoachCard;