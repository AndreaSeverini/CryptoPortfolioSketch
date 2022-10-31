import React, { useState } from "react";
import "./portfolio.css";
import Summary from "./summary/Summary";

import TogglePage from "./menu/TogglePage";
import Cake from "./graph/Cake";
import Stock from "./graph/Stock";
import Graph from "../../assets/graph.png";
import StockBTC from "./graph/StockBTC";
import StockETH from "./graph/StockETH";
import BTC from "./statistics/Details";
import Details from "./statistics/Details";
import DetailsUSD from "./statistics/DetailsUSD";
import Trades from "./statistics/Trades";
import TradesUSD from "./statistics/TradesUSD";

import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import MainTitle from "../../components/main-title/MainTitle";

let titles = ["Acquisition Cost", "Realized P/L", "Profit/Loss", "Holdings"];
let BTC_PRICE = 28980;
let ETH_PRICE = 1700;
// let BTC_PRICE = 60000.00;
// let ETH_PRICE = 4500.00;
//every element of week represent [#week,DOGEPERP,BTCPERP,BTCUSD,ETHUSD]
//every element of BTC represent [holding, added this week, paid in USD this week]
//actual: [228.37, 0.00, 0.0156, 0.375],
//every element of week represent [#week,DOGEPERP,BTCPERP,BTCUSD,ETHUSD]
//every element of BTC,ETH represent [holding, added this week, paid in USD this week]
//every element of USD represent [holding, added this week]
//btcTrades,ethTrades [Date, Entry, Exit, Amount, Status, Volume, P/L]
//usdTrades [Date, BotLong/BotShort, Entry, Exit, Amount, Status, Volume, P/L]
//actual represents the real time holding [USD-DOGEPERP,USD-BTCPERP,BTC,ETH]

let Client = {
  date: [
    "05/03/22",
    "12/03/22",
    "19/03/22",
    "25/03/22",
    "24/04/22",
    "11/05/22",
    "29/05/22",
    "10/06/22",
    "31/10/22",
  ],
  weeks: [
    ["Sett_1", 1000.0, 0.0, 123.0, 0.0],
    ["Sett_2", 443.04, 434.43, 120.01, 0.0],
    ["Sett_3", 413.31, 449.59, 130.12, 0.0],
    ["Sett_4", 421.44, 467.39, 138.2, 0.0],
    ["Sett_5", 443.69, 493.88, 252.75, 98.52],
    ["Sett_8", 355.83, 506.55, 323.37, 195.57],
    ["Sett_10", 317.16, 534.82, 259.15, 153.12],
    ["Sett_12", 273.42, 492.97, 230.77, 135.73],
    ["Sett_14", 262.67, 473.74, 235.86, 138.23],
    ["Sett_15", 262.77, 473.74, 149.83, 120.52],
  ],
  actual: [262.77, 473.74, 0.0065, 0.0652],
  BTC: [
    [0.0029, 0.0029, 123.0],
    [0.0029, 0.0, 0.0],
    [0.0029, 0.0, 0.0],
    [0.0029, 0.0, 0.0],
    [0.0052, 0.0023, 99.0],
    [0.008, 0.0025, 99.0],
    [0.0076, 0.0, 0.0],
    [0.0076, 0.0, 0.0],
    [0.0072, 0.0, 0.0],
    [0.0065, 0.0, 0.0],
  ],
  ETH: [
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0295, 0.0295, 98.52],
    [0.0642, 0.0335, 99.0],
    [0.0652, 0.0, 0.0],
    [0.0672, 0.0, 0.0],
    [0.0663, 0.0, 0.0],
    [0.0652, 0.0, 0.0],
  ],
  USD: [
    [1000.0, 1000.0],
    [877.47, 0.0],
    [862.9, 0.0],
    [888.83, 0.0],
    [888.83, 0.0],
    [862.38, 0.0],
    [851.98, 0.0],
    [766.39, 0.0],
    [736.41, 0.0],
    [736.51, 0.0],
  ],
  btcTrades: [],
  ethTrades: [],
  usdTrades: [],
};

let usdHolding = Client.actual
  .filter((el, index) => index < 2)
  .reduce((a, b) => a + b, 0);

let btcHolding = Client.actual[2];
let ethHolding = Client.actual[3];
let totalHolding = usdHolding + btcHolding * BTC_PRICE + ethHolding * ETH_PRICE;

//this is summing --> The sum of all USD in first Week
//                --> The sum of all BTC acquisition in USD
//                --> The sum of all ETH acquisition in USD
let usdAcquisitionCost = Client.USD.map((el) => el[1]).reduce(
  (a, b) => a + b,
  0
);
let btcAcquisitionCost = Client.BTC.map((el) => el[2]).reduce(
  (a, b) => a + b,
  0
);
let btcInvested = Client.BTC.map((el) => el[1]).reduce((a, b) => a + b, 0);
let ethAcquisitionCost = Client.ETH.map((el) => el[2]).reduce(
  (a, b) => a + b,
  0
);
let ethInvested = Client.ETH.map((el) => el[1]).reduce((a, b) => a + b, 0);
console.log(btcInvested);
let acquisitionCost =
  usdAcquisitionCost + btcAcquisitionCost + ethAcquisitionCost;

