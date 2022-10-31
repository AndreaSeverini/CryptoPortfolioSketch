import React from "react";

import { FaBitcoin } from "react-icons/fa";
import { BsFillForwardFill } from "react-icons/bs";
import "./details.css";

const DetailsUSD = (props) => {
  function handleToggleTrades() {
    if (props.toggle == false) props.onTrades();
    if (props.toggle == true) props.offTrades();
  }

  let btcperpProfitLoss = props.trades
    .filter((el, index) => el[1] == "LONG-BTC" || el[1] == "SHORT-BTC")
    .map((el) => el[7])
    .reduce((a, b) => a + b, 0);
  let dogeperpProfitLoss = props.trades
    .filter((el, index) => el[1] == "LONG-DOGE" || el[1] == "SHORT-DOGE")
    .map((el) => el[7])
    .reduce((a, b) => a + b, 0);
  let btcperpPerc = props.trades
    .filter((el, index) => el[1] == "LONG-BTC" || el[1] == "SHORT-BTC")
    .map((el) => el[8])
    .reduce((a, b) => a + b, 0);
  let dogeperpPerc = props.trades
    .filter((el, index) => el[1] == "LONG-DOGE" || el[1] == "SHORT-DOGE")
    .map((el) => el[8])
    .reduce((a, b) => a + b, 0);
  console.log(btcperpProfitLoss);
  return (
    <>
      <div className="jupiter__details-container" onClick={handleToggleTrades}>
        <div className="jupiter__crypto-logo">
          <label>
            <div>{props.logo}</div>
            <div>{props.name}</div>
          </label>
        </div>
        <div className="jupiter__crypto-container">
          <div className="jupiter__crypto-card">
            <div>holding:</div>
            {props.invested < props.holding ? (
              <div className="jupiter__black-profit">
                $ {props.holding}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {((props.holding * 100) / props.invested - 100).toFixed(2)}%
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                $ {props.holding}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {((props.holding * 100) / props.invested - 100).toFixed(2)}%
                </small>
              </div>
            )}
          </div>
          <div className="jupiter__crypto-card">
            <div>invested: </div>
            <div className="jupiter__black">$ {props.invested}</div>
          </div>
          <div className="jupiter__crypto-card">
            <div>BTCPERP: </div>
            {btcperpProfitLoss > 0 ? (
              <div className="jupiter__black-profit">
                $ {btcperpProfitLoss.toFixed(2)}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {btcperpPerc.toFixed(2)}%
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                $ {btcperpProfitLoss.toFixed(2)}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {btcperpPerc.toFixed(2)}%
                </small>
              </div>
            )}
          </div>
          <div className="jupiter__crypto-card">
            <div>DOGEPERP: </div>
            {dogeperpProfitLoss > 0 ? (
              <div className="jupiter__black-profit">
                $ {dogeperpProfitLoss.toFixed(2)}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {dogeperpPerc.toFixed(2)}%
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                $ {dogeperpProfitLoss.toFixed(2)}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {dogeperpPerc.toFixed(2)}%
                </small>
              </div>
            )}
          </div>
          <div className="jupiter__crypto-card">
            <div>CUMULATIVE: </div>
            {dogeperpProfitLoss + btcperpProfitLoss > 0 ? (
              <div className="jupiter__black-profit">
                $ {(btcperpProfitLoss + dogeperpProfitLoss).toFixed(2)}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {(btcperpPerc + dogeperpPerc).toFixed(2)}%
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                $ {(btcperpProfitLoss + dogeperpProfitLoss).toFixed(2)}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {(btcperpPerc + dogeperpPerc).toFixed(2)}%
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsUSD;
