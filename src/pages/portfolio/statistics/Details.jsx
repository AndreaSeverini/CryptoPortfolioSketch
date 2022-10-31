import React from "react";

import { FaBitcoin } from "react-icons/fa";
import { BsFillForwardFill } from "react-icons/bs";
import "./details.css";

const Details = (props) => {
  function handleToggleTrades() {
    if (props.toggle == false) props.onTrades();
    if (props.toggle == true) props.offTrades();
  }

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
            <div>price: </div>
            <div className="jupiter__black">$ {props.price}</div>
          </div>
          <div className="jupiter__crypto-card">
            <div>holding:</div>
            {props.invested < props.holding ? (
              <div className="jupiter__black-profit">
                {" "}
                {props.holding}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {((props.holding * 100) / props.invested - 100).toFixed(2)}%
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                {" "}
                {props.holding}
                <small>
                  <BsFillForwardFill color="##000" size={12} />
                  {((props.holding * 100) / props.invested - 100).toFixed(2)}%
                </small>
              </div>
            )}
          </div>
          <div className="jupiter__crypto-card">
            <div>invested: </div>
            <div className="jupiter__black-normal">
              {" "}
              {props.invested}
              <small>
                <BsFillForwardFill color="##000" size={12} />${" "}
                {props.investedUSD}
              </small>
            </div>
          </div>
          <div className="jupiter__crypto-card">
            <div>normal PAC: </div>
            {props.normalPAC > props.investedUSD ? (
              <div className="jupiter__black-profit">
                $ {props.normalPAC}
                <small>
                  <BsFillForwardFill color="#000" size={12} />
                  {((props.normalPAC * 100) / props.investedUSD - 100).toFixed(
                    2
                  )}
                  %
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                $ {props.normalPAC}
                <small>
                  <BsFillForwardFill color="#000" size={12} />
                  {((props.normalPAC * 100) / props.investedUSD - 100).toFixed(
                    2
                  )}
                  %
                </small>
              </div>
            )}
          </div>
          <div className="jupiter__crypto-card">
            <div>Jupiter PAC: </div>
            {props.jupiterPAC > props.investedUSD ? (
              <div className="jupiter__black-profit">
                $ {props.jupiterPAC}
                <small>
                  <BsFillForwardFill color="#000" size={12} />
                  {((props.jupiterPAC * 100) / props.investedUSD - 100).toFixed(
                    2
                  )}
                  %
                </small>
              </div>
            ) : (
              <div className="jupiter__black-loss">
                $ {props.jupiterPAC}
                <small>
                  <BsFillForwardFill color="#000" size={12} />
                  {((props.jupiterPAC * 100) / props.investedUSD - 100).toFixed(
                    2
                  )}
                  %
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