//profit/loss calculation
let profitLoss = totalHolding - acquisitionCost;
let profitLossPerc = ((totalHolding / acquisitionCost - 1) * 100).toFixed(2);
console.log(profitLossPerc);
//this has to be calculated
let realizedProfitLoss = 0.0;
// console.log(totalHolding)
// let acquisitionCost = ()
let values = [
  acquisitionCost.toFixed(2),
  realizedProfitLoss.toFixed(2),
  profitLoss.toFixed(2),
  totalHolding.toFixed(2),
];

const Portfolio = () => {
  const [toggleOverview, setToggleOverview] = useState(true);
  const [toggleAccounting, setToggleAccounting] = useState(false);
  const [toggleTradesBTC, setToggleTradesBTC] = useState(false);
  const [toggleTradesETH, setToggleTradesETH] = useState(false);
  const [toggleTradesUSD, setToggleTradesUSD] = useState(false);

  const [loginToken, setLoginToken] = useState(false);

  return (
    <div className="jupiter__portfolio section__padding">
      <div className="jupiter__portfolio-h1">
        <h1 className="jupiter__gradient-text">Portfolio</h1>
      </div>

      {/* TODO */}
      {/* <MainTitle>Portfolio</MainTitle> */}
      <div className="jupiter__hr" />

      <div className="jupiter__portfolio-general">
        <Summary title={titles} value={values} perc={profitLossPerc} />
      </div>

      <div className="jupiter__hr" />

      <div className="jupiter__portfolio-menu">
        <TogglePage
          onOverview={() => setToggleOverview(true)}
          onAccounting={() => setToggleAccounting(true)}
          offOverview={() => setToggleOverview(false)}
          offAccounting={() => setToggleAccounting(false)}
        />
      </div>
      {toggleOverview && (
        <>
          <div className="jupiter__portfolio-graph">
            <Cake
              Portfolio={Client}
              BtcPrice={BTC_PRICE}
              EthPrice={ETH_PRICE}
            />

            <Stock Portfolio={Client} />
          </div>
          <div className="jupiter__hr" />
          <div className="jupiter__portfolio-btc">
            <Details
              onTrades={() => setToggleTradesBTC(true)}
              offTrades={() => setToggleTradesBTC(false)}
              toggle={toggleTradesBTC}
              name="BTC"
              logo={<FaBitcoin color="#fff" size={60} />}
              price={BTC_PRICE}
              holding={btcHolding}
              invested={btcInvested}
              investedUSD={btcAcquisitionCost}
              normalPAC={(btcInvested * BTC_PRICE).toFixed(2)}
              jupiterPAC={(btcHolding * BTC_PRICE).toFixed(2)}
            />
            {toggleTradesBTC ? (
              <Trades botTrades={Client.btcTrades} />
            ) : (
              <div className="jupiter__separator"></div>
            )}

            <div className="jupiter__hr" />
            <Details
              onTrades={() => setToggleTradesETH(true)}
              offTrades={() => setToggleTradesETH(false)}
              toggle={toggleTradesETH}
              name="ETH"
              logo={<FaEthereum color="#fff" size={60} />}
              price={ETH_PRICE}
              holding={ethHolding}
              invested={ethInvested}
              investedUSD={ethAcquisitionCost}
              normalPAC={(ethInvested * ETH_PRICE).toFixed(2)}
              jupiterPAC={(ethHolding * ETH_PRICE).toFixed(2)}
            />
            {toggleTradesETH ? (
              <Trades botTrades={Client.ethTrades} />
            ) : (
              <div className="jupiter__separator"></div>
            )}
            <div className="jupiter__hr" />
            <DetailsUSD
              onTrades={() => setToggleTradesUSD(true)}
              offTrades={() => setToggleTradesUSD(false)}
              toggle={toggleTradesUSD}
              name="USD"
              logo={<BsCurrencyDollar color="#fff" size={60} />}
              holding={usdHolding.toFixed(2)}
              invested={usdAcquisitionCost}
              trades={Client.usdTrades}

              //  BTCPERP - DOGEPER %
            />
            {toggleTradesUSD ? (
              <TradesUSD botTrades={Client.usdTrades} />
            ) : (
              <div className="jupiter__separator"></div>
            )}
          </div>
          {/* <div className='jupiter__portfolio-graph'>
                                <StockBTC Portfolio={Client}/>
                                
                                <StockETH Portfolio={Client}

                                /> 
                                
                              </div> */}
        </>
      )}

      {toggleAccounting && <div>ACCOUNTING</div>}
    </div>
  );
};

export default Portfolio;
