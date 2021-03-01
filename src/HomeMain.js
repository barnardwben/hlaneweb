import React, { useState } from "react";
import Pie from "./Pie";
import "./HomeMain.css";

const HomeMain = () => {
  const [state, setState] = useState({
    homePrice: 250000,
    downPayment: 50000,
    mortgageInterestRate: 4.25,
    loanType: "30-yearfixed",
    annualPropertyTax: 1.0,
    annualHomeownersIns: 1300,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  let loan = state.homePrice - state.downPayment;
  let interest = state.mortgageInterestRate / 100 / 12;
  let payments;

  if (state.loanType === "30-yearfixed") {
    payments = 30 * 12;
  } else if (state.loanType === "15-yearfixed") {
    payments = 15 * 12;
  }

  let annualIns = state.annualHomeownersIns / 12;

  let monthlyTots =
    (loan * interest * Math.pow(1 + interest, payments)) /
    (Math.pow(1 + interest, payments) - 1);

  let monthlyPropTax = (state.homePrice * (state.annualPropertyTax / 100)) / 12;

  let data = [
    {
      label: `Mortgage Payment (P&I) $${Math.round(monthlyTots)}`,
      value: Math.round(monthlyTots),
      color: "#AFDF2C",
    },
    {
      label: `Taxes & Other Fees $${Math.round(monthlyPropTax)}`,
      value: Math.round(monthlyPropTax),
      color: "#0A4045",
    },
    {
      label: `Home Insurance $${Math.round(annualIns)}`,
      value: Math.round(annualIns),
      color: "#00C2D1",
    },
  ];

  return (
    <>
      <main className="home-main">
        <h2 className="home-main-header">
          Going beyond the standard of excellence to offer you unparrelled
          results
        </h2>
        <hr className="hmh-hr" />
        <section className="hmain-section-one">
          <div className="left-grid-one">
            <p className="home-main-paras">
              I believe that everything boils down to the human connection and
              in everything I do, I honor these relationships. I do this through
              honest communication, removing unknowns, and constant growth to
              benefit my clients. Helping people to buy or sell their home is
              the way I get to fulfill my passion of genuine connection! I
              prioritize your underlying goals with a direct, hands-on approach.
              My relationships with clients last long after the close of the
              sale, and it is that underlying philosophy that drives my worth
              ethic and the success of my business.
            </p>
          </div>
          <div className="right-grid-one">
            <img
              src="https://ververealty.com/wp-content/uploads/2021/01/Hanah-Lane-300x224-1.jpg"
              alt="Hannah Lane Saint Paul Minneapolis Realtor"
              className="hannah-image"
            />
          </div>
          <div className="left-grid-two">
            <p className="home-main-paras">
              I bim to bridge the gap between Real Estate and Wellness for my
              buyers and sellers in San Francisco and Marin. My background in
              Nutrition & Functional Medicine has taught me there are many
              underlying similarities. Identifying the root cause or goal is the
              way to move forward successfully. I help my clients to identify
              their underlying goals for buying or selling, and diligently
              manage the process from start to finish, so you can remain
              clear-headed, healthy, and well.
            </p>
          </div>
          <div className="right-grid-two">
            <p className="home-main-paras">
              Shbuld we work together? If this speaks to you, give me a call or
              send me a note. I look forward to hearing from you! In the
              meantime, I invite you to explore San Francisco and Marin market
              insights and read about some of my favorite topics on the blog:
              Nutrition + Neighborhoods. Follow along on Instagram to see
              beautiful property and nutritious finds across San Francisco,
              Marin, and the globe.
            </p>
          </div>
        </section>
        <section className="hmain-section-two">
          <div className="form-section-container">
            <p className="enter-details-para">
              Find out an estimate of your pontential monthly mortgage payment
              by filling in the details below. Results include taxes, fees, and
              insurance.
            </p>
            <form className="mortgage-form">
              <label htmlFor="hprice">
                Home Price
                <input
                  id="hprice"
                  type="number"
                  name="homePrice"
                  max="5000000"
                  min="10000"
                  step={
                    state.homePrice <= 495000
                      ? "5000"
                      : state.homePrice < 1000001
                      ? "50000"
                      : state.homePrice < 4000000
                      ? "500000"
                      : "25000"
                  }
                  placeholder="250,000"
                  value={state.homePrice}
                  onChange={handleChange}
                />
                <input
                  className="range-width"
                  type="range"
                  name="homePrice"
                  step={
                    state.homePrice <= 495000
                      ? "5000"
                      : state.homePrice < 1000001
                      ? "50000"
                      : state.homePrice < 4000000
                      ? "500000"
                      : "25000"
                  }
                  min="10000"
                  max="5000000"
                  value={state.homePrice}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="dpayment">
                Down Payment
                <input
                  id="dpayment"
                  type="number"
                  name="downPayment"
                  max="5000000"
                  min="0"
                  step={
                    state.downPayment < 500000
                      ? "5000"
                      : state.downPayment < 1000000
                      ? "50000"
                      : state.downPayment < 4000000
                      ? "500000"
                      : "10000"
                  }
                  value={state.downPayment}
                  onChange={handleChange}
                />
                <input
                  className="range-width"
                  type="range"
                  name="downPayment"
                  step={
                    state.downPayment < 500000
                      ? "5000"
                      : state.downPayment < 1000000
                      ? "50000"
                      : state.downPayment < 4000000
                      ? "500000"
                      : "10000"
                  }
                  min="0"
                  max="5000000"
                  value={state.downPayment}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="">
                Mortgage Interest Rate
                <input
                  type="number"
                  name="mortgageInterestRate"
                  max="12"
                  min="1"
                  step=".04"
                  value={state.mortgageInterestRate}
                  onChange={handleChange}
                />
                <input
                  className="range-width"
                  type="range"
                  name="mortgageInterestRate"
                  step=".04"
                  min="1"
                  max="12"
                  value={state.mortgageInterestRate}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Loan Type
                <select
                  name="loanType"
                  value={state.loanType}
                  onChange={handleChange}
                >
                  <option value="30-yearfixed">30-Year Fixed</option>
                  <option value="15-yearfixed">15-Year Fixed</option>
                </select>
              </label>
              <label htmlFor="">
                Annual Property Tax
                <input
                  type="number"
                  name="annualPropertyTax"
                  max="5.01"
                  min="0"
                  step=".03"
                  value={state.annualPropertyTax}
                  onChange={handleChange}
                />
                <input
                  className="range-width"
                  type="range"
                  name="annualPropertyTax"
                  step=".03"
                  min="0"
                  max="5.01"
                  value={state.annualPropertyTax}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Annual Homeowners Insurance
                <input
                  type="number"
                  name="annualHomeownersIns"
                  max="15000"
                  min="0"
                  step="50"
                  value={state.annualHomeownersIns}
                  onChange={handleChange}
                />
                <input
                  className="range-width"
                  type="range"
                  name="annualHomeownersIns"
                  step="50"
                  min="0"
                  max="15000"
                  value={state.annualHomeownersIns}
                  onChange={handleChange}
                />
              </label>
            </form>
          </div>
          <div className="graph-section-container">
            <h3 className="graph-h3">Total Monthly Payment Breakdown</h3>
            <p className="graph-para">
              Based on a ${state.homePrice - state.downPayment} mortgage
            </p>
            <div className="graph-grid">
              <div className="annIns-container">
                <p className="annIns-para">
                  Home <br /> Insurance <br />
                  <span className="annIns-permonth">
                    ${Math.round(annualIns)}
                  </span>
                </p>
              </div>
              <Pie
                className="Pie"
                innerRadius={85}
                outerRadius={130}
                data={data}
              />
              <div className="total-container">
                <div className="total-permonth">
                  ${Math.round(monthlyTots + annualIns + monthlyPropTax)}
                </div>
              </div>
              <div className="mortgage-price-container">
                <p className="mortgage-para">
                  Mortgage <br /> Payment(P&I) <br />
                  <span className="mortgage-permonth">
                    ${Math.round(monthlyTots)}
                  </span>
                </p>
              </div>
              <div className="tax-container">
                <p className="tax-para">
                  Taxes <br /> & Other Fees <br />
                  <span className="tax-permonth">
                    ${Math.round(monthlyPropTax)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeMain;
