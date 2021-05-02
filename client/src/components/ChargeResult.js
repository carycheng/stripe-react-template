import React from 'react';
import logo from '../public/images/celebrate.png';
import '../public/styles/Result.css';

const ChargeResult = ({charge}) => {
  console.log(charge);
    
  return (
    <React.Fragment>
      <img src={logo}/>
      <br/>
      <p class="success-position">Charge Successfully Created!</p>
      <br/>
      <p class="result-position">Payment Intent Id: {charge.id}</p>
      <br/>
      <p class="result-position">Charge Id: {charge.charges.data[0].id}</p>
      <br/>
      <a href={charge.charges.data[0].receipt_url} class="receipt-link-position">Receipt URL</a>
    </React.Fragment>  
  );
}

export default ChargeResult