const ReferralLinkData = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_LINK_BG_COLOR || "#FFFFFF0B"; // Default background color
  const subbgColor = "#FFFFFF33"
  const textColor = import.meta.env.VITE_APP_REFERRAL_LINK_TEXT_COLOR || "#ffffff"; // Default text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const totalDepositColor =
    import.meta.env.VITE_APP_TOTAL_DEPOSIT_COLOR || "#000000"; // Default color for Total Deposit card
  const totalWithdrawnColor =
    import.meta.env.VITE_APP_TOTAL_WITHDRAWN_COLOR || "#000000"; // Default color for Total Withdrawn card
  const returnsColor = import.meta.env.VITE_APP_RETURNS_COLOR || "#000000"; // Default color for Returns card
  const interestRateColor =
    import.meta.env.VITE_APP_INTEREST_RATE_COLOR || "#000000"; // Default color for Interest Rate card
  const rateColor = import.meta.env.VITE_APP_RATE_COLOR || "#007bff"; // Default color for rate text
  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          {/* Left Side: One Large Card */}
          <div className="col-lg-12 mb-4">
            <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
              <div className="profit-section mb-4">
                <h2 className="title" style={{ color: textColor, textAlign: 'center' }}>
                  Your Income
                </h2>
                <div className="profit-info">
                  <p
                    id="depositUser"
                    className="fs-4 fw-bold"
                    style={{ color: '#FFCC00FF', textAlign: 'center' }}
                  >
                    0.000 <span className="text-muted" style={{ color: '#FFCC00FF'}}>BNB</span>
                  </p>
                  
                </div>
              </div>

              {/* Referral Amount Section */}
              <div className="referral-section mb-4">
                <h3 className="title" style={{ color: textColor, textAlign: 'center' }}>
                  Referral Amount Available
                </h3>
                <div className="referral-info">
                  <p
                    id="userAvailabereferralbonus"
                    className="fs-4 fw-bold text-muted"
                    style={{ color: textColor, textAlign: 'center' }}
                  >
                    0.000 <span className="text-muted" style={{ color: '#FFCC00FF'}}>BNB</span>
                  </p>
                </div>
              </div>

              {/* User Dividends Section */}
              <div className="dividends-section">
                <h3 className="title" style={{ color: textColor, textAlign: 'center' }}>
                  User Dividends Available
                </h3>
                <div className="dividends-info">
                  <p
                    id="userDivident"
                    className="fs-4 fw-bold text-muted"
                    style={{ color: textColor, textAlign: 'center' }}
                  >
                    0.000 <span className="text-muted" style ={{color: textColor}}>BNB</span>
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}> 
                    <button
                      id="withdraw-button"
                      className="btn"
                      style={{ backgroundColor: buttonColor, color: "#fff", textAlign: 'center' }}
                      >
                      Withdrawal
                    </button>
              </div>
            </div>
          </div>
          

          {/* Right Side: Four State Cards */}
          <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {/* Box 1: Total Deposit */}
              <div className="col">
                <div
                  className="card shadow-sm p-3"
                  style={{ borderColor: totalDepositColor }}
                >
                  <h4 className="title" style={{ color: totalDepositColor, textAlign: 'center' }}>
                    Total Deposit
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="userDeposits"
                      className="rate fs-4 fw-bold"
                      style={{ color: totalDepositColor, textAlign: 'center' }}
                    >
                      0.000
                    </h4>
                  </div>
                </div>
              </div>

              {/* Box 2: Your Returns */}
              <div className="col">
                <div
                  className="card shadow-sm p-3"
                  style={{ borderColor: returnsColor }}
                >
                  <h4 className="title" style={{ color: returnsColor, textAlign: 'center' }}>
                    Your Returns
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="profit"
                      className="rate fs-4 fw-bold"
                      style={{ color: returnsColor, textAlign: 'center' }}
                    >
                      0.000
                    </h4>
                  </div>
                </div>
              </div>

              {/* Box 3: Total Withdrawn */}
              <div className="col">
                <div
                  className="card shadow-sm p-3"
                  style={{ borderColor: totalWithdrawnColor }}
                >
                  <h4 className="title" style={{ color: totalWithdrawnColor, textAlign: 'center' }}>
                    Total Withdrawn
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="totalUserTotalWithdrawn"
                      className="rate fs-4 fw-bold"
                      style={{ color: totalWithdrawnColor, textAlign: 'center' }}
                    >
                      0.000
                    </h4>
                  </div>
                </div>
              </div>

              {/* Box 4: Interest Rate */}
              <div className="col">
                <div
                  className="card shadow-sm p-3"
                  style={{ borderColor: interestRateColor }}
                >
                  <h4 className="title" style={{ color: interestRateColor, textAlign: 'center' }}>
                    Interest Rate
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="interestRate"
                      className="rate fs-4 fw-bold"
                      style={{ color: interestRateColor, textAlign: 'center' }}
                    >
                      0.000
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkData;
