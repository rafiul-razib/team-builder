import React from 'react';
import './CoderCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const CoderCard = (props) => {
    
    const {name, img, expertise, salary, country, age} = props.coder
    
    return (
        <div className="col">
            <div className="card h-100">
            <img src={img} className="coder-img" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <h6>Age: {age}</h6>
                <p>From <small>{country}</small></p>
                <p className="card-text"><small>{expertise}</small></p>
                
            </div>
                <h6>Salary: ${salary}</h6>
                <button onClick={()=>props.handleAddToCart(props.coder)} className="btn btn-dark"><FontAwesomeIcon icon={faUserPlus} />Add to team</button>
            </div>
        </div>
    );
};

export default CoderCard;