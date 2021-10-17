import React, { useEffect, useState} from 'react';
import './Coders.css'
import CoderCard from '../CoderCard/CoderCard';
import Cart from '../Cart/Cart';


const Coders = () => {
    const[coders, setCoders] = useState([])
    const[cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('person.json')
        .then(res => res.json())
        .then(data => setCoders(data))
        .catch(error => console.log(error))
    },[])

    const handleAddToCart =(coder)=>{
        const newCart = [...cart, coder];
        setCart(newCart);
    }

    return (
        <div className="container">
           <div className="row">
               <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        coders.map(coder => <CoderCard key={coder.key} handleAddToCart={handleAddToCart} coder ={coder}></CoderCard>)
                    }
                    </div>

               </div>

               <div className="col-md-3">
                    <Cart cart={cart}></Cart>
               </div>

           </div>
        </div>
    );
};

export default Coders;