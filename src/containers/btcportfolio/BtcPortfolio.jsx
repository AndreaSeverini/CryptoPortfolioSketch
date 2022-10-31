import React from 'react';
import './btcportfolio.css'
import graph1 from '../../assets/BTC-graph1.png';
import graph2 from '../../assets/BTC-graph2.png';

export default function BtcPortfolio() {
  return (
      <>
        <div className='jupiter__bots-section section__margin' id='portfolio'>
            <div className='jupiter__bot-usd'>
                <div className='jupiter__bot-usd__text'>
                    <h1 className='gradient__text'>
                    Keep track over your BTC portfolio value in USD ($)
                    </h1>
                    
                    <p>Image shows a comparison between a normal BTC <b>PAC</b> and <b>Jupiter's Idea.</b><br />
                        The best behavior could show the RED LINE below the GREEN ONE.  
                    </p>
                    <div>
                        <ul>
                            <li>The RED LINE represents your USD value of your BTC portfolio whithout Advanced PAC implementation</li>
                            <li>The GREEN LINE represents your USD value of your BTC portfolio whith Advanced PAC implementation</li>
                        
                        </ul>
                    </div>
                </div>
                <div>
                <img src={graph1} alt='graph-1'/>
                </div>
            </div>
            <div className='jupiter__bot-usd'>
                <img src={graph2} alt='graph-2'/>
                <div className='jupiter__bot-usd__text'>
                    <h1 className='gradient__text'>
                    Keep track over your BTC holding
                    </h1>
                    
                    <p>Image shows how implementing the bot on BTC holding
                        can increase your BTC exposure regardless BTC price.
                        <br />
                    </p>
                    <div>
                        <ul>
                            <li>The RED LINE represents your BTC holding whithout Advanced PAC implementation</li>
                            <li>The GREEN LINE represents your BTC holding whith Advanced PAC implementation</li>
                        
                        </ul>
                    </div>
                </div>
                
                
            </div>
            
        </div>
      </>
    
  )
}
