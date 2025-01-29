const ContractData = () => {
  // Get color values from environment variables
  const contractBalanceColor =
    import.meta.env.VITE_APP_CONTRACT_BALANCE_COLOR || "#FFCC00FF"; // Default to green
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "transparent"; // Default to light gray
  const cardTextColor = import.meta.env.VITE_APP_CARD_TEXT_COLOR || "#ffffff"; // Default to black
  const cardBorderColor = import.meta.env.VITE_APP_CARD_BORDER_COLOR || "transparent"; // Default to light border color

  return (
    <div className="container py-5">
      {/*<div className="row mb-4">
        <div className="col-12">
          <div
            className="card p-4 shadow-sm"
            style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}
          >
            <h3 className="card-title mb-3" style={{ color: cardTextColor }}>
              Current Contract Balance
            </h3>
            <span
              id="contract-balance2"
              className="fs-4 fw-bold"
              style={{ color: contractBalanceColor }}
            >
              0.000 BNB
            </span>
          </div>
        </div>
      </div>*/}

      <div className="row g-4 d-flex align-items-stretch">
        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}
          >
            <h3 style={{ color: cardTextColor }}>Deposited</h3>
            <p id="total-deposits" className="fs-5 fw-bold" style={{ color: contractBalanceColor }}>
             <h1> 0 </h1>
            </p>
            <p style={{ color: cardTextColor }}>BNB</p>
            <i className="bi bi-wallet2 fs-3 text-primary"></i>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}
          >
            <h3 style={{ color: cardTextColor }}>Users</h3>
            <p id="total-users" className="fs-5 fw-bold" style={{ color: contractBalanceColor }}>
            <h1> 0 </h1>
            </p>
            <p style={{ color: cardTextColor }}>*approx</p>
            <i className="bi bi-person-circle fs-3 text-primary"></i>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}
          >
            <h3 style={{ color: cardTextColor }}>Withdrawn</h3>
            <p id="withdrawandata2" className="fs-5 fw-bold" style={{ color: contractBalanceColor }}>
            <h1> 0 </h1>
            </p>
            <p style={{ color: cardTextColor }}>BNB</p>
            <i className="bi bi-arrow-down-circle fs-3 text-primary"></i>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}
          >
            <h3 style={{ color: cardTextColor }}>Ref Rewards</h3>
            <p id="ref-rewards" className="fs-5 fw-bold" style={{ color: contractBalanceColor }}>
            <h1> 0 </h1>
            </p>
            <p style={{ color: cardTextColor }}>BNB</p>
            <i className="bi bi-gift fs-3 text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractData;
