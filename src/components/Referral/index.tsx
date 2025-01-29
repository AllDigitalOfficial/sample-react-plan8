const Referral = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_BG_COLOR || "#FFFFFF0B"; // Default background color
  const textColor = import.meta.env.VITE_APP_REFERRAL_TEXT_COLOR || "#ffffff"; // Default text color
  const cardBgColor = import.meta.env.VITE_APP_REFERRAL_CARD_BG_COLOR || "transparent"; // Default card background color
  const cardTextColor =
    import.meta.env.VITE_APP_REFERRAL_CARD_TEXT_COLOR || "#ffffff"; // Default card text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#FFCC00FF"; // Default button text color
  const buttonHoverColor =
    import.meta.env.VITE_APP_BUTTON_HOVER_COLOR || "#0056b3"; // Default button hover color

  return (
    <div className="roadmap-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="referral">
          <h2 className="mb-4" style={{ color: buttonTextColor , textAlign: 'center'}}>
            Referral
          </h2>

          {/* Referral Link Section */}
          <div className="d-flex align-items-center justify-content-center mb-4">
            <span
              id="referralLink"
              className="fs-5 text-muted"
              style={{ color: 'FFCC00FF' }}
            >
              <h6  style={{ color: '#ffffff' }}>You will get your ref link after investing...</h6>
            </span>
            <button
              id="copyButton"
              className="btn btn-outline-primary ms-3"
              style={{
                borderColor: '#FFCC00FF',
                color: '#FFCC00FF',
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  buttonHoverColor;
                (e.target as HTMLButtonElement).style.color = "#FFCC00FF";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "transparent";
                (e.target as HTMLButtonElement).style.color = "#FFCC00FF";
              }}
            >
              Copy
            </button>
          </div>

          {/* Referral Stats Section */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <div
                className="card shadow-sm p-3"
                style={{ backgroundColor: cardBgColor, color: cardTextColor , textAlign: 'center'}}
              >
                <h3>Total Reward</h3>
                <p id="usertotalreferralbonus" className="fs-4 fw-bold" style={{ textAlign: 'center', color: buttonTextColor }}>
                  0.000 < span style={{color: cardTextColor}}> BNB </span>
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div
                className="card shadow-sm p-3"
                style={{ backgroundColor: cardBgColor, color: cardTextColor, textAlign: 'center' }}
              >
                <h3>Total Referral</h3>
                <p id="countdownline" className="fs-4 fw-bold" style={{color: buttonTextColor, textAlign: 'center'}}>
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
