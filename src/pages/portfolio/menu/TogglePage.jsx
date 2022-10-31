import React from 'react';
import './togglepage.css';

const TogglePage = (props) => {
  

  

  function handleOnOverview()  {
    props.offAccounting();
    props.onOverview();

    let divOverview = document.getElementById('overview');
    let divAccounting = document.getElementById('accounting');
    let h41 = document.getElementById('h41');
    let h42 = document.getElementById('h42');

    h41.setAttribute("style","color: white");
    
    divOverview.setAttribute("style","background:linear-gradient(0deg, rgba(133, 133, 133, 1) 0%, rgba(60, 60, 60, 1) 56%, rgba(0, 0, 0, 1) 100%)");
    
    h42.setAttribute("style","color: black");
    divAccounting.setAttribute("style","background: rgba(255, 255, 255, 1)");
  }

  function handleOnAccounting() {
    props.offOverview();
    props.onAccounting();

    let divOverview = document.getElementById('overview');
    let divAccounting = document.getElementById('accounting');
    let h41 = document.getElementById('h41');
    let h42 = document.getElementById('h42');
  
    h41.setAttribute("style","color: black");
    divOverview.setAttribute("style","background: rgba(255, 255, 255, 1)");

    h42.setAttribute("style","color: white");
    divAccounting.setAttribute("style","background:linear-gradient(0deg, rgba(133, 133, 133, 1) 0%, rgba(60, 60, 60, 1) 56%, rgba(0, 0, 0, 1) 100%)");
  }


  return (
    
      
    <>
        <div className='jupiter__toggle-menu-1' onClick={handleOnOverview} id='overview'>
            <h4 id='h41'>Overview</h4>
        </div>
        <div className='jupiter__toggle-menu-2' onClick={handleOnAccounting} id='accounting'>
            <h4 id='h42'>Accounting</h4>
        </div>

    </>
  )
}

export default TogglePage;