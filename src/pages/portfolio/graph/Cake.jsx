import React, {useEffect} from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

import Torta from '../../../assets/torta.png';
import './cake.css'

const Cake = (props) => {
  const lastDOGEPERP= props.Portfolio.actual[0];
  const lastBTCPERP = props.Portfolio.actual[1];
  const lastBTCUSD = props.Portfolio.actual[2] * props.BtcPrice;
  const lastETHUSD = props.Portfolio.actual[3] * props.EthPrice;

  const lastUSD = lastDOGEPERP + lastBTCPERP;
  useEffect(() => {
    // Aggiorna il titolo del documento usando le API del browser
    anychart.onDocumentReady(function () {
      // create data set
      // weeks represent an array of every week's portfolio situation
      var dataSet = [
        {x: "USD", value: lastUSD},
        {x: "BTC", value: lastBTCUSD},
        {x: "ETH", value: lastETHUSD}
      ]
      
      var chart = anychart.pie(dataSet);
      chart.animation(true);
      chart.bounds(0, 0, "100%", "110%");
      chart.background("white");
      chart.background().stroke("black");
      chart.innerRadius("70%");
      chart.connectorStroke({color: "#black", thickness: 2, dash:"2 2"});
      chart.title('Portfolio Holdings');
  
      chart.legend().enabled(true).fontSize(17).padding([0, 0, 20, 0]);
      chart.background().cornerType("round");
      chart.background().corners("5rem");
      chart.container('container2');
          
          // initiate chart drawing
      chart.draw();
    })
  }, []);

  
  return (
    <>
        
                <div className='jupiter__portfolio-graph-1' id="container2">
                    
                    {/* <AnyChart
                                  type="pie"
                                  id="first"
                                  innerRadius="70%"
                                  data={[lastUSD, lastBTCUSD, lastETHUSD]}
                                  title="Porftolio"
                                  background="none"
                                  fontColor="white"
    
                              /> */}
                </div>

                
    </>
  )
}

export default Cake;