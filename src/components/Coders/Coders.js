import React, { useEffect} from 'react';

const Coders = () => {
    
    useEffect(()=>{
        fetch('../../../public/products.JSON', {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>coders</h1>
        </div>
    );
};

export default Coders;