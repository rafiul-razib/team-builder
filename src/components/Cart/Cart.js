import React from 'react';
import Member from '../Member/Member';

const Cart = (props) => {
    const {cart} = props
    

    let totalSalary = 0;
    for(const coder of cart){
        totalSalary = totalSalary + coder.salary;
    }

    return (
        <div>
            <div>
                <h3 className="text-white"><small>Added Member: {cart.length} </small></h3>
                <h3 className="text-white"><small>Cost per month: {totalSalary}</small></h3>
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