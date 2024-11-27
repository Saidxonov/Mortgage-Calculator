import { useState } from "react";
import "./App.css";
import euro from "./images/euro.svg";
import foiz from "./images/foiz.svg";
import calculator from "./images/calculator.svg";

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");
  const [totalRepayment, setTotalRepayment] = useState("0.00");

  function handleClick(event) {
    event.preventDefault();
    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate) / 100 / 12;
    const payments = parseFloat(term) * 12;
    if (principal > 0 && interestRate > 0 && payments > 0) {
      const x = Math.pow(1 + interestRate, payments);
      const monthly = (principal * x * interestRate) / (x - 1);
      const total = monthly * payments;

      setMonthlyPayment(monthly.toFixed(2));
      setTotalRepayment(total.toFixed(2));
    } else {
      setMonthlyPayment("0.00");
      setTotalRepayment("0.00");
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="card">
            <div className="left-side">
              <div className="left-side-content">
                <h1>Mortgage Calculator</h1>
                <button
                  onClick={() => {
                    setAmount("");
                    setTerm("");
                    setRate("");
                    setMonthlyPayment("0.00");
                    setTotalRepayment("0.00");
                  }}
                >
                  Clear All
                </button>
              </div>
              <div className="form">
                <form>
                  <div className="amount">
                    <p>Mortgage Amount</p>
                    <label className="mor-amount" htmlFor="amount-mortage">
                      <img src={euro} alt="" />
                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        id="amount-mortage"
                      />
                    </label>
                  </div>
                  <div className="term-rate">
                    <div className="term">
                      <p>Mortgage Term</p>
                      <label className="term-mor" htmlFor="term">
                        <input
                          value={term}
                          onChange={(e) => setTerm(e.target.value)}
                          type="number"
                          id="term"
                        />
                        <p>years</p>
                      </label>
                    </div>
                    <div className="term">
                      <p>Interest Rate</p>
                      <label className="rated" htmlFor="rate">
                        <input
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                          type="number"
                          id="rate"
                        />
                        <img src={foiz} alt="" />
                      </label>
                    </div>
                  </div>
                  <div className="type">
                    <p className="type-text">Mortgage Type</p>
                    <div className="repayment">
                      <label className="repay">
                        <input type="radio" id="repay" />
                        <p>Repayment</p>
                      </label>
                      <label className="repay">
                        <input
                          className="interest"
                          type="radio"
                          id="interest"
                        />
                        <p>Interest Only</p>
                      </label>
                    </div>
                  </div>
                  <button onClick={handleClick} className="btn">
                    <img src={calculator} alt="" />
                    Calculate Repayments
                  </button>
                </form>
              </div>
            </div>
            <div className="right-side">
              <div className="default-content">
                <div className="result-content">
                  <h2>Your results</h2>
                  <p>
                    Your results are shown below based on the information you
                    provided. To adjust the results, edit the form and click
                    “calculate repayments” again.
                  </p>
                </div>
                <div className="result">
                  <div className="monthly">
                    <p>Your monthly repayments</p>
                    <h2>£{monthlyPayment}</h2>
                  </div>
                  <hr className="line" />
                  <div className="total">
                    <p>Total you'll repay over the term</p>
                    <h2>£{totalRepayment}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
