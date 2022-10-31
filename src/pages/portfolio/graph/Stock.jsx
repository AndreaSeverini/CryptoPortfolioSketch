import React,{ useEffect} from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
import './stock.css'


const Stock = (props) => {
  useEffect(() => {
    anychart.onDocumentReady(function () {
        // create data set
        // weeks represent an array of every week's portfolio situation
        var dataSet = anychart.data.set(
          props.Portfolio.weeks);
  
        // map data for the first series, take x from the zero area and value from the first area of data set
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
  
        // map data for the second series, take x from the zero area and value from the second area of data set
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
  
        // map data for the third series, take x from the zero area and value from the third area of data set
        var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

        // map data for the  fourth, take x from the zero area and value from the third area of data set
        var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
  
  
        // create bar chart
        var chart = anychart.area();
  
        // turn on chart animation
        chart.animation(true);
        chart.background("white");
        chart.background().stroke("black");
        
        // turn on the crosshair
        var crosshair = chart.crosshair();
        crosshair.enabled(true).yStroke(null).xStroke('#fff').zIndex(39);
        crosshair.yLabel().enabled(false);
  
        // force chart to stack values by Y scale.
        chart.yScale().stackMode('value');
  
        // set chart title text settings
        chart.title('');
  
        // helper function to setup label settings for all series
        var setupSeriesLabels = function (series, name) {
          series
            .name(name)
            .stroke('1 #000 1')
            .fill(function () {
              return this.sourceColor + ' 0.8';
            });
          series.hovered().stroke('3 #fff 1');
          series
            .hovered()
            .markers()
            .enabled(true)
            .type('circle')
            .size(4)
            .stroke('1.5 #fff');
          series.markers().zIndex(100);
        };
  
        // temp variable to store series instance
        var series;
  
        // create first series with mapped data
        series = chart.area(firstSeriesData);
        setupSeriesLabels(series, 'DOGEPERP');
  
        // create second series with mapped data
        series = chart.area(secondSeriesData);
        setupSeriesLabels(series, 'BTCPERP');
  
        // create third series with mapped data
        series = chart.area(thirdSeriesData);
        setupSeriesLabels(series, 'BTCUSD');
  
        // create fourth series with mapped data
        series = chart.area(fourthSeriesData);
        setupSeriesLabels(series, 'ETHUSD');
  
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
        chart.yAxis().title('Holdings (in USD)');
        
  
        // interactivity and tooltip settings
        chart.interactivity().hoverMode('by-x');
        chart
          .tooltip()
          .valuePrefix('$')
          .displayMode('union');

  
        // set container id for the chart
        chart.container('container');
        
        // initiate chart drawing
        chart.draw();
      })
  }, []);
  return (
     <div className='jupiter__portfolio-graph-2' id="container">
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

export default Stock