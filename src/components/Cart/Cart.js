import React from 'react';
import Member from '../Member/Member';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {cart} = props
    

    let totalSalary = 0;
    for(const coder of cart){
        totalSalary = totalSalary + coder.salary;
    }

    return (
        <div>
            <div>
                <h3 className="text-white"><small><FontAwesomeIcon icon={faLaptopCode}/> Added Member: {cart.length} </small></h3>
                <h3 className="text-white"><small><FontAwesomeIcon icon={faDollarSign}/> Cost per month: {totalSalary}</small></h3>
            </div>

            <div>
                {
                    cart.map(member => <Member key={member.key} member = {member}></Member>)
                }
            </div>

            
                
            
        </div>
    );
};

export default Cart;