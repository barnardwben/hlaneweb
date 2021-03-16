import React, { useState, useRef, useEffect } from "react";
import Pie from "./Pie";
import "./HomeMain.css";
import { NavLink } from "react-router-dom";
import ContactBanner from "./ContactBanner";

const HomeMain = () => {
  const condoPhotoOneRef = useRef(null);
  const condoPhotoTwoRef = useRef(null);
  const condoParaRef = useRef(null);
  const iOneRef = useRef(null);
  const iTwoRef = useRef(null);
  const iThreeRef = useRef(null);
  const iFourRef = useRef(null);
  const iFiveRef = useRef(null);
  const iSixRef = useRef(null);
  const pOneRef = useRef(null);
  const pTwoRef = useRef(null);
  const pThreeRef = useRef(null);
  const pFourRef = useRef(null);
  const pFiveRef = useRef(null);
  const pSixRef = useRef(null);
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

  const condoScroll = () => {
    if (
      window.location.href === "https://hlane.netlify.app/" ||
      window.location.href === "https://www.hlanerealtor.com/"
    ) {
      if (window.scrollY > 500) {
        condoPhotoOneRef.current.classList.add("condoscroll");
        condoPhotoTwoRef.current.classList.add("condoscroll");
        condoPhotoOneRef.current.classList.remove("hideImage");
        condoPhotoTwoRef.current.classList.remove("hideImage");
      } else if (window.scrollY < 10) {
        condoPhotoOneRef.current.classList.remove("condoscroll");
        condoPhotoTwoRef.current.classList.remove("condoscroll");
        condoPhotoOneRef.current.classList.add("hideImage");
        condoPhotoTwoRef.current.classList.add("hideImage");
      }
      if (window.scrollY > 800) {
        condoParaRef.current.classList.add("parascroll");
        condoParaRef.current.classList.remove("hideImage");
      } else if (window.scrollY < 10) {
        condoParaRef.current.classList.remove("parascroll");
        condoParaRef.current.classList.add("hideImage");
      }
      if (window.scrollY > 1450) {
        iOneRef.current.classList.add("iOnescroll");
        iTwoRef.current.classList.add("iTwoscroll");
        iThreeRef.current.classList.add("iThreescroll");
        iFourRef.current.classList.add("iFourscroll");
        iFiveRef.current.classList.add("iFivescroll");
        iSixRef.current.classList.add("iSixscroll");

        setTimeout(() => {
          iOneRef.current.classList.remove("hideIcon");
        }, 100);
        setTimeout(() => {
          iTwoRef.current.classList.remove("hideIcon");
        }, 200);
        setTimeout(() => {
          iThreeRef.current.classList.remove("hideIcon");
        }, 300);
        setTimeout(() => {
          iFourRef.current.classList.remove("hideIcon");
        }, 400);
        setTimeout(() => {
          iFiveRef.current.classList.remove("hideIcon");
        }, 500);
        setTimeout(() => {
          iSixRef.current.classList.remove("hideIcon");
        }, 600);

        pOneRef.current.classList.add("pscroll");
        pTwoRef.current.classList.add("pscroll");
        pThreeRef.current.classList.add("pscroll");
        pFourRef.current.classList.add("pscroll");
        pFiveRef.current.classList.add("pscroll");
        pSixRef.current.classList.add("pscroll");

        setTimeout(() => {
          if (
            window.location.href === "https://hlane.netlify.app/" ||
            window.location.href === "https://www.hlanerealtor.com/"
          ) {
            pOneRef.current.classList.remove("hidePara");
            pTwoRef.current.classList.remove("hidePara");
            pThreeRef.current.classList.remove("hidePara");
            pFourRef.current.classList.remove("hidePara");
            pFiveRef.current.classList.remove("hidePara");
            pSixRef.current.classList.remove("hidePara");
          }
        }, 1000);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", condoScroll);

    return () => {
      window.removeEventListener("scroll", condoScroll);
    };
  });

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
        <section className="hmain-section-uno">
          <div className="hmainsecuno-flex">
            <NavLink to="/minneapolis">
              <div className="hideImage" ref={condoPhotoOneRef}>
                <div className="hover-div-one"></div>
                <img
                  src="hannahimages\minnbg.jpeg"
                  alt="Minneapolis Condo"
                  className="minCondo"
                />
              </div>
            </NavLink>
            <NavLink to="/st.paul">
              <div className="hideImage" ref={condoPhotoTwoRef}>
                <div className="hover-div-two"></div>
                <img
                  src="hannahimages\stpbg.jpeg"
                  alt="Saint Paul Condo"
                  className="stpCondo"
                />
              </div>
            </NavLink>
          </div>
          <p className="tester hideImage" ref={condoParaRef}>
            Living in the <br />
            Twin Cities is one of the best choices you can make as a home buyer.
            They offer all the better things a bigger city does - year round
            festivals, an emerging fast forward culture known for its welcoming
            communities, and a fantastic food scene that continues to grow.
            There's a reason Minnesota was ranked in the nation's top three
            happiest states to live. Click on the pictures above to view a list
            of the Condos the Verve team and I are involved with.
          </p>
        </section>
        <section className="hmain-section-two">
          <div className="services">
            <h3 className="services-header">
              Bringing Expert Services to the Table
            </h3>
            <p className="services-paragraph">
              A premium experience, made easier for you
            </p>
          </div>

          <div className="icon-container-grid">
            <div>
              <img
                src="hannahimages\address.png"
                alt="Address pin"
                className="six-icon hideIcon"
                ref={iOneRef}
              />
              <p ref={pOneRef} className="six-p hidePara">
                From work, to school and back home again. Providing you with the
                options to be nearby where you need to go.
              </p>
            </div>
            <div>
              <img
                src="hannahimages\phone-call.png"
                alt="Phone communications"
                className="six-icon hideIcon"
                ref={iTwoRef}
              />
              <p ref={pTwoRef} className="six-p hidePara">
                Remaining in the loop and staying connected by offering above
                and beyond communication from start to finish.
              </p>
            </div>
            <div>
              <img
                src="hannahimages\mortgage.png"
                alt="Real estate investing"
                className="six-icon hideIcon"
                ref={iThreeRef}
              />
              <p ref={pThreeRef} className="six-p hidePara">
                Optimized research on all locations so that your new home is
                less of a liability and more of an asset.
              </p>
            </div>
            <div>
              <img
                src="hannahimages\house-key.png"
                alt="Keys to new home"
                className="six-icon hideIcon"
                ref={iFourRef}
              />
              <p ref={pFourRef} className="six-p hidePara">
                Giving you fast results and helping you go from point A to point
                B with ease and simplicity.
              </p>
            </div>
            <div>
              <img
                src="hannahimages\building.png"
                alt="Home Security"
                className="six-icon hideIcon"
                ref={iFiveRef}
              />
              <p ref={pFiveRef} className="six-p hidePara">
                Security and safety. You and your families present and future
                well-being is the top priority.
              </p>
            </div>
            <div>
              <img
                src="hannahimages\layout.png"
                alt="List of Options"
                className="six-icon hideIcon"
                ref={iSixRef}
              />
              <p ref={pSixRef} className="six-p hidePara">
                Offering you an expansive list of options from expert vendors
                with an array of exclusive locations.
              </p>
            </div>
          </div>
        </section>
        <hr className="hmh-hr" />
        <h2 className="home-second-header">
          <span className="bolded-text">It's easy to get</span>
          <br /> lost in all the details of the housing market and it can start
          to make you feel like you'll never get your dream home. In reality, it
          just takes some planning. Why not start here by exploring my mortgage
          calculator? It's easy to use, and it will give you a clearer overview
          of what it will take to get <br />
          <span className="bolded-text">
            that place you've been dreaming of.
          </span>
        </h2>
        <section className="hmain-section-tres">
          <div className="hmain-section-three">
            <div className="graph-section-container GSC">
              <h3 className="graph-h3">Total Monthly Payment Breakdown</h3>
              <p className="graph-para">
                Based on a ${state.homePrice - state.downPayment} mortgage
              </p>
              <div className="graph-grid GG">
                <div className="Pie">
                  <Pie innerRadius={105} outerRadius={150} data={data} />
                  <div className="total-container">
                    <div className="total-permonth">
                      ${Math.round(monthlyTots + annualIns + monthlyPropTax)}
                      /mo. <br /> Total
                    </div>
                  </div>
                  <div className="costs-container">
                    <div className="annIns-container m-box">
                      <p className="annIns-para">
                        Home <br /> Insurance <br />
                        <span className="annIns-permonth">
                          ${Math.round(annualIns)}
                        </span>
                      </p>
                    </div>
                    <div className="mortgage-price-container m-box">
                      <p className="mortgage-para">
                        Mortgage <br /> Payment(P&I) <br />
                        <span className="mortgage-permonth">
                          ${Math.round(monthlyTots)}
                        </span>
                      </p>
                    </div>
                    <div className="tax-container m-box">
                      <p className="tax-para">
                        Taxes <br /> & Other Fees <br />
                        <span className="tax-permonth">
                          ${Math.round(monthlyPropTax)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section-container FSC">
              <p className="enter-details-para EDT">
                Find out an estimate of your pontential monthly mortgage payment
                by filling in the details below. Results include taxes, fees,
                and insurance.
              </p>
              <form className="mortgage-form MF">
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
                  <span className="percentage"> %</span>
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
                  <span className="percentage"> %</span>
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
          </div>
        </section>
        <ContactBanner />
      </main>
    </>
  );
};

export default HomeMain;
