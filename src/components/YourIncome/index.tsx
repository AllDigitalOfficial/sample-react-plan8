import React from "react";

const initialColors = {
  bgColor: import.meta.env.VITE_APP_REFERRAL_LINK_BG_COLOR || "#FFFFFF0B",
  subbgColor: import.meta.env.VITE_APP_REFERRAL_LINK_SUB_BG_COLOR || "transparent",
  textColor: import.meta.env.VITE_APP_REFERRAL_LINK_TEXT_COLOR || "#ffffff",
  subtextColor: import.meta.env.VITE_APP_REFERRAL_LINK_SUB_TEXT_COLOR || "#FFCC00FF",
  buttonColor: import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff",
  borderColor: import.meta.env.VITE_APP_REFERRAL_LINK_BORDER_COLOR || "transparent",
  totalDepositColor: import.meta.env.VITE_APP_TOTAL_DEPOSIT_COLOR || "#ffffff",
  totalWithdrawnColor: import.meta.env.VITE_APP_TOTAL_WITHDRAWN_COLOR || "#ffffff",
  returnsColor: import.meta.env.VITE_APP_RETURNS_COLOR || "#ffffff",
  interestRateColor: import.meta.env.VITE_APP_INTEREST_RATE_COLOR || "#ffffff",
  rateColor: import.meta.env.VITE_APP_RATE_COLOR || "#007bff",
};

const YourIncome = () => {
  const {
    bgColor,
    subbgColor,
    textColor,
    subtextColor,
    buttonColor,
    borderColor,
    totalDepositColor,
    totalWithdrawnColor,
    returnsColor,
    interestRateColor,
    rateColor,
  } = initialColors;

  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          {/* Left Side: One Large Card */}
          <div className="col-12 mb-4">
            <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
              <div className="profit-section mb-4">
                <h2 className="title" style={{ color: textColor, textAlign: 'center' }}>
                  Your Income
                </h2>
                <div className="profit-info">
                  <p
                    id="depositUser"
                    className="fs-4 fw-bold"
                    style={{ color: subtextColor, textAlign: 'center' }}
                  >
                    0.000 <span style={{ color: textColor }}>BNB</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Amount Section */}
          <div className="col-12 mb-4">
            <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
              <div className="referral-section mb-4">
                <h3 className="title" style={{ color: textColor, textAlign: 'center' }}>
                  Referral Amount Available
                </h3>
                {/* Add more content here if needed */}
              </div>
            </div>
          </div>

          {/* Right Side: Three Small Cards */}
          <div className="col-12">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
                  <h4 className="title" style={{ color: textColor, textAlign: 'center' }}>
                    Total Deposit
                  </h4>
                  <p className="fs-4 fw-bold" style={{ color: totalDepositColor, textAlign: 'center' }}>
                    0.000 BNB
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
                  <h4 className="title" style={{ color: textColor, textAlign: 'center' }}>
                    Total Withdrawn
                  </h4>
                  <p className="fs-4 fw-bold" style={{ color: totalWithdrawnColor, textAlign: 'center' }}>
                    0.000 BNB
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
                  <h4 className="title" style={{ color: textColor, textAlign: 'center' }}>
                    Returns
                  </h4>
                  <p className="fs-4 fw-bold" style={{ color: returnsColor, textAlign: 'center' }}>
                    0.000 BNB
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm p-4" style={{ backgroundColor: subbgColor }}>
                  <h4 className="title" style={{ color: textColor, textAlign: 'center' }}>
                    Interest Rate
                  </h4>
                  <p className="fs-4 fw-bold" style={{ color: interestRateColor, textAlign: 'center' }}>
                    0.000%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourIncome;