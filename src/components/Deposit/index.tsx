import './Deposit.css';
const Deposit = () => {
  // Get environment variable values
  const depositBgColor = import.meta.env.VITE_APP_DEPOSIT_BG_COLOR || "#FFFFFF0B";
  const depositTextColor =
    import.meta.env.VITE_APP_DEPOSIT_TEXT_COLOR || "#ffffff";
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#FF8C00FF";
  const minDeposit = import.meta.env.VITE_APP_MIN_DEPOSIT || 0.05;
  const maxDeposit = import.meta.env.VITE_APP_MAX_DEPOSIT || 1000;
  const perDayIncome = import.meta.env.VITE_APP_DEPOSIT_INCOME || 0.0;
  const percentRate = import.meta.env.VITE_APP_PERCENT_RATE || 0;
  const totalIncome = import.meta.env.VITE_APP_TOTAL_INCOME || 0.0;
  const handleDepositClick = () => {
    alert('Please install MetaMask or another Ethereum wallet extension to proceed.');
  };

  return (
    <div
      id="deposit"
      className="deposit-area py-5"
      style={{ backgroundColor: depositBgColor }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="deposit-content" style={{ backgroundColor: 'grey', padding: '70px', borderRadius: '20px' }}>
              <div className="section-title mb-3">
                <h2 style={{ color: depositTextColor, textAlign: 'center', marginBottom: '50px' }}> Make New Deposit</h2>
                <p></p>
                <h5 style={{ color: depositTextColor, textAlign: 'center', marginBottom: '30px' }}>Enter Amount:</h5>
              </div>
              <p ></p>
              <div className="deposit-form">
                <div className="input-group mb-3" style={{ height: "50px" }}>
                  <input
                    id="depositAmount"
                    type="number"
                    className="form-control"
                    placeholder="0.000"
                    style={{ height: "100%" }}
                    min="0.00"
                    step="0.01"
                  />
                  <span className="input-group-text" style={{ height: "100%" }}>
                    BNB
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    id="sendTransaction"
                    className="btn"
                    style={{
                    backgroundColor: buttonColor,
                    color: "#fff",
                    width: "50%",
                    marginBottom: "1rem",
                    }}
                    onClick={handleDepositClick}
                  >
                    Make Deposit
                  </button>
                </div>
                <div className="limits text-muted">
                  <h6 style={{color: depositTextColor, textAlign: "center"}} ><p> *Minimum {minDeposit} BNB ~ Maximum {maxDeposit} BNB</p></h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12" >
            <div className="summary-cards">
              <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
                <div className="card-body text-center" >
                  <h4 style={{ color: buttonColor }}>Per Day</h4>
                  <p id="perDayIncome" className="fs-4 fw-bold" style={{ color: depositTextColor }}>
                    {perDayIncome} BNB
                  </p>
                </div>
              </div>
              <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
                <div className="card-body text-center">
                  <h4 style={{ color: buttonColor }}>Percent Rate</h4>
                  <p className="fs-4 fw-bold" style={{ color: depositTextColor }}>
                    <span id="base-percentage">{percentRate}%</span>
                  </p>
                </div>
              </div>
              <div className="card shadow-sm" style={{ backgroundColor: 'transparent' }}>
                <div className="card-body text-center">
                  <h4 style={{ color: buttonColor }}>Total Income</h4>
                  <p id="totalIncome" className="fs-4 fw-bold" style={{ color: depositTextColor }}>
                    {totalIncome} BNB
                  </p>
                  <small style={{ color: depositTextColor }}>
                    * Withdrawal at any time you want!
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
