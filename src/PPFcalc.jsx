import React, { useState } from "react";
import DonutChart from './DonutChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

const PPFcalc = () => {
  const [principal, setPrincipal] = useState(10000);
  const [time, setTime] = useState(15);
  const rate = parseFloat(import.meta.env.VITE_API_INTEREST_RATE) / 100;
  const [error, setError] = useState('');
  


  const ci = (amt, n) => {
    return amt * (1 + rate) ** n;
  };

  const handlePrincipalChange = (e) => {
    const value = e.target.value;
    setPrincipal(value);

    if (value < 500) {
      setError('Minumum value 500');
    } else if (value > 150000) {
      setError('Maximum value 150000');
    } else {
      setError('');
    }
    console.log(error);
  };
  
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const formatCurrency = (amt) => {
    return Intl.NumberFormat("en-IN").format(Math.round(amt));
  };

  let maturityAmount = 0;

  for (let i = 1; i <= time; i++) {
    maturityAmount += ci(principal, i);
  }

  const totalInvestedAmount = principal * time;
  const totalInterest = maturityAmount - totalInvestedAmount;

  
  return (
    <div className="m-3">
      <h2 className="mb-3 text-center">PPF Calculator</h2>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>Yearly investment</div>
              <div className={`input-container ${error ? 'error' : ''}`}>
              <div className="tooltip-container">
  {error && (
    <div className={`tooltip error-tooltip ${error ? 'show' : ''}`} data-bs-toggle="tooltip" title={error}>
      <span className="icon-container">
        <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
      </span>
      <span className="error-message"> {error}</span>
    </div>
  )}
</div>
              <div className="green p-1">
                <span className="me-3">₹</span>
                <input
                  type="number"
                  className="green number"
                  value={principal}
                  onChange={handlePrincipalChange}
                  min={500}
                  max={150000}
                  step={500}
                  data-bs-toggle="tooltip"
                  title={error}
                />
              </div>
            </div>
            </div>
            <div className="mb-5">
              <input
                type="range"
                className="form-range"
                id="customRange"
                name="points"
                value={principal}
                onChange={handlePrincipalChange}
                min={500}
                max={150000}
                step={500}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>Time period (in years)</div>
              <div className="green p-1">
                <span className="green number">{time} Yr</span>
              </div>
            </div>
            <div className="mb-5">
              <input
                type="range"
                className="form-range"
                id="customRange"
                name="points"
                value={time}
                onChange={handleTimeChange}
                min={15}
                max={50}
                step={1}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div>Rate of interest</div>
              <div className="bg-light p-2">{rate * 100}%</div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>Invested amount</div>
              <div className="bg-light p-2">
                ₹{formatCurrency(totalInvestedAmount)}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>Total Interest</div>
              <div className="bg-light p-2">
                ₹{formatCurrency(totalInterest)}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>Maturity Value</div>
              <div className="bg-light p-2">
                ₹{formatCurrency(maturityAmount)}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <DonutChart
              total_investment={totalInvestedAmount}
              total_interest={totalInterest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPFcalc;
