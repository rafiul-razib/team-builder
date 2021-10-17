import React from 'react';
import './Member.css'

const Member = (props) => {
    const {name, img} = props.member
    return (
        <div>
            <div className="card mb-3" style={{"maxWidth": "540px", "height":"120px"}}>
            <div className="row g-0">
                <div className="col-md-5">
                <img src={img} className="img-fluid rounded member" alt="..."/>
                </div>
                <div className="col-md-7">
                <div className="card-body d-flex align-items-center justify-content-center">
                    <h6 className="card-title"><small>{name}</small></h6>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Member;