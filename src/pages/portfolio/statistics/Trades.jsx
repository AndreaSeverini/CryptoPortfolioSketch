import React from 'react';
import { BsFillForwardFill } from "react-icons/bs";
import './details.css';


const Trades = (props) => {
  return (
    <>
        <div className='jupiter__details-trades'>
                  <div className='jupiter__details-container-title'>
                    <span>DATE</span>
                    <span>ENTRY</span>
                    <span>EXIT</span>
                    <span>AMOUNT</span>
                    <span className='jupiter__status'>STATUS</span>
                    <span className='jupiter__volume'>VOLUME</span>
                    <span>P/L</span> 
                  </div>
                  {props.botTrades.map((el,index) => (
                    <div key={index} className='jupiter__details-container-trade'>
                      <span>{el[0]}</span>
                      <span>$ {el[1]}</span>
                      <span>$ {el[2]}</span>
                      <span> {el[3]}</span>
                      <span  className='jupiter__status'> {el[4]}</span>
                      <span className='jupiter__volume'>$  {el[5]}</span>
                      {el[6]>0 ? <span className='jupiter__profit'>$ {el[6]} ( {el[7]}%)</span> 
                              : <span className='jupiter__loss'>$ {el[6]} ( {el[7]}%)</span>}
                    </div>
                  ))}
                </div>
    </>
  )
}

export default Trades;