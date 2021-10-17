import React from 'react';
import './CoderCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const CoderCard = (props) => {
    
    const {name, img, expertise, salary, country, age} = props.coder
    
    return (
        <div className="col">
            <div className="card h-100">
            <img src={img} className="card-img-top card-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6>Age: {age}</h6>
                <h5>Country: {country}</h5>
                <p className="card-text">{expertise}</p>
                <p>Salary: ${salary}</p>
            </div>
                <button onClick={()=>props.handleAddToCart(props.coder)} className="btn btn-info"><FontAwesomeIcon icon={faUserPlus} />Add to team</button>
            </div>
        </div>
    );
};

export default CoderCard;