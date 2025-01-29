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

const cardData = [
  {
    title: "Your Income",
    value: "0.000 BNB",
    color: initialColors.subtextColor,
    bgColor: initialColors.subbgColor,
    textColor: initialColors.textColor,
  },
  {
    title: "Referral Amount Available",
    value: "",
    color: initialColors.subtextColor,
    bgColor: initialColors.subbgColor,
    textColor: initialColors.textColor,
  },
  {
    title: "Total Deposit",
    value: import.meta.env.VITE_APP_TOTAL_DEPOSIT || "0.000 BNB",
    color: initialColors.totalDepositColor,
    bgColor: initialColors.subbgColor,
    textColor: initialColors.textColor,
  },
  {
    title: "Total Withdrawn",
    value: import.meta.env.VITE_APP_TOTAL_WITHDRAWN || "0.000 BNB",
    color: initialColors.totalWithdrawnColor,
    bgColor: initialColors.subbgColor,
    textColor: initialColors.textColor,
  },
  {
    title: "Returns",
    value: import.meta.env.VITE_APP_RETURNS || "0.000 BNB",
    color: initialColors.returnsColor,
    bgColor: initialColors.subbgColor,
    textColor: initialColors.textColor,
  },
  {
    title: "Interest Rate",
    value: import.meta.env.VITE_APP_INTEREST_RATE || "0.000%",
    color: initialColors.interestRateColor,
    bgColor: initialColors.subbgColor,
    textColor: initialColors.textColor,
  },
];

const YourIncome = () => {
  const {
    bgColor,
  } = initialColors;

  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          {cardData.slice(0, 2).map((card, index) => (
            <div className="col-12 mb-4" key={index}>
              <div className="card shadow-sm p-4" style={{ backgroundColor: card.bgColor }}>
                <h4 className="title" style={{ color: card.textColor, textAlign: 'center' }}>
                  {card.title}
                </h4>
                {card.value && (
                  <p className="fs-4 fw-bold" style={{ color: card.color, textAlign: 'center' }}>
                    {card.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {cardData.slice(2).map((card, index) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
              <div className="card shadow-sm p-4" style={{ backgroundColor: card.bgColor }}>
                <h4 className="title" style={{ color: card.textColor, textAlign: 'center' }}>
                  {card.title}
                </h4>
                {card.value && (
                  <p className="fs-4 fw-bold" style={{ color: card.color, textAlign: 'center' }}>
                    {card.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourIncome;