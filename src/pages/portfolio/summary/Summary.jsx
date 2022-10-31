import React from 'react';
import './summary.css';

const Summary = (props) => {
  return (
    <>

      {props.title.map( (el, index) => (

        <div key={el} className='jupiter__summary-container'>
            <div className='jupiter__summary-container-h4'>
                <h4>{el}</h4>
            </div>
            <div className='jupiter__summary-container-p'>
                <p>$ {props.value[index]}</p>
                {(el == "Profit/Loss") ?
                        props.perc<0 ?
                        <p className='jupiter__perc-neg'>{props.perc}%</p> :
                        <p className='jupiter__perc-pos'>{props.perc}%</p> :
                        null }


            </div>

        </div>

      ))
        
      }
    </>
  )
}

export default Summary;