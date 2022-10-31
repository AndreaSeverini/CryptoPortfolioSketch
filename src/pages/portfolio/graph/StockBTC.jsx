import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
import './stockbtc.css'

const StockBTC = (props) => {
    console.log(props.Portfolio.BTC)

    let boughtBTC = props.Portfolio.BTC.map((el) => el)
                                       .map((el) => (el[1]))
    for(let i=0;i<boughtBTC.length-1;i++) {
      boughtBTC[i+1] += boughtBTC[i];
    }                                   
    
    let holdingBTC = props.Portfolio.BTC.map((el) => el[0])

    let holdingBTCUSD = props.Portfolio.weeks.map((el) => (el[3]))
                                        
                                      
    let boughtBTCUSD = props.Portfolio.BTC.map((el) => el)
                                          .map((el) => (el[2]))
                                
    for(let i=0;i<boughtBTCUSD.length-1;i++) {
      boughtBTCUSD[i+1] += boughtBTCUSD[i];
    }    

    let titles = props.Portfolio.date;
                                          
    
                                  
    console.log(boughtBTC)
    console.log(boughtBTCUSD)
    console.log(holdingBTC)
    console.log(holdingBTCUSD)
    console.log(titles)
    let dataSet = [];
    for(let i=0;i<titles.length;i++) {
      dataSet.push([titles[i],boughtBTC[i],holdingBTC[i],boughtBTCUSD[i],holdingBTCUSD[i]])
    }
  
    anychart.onDocumentReady(function () {
        // create data set
        
        // weeks represent an array of every week's portfolio situation
        var data = anychart.data.set(
          dataSet);
  
        // map data for the first series, take x from the zero area and value from the first area of data set
        var firstSeriesData = data.mapAs({ x: 0, value: 1 });
        
        // map data for the second series, take x from the zero area and value from the second area of data set
        var secondSeriesData = data.mapAs({ x: 0, value: 2 });
        
        // // map data for the third series, take x from the zero area and value from the third area of data set
        // var thirdSeriesData = data.mapAs({ x: 0, value: 3 });

        // // map data for the  fourth, take x from the zero area and value from the third area of data set
        // var fourthSeriesData = data.mapAs({ x: 0, value: 4 });
  
  
        // create bar chart
        var chart = anychart.line();

        // var palette = anychart.palettes.distinctColors();
        // palette.items([
        //   { color: 'green' },
        //   { color: 'red' }]);
  
        // turn on chart animation
        // chart.palette(palette);
        chart.animation(true);
        chart.background("white");
        
      
        
        // turn on the crosshair
        var crosshair = chart.crosshair();
        crosshair.enabled(true).yStroke(null).xStroke(null).zIndex(39);
        crosshair.yLabel().enabled(false);
  
  
        // set chart title text settings
        chart.title('BTC Portfolio');
  
        // helper function to setup label settings for all series
        var setupSeriesLabels = function (series, name, color) {
          series
            .name(name)
            .stroke(`1 ${color}`)
             
          series
            .markers()
            .type('circle')
            .size(5)
            .stroke('1 #fff');
          series.markers().zIndex(100);
        };
  
        // temp variable to store series instance
        var series;
  
        // create first series with mapped data
        series = chart.line(firstSeriesData);
        setupSeriesLabels(series, 'BTC Holding','red');
  
        // create second series with mapped data
        series = chart.line(secondSeriesData);
        setupSeriesLabels(series, 'BTC Bought','blue');
        
  
        // // create third series with mapped data
        // series = chart.area(thirdSeriesData);
        // setupSeriesLabels(series, 'BTCUSD');
  
        // // create fourth series with mapped data
        // series = chart.area(fourthSeriesData);
        // setupSeriesLabels(series, 'ETHUSD');
  
        // turn on legend
        chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);
        chart.background().cornerType("round");
        chart.background().corners("5rem");
        // set titles for axises
        chart.xAxis().title(false);
        // let xLabelsBackground = chart.xAxis().labels().background();
        // xLabelsBackground.enabled(true);
        // xLabelsBackground.stroke("white");
        // xLabelsBackground.cornerType("round");
        // xLabelsBackground.corners("5rem");
        chart.yAxis().title('Holdings (in BTC)');
        
  
        // interactivity and tooltip settings
        chart.interactivity().hoverMode('by-x');
        chart
          .tooltip()
          .valuePrefix('$')
          .displayMode('union');

  
        // set container id for the chart
        chart.container('container3');
        
        // initiate chart drawing
        chart.draw();
      });
  return (
     <div className='jupiter__portfolio-graph-2' id="container3">
    {/* //          <AnyChart
    //                               type="area"
    //                               id="second"
    //                               data= {chartDataSet}
    //                               title="Stock"
    //                               background="none"
    //                               fontColor="white"
    
    //                           /> */}

     </div>
  )
}

export default StockBTC;