import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Referral = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_BG_COLOR || "#FFFFFF0B"; // Default background color
  const textColor = import.meta.env.VITE_APP_REFERRAL_TEXT_COLOR || "#ffffff"; // Default text color
  const cardBgColor = import.meta.env.VITE_APP_REFERRAL_CARD_BG_COLOR || "transparent"; // Default card background color
  const NotificationbgColor = import.meta.env.VITE_APP_NOTIFICATION_BG_COLOR || "#008000FF"; // Default notification background color
  const Linktext = import.meta.env.VITE_APP_LINK_TEXT || "Link copied to clipboard!"; // Default notification background color
  const cardTextColor = import.meta.env.VITE_APP_REFERRAL_CARD_TEXT_COLOR || "#ffffff"; // Default card text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#FFCC00FF"; // Default button text color
  const buttonHoverColor = import.meta.env.VITE_APP_BUTTON_HOVER_COLOR || "#0056b3"; // Default button hover color

  const handleCopyClick = () => {
    // Copy referral link logic here
    toast.success(Linktext, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: NotificationbgColor, color: cardTextColor },
    });
  };

  return (
    <div className="roadmap-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="referral">
          <h2 className="mb-4" style={{ color: buttonTextColor, textAlign: 'center' }}>
            Referral
          </h2>

          {/* Referral Link Section */}
          <div className="d-flex align-items-center justify-content-center mb-4">
            <span
              id="referralLink"
              className="fs-5 text-muted"
              style={{ color: '#FFCC00FF' }}
            >
              <h6 style={{ color: '#ffffff' }}>You will get your ref link after investing...</h6>
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
                (e.target as HTMLButtonElement).style.backgroundColor = buttonHoverColor;
                (e.target as HTMLButtonElement).style.color = "#FFCC00FF";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.target as HTMLButtonElement).style.color = "#FFCC00FF";
              }}
              onClick={handleCopyClick}
            >
              Copy
            </button>
          </div>

          {/* Total Reward Section */}
          <div className="card shadow-sm p-4 mb-4" style={{ backgroundColor: cardBgColor }}>
            <h3 className="title" style={{ color: buttonTextColor, textAlign: 'center' }}>
              Total Reward
            </h3>
            <p className="fs-4 fw-bold" style={{ color: cardTextColor, textAlign: 'center' }}>
              0.000 BNB
            </p>
          </div>

          {/* Total Referral Section */}
          <div className="card shadow-sm p-4 mb-4" style={{ backgroundColor: cardBgColor }}>
            <h3 className="title" style={{ color: buttonTextColor, textAlign: 'center' }}>
              Total Referral
            </h3>
            <p className="fs-4 fw-bold" style={{ color: cardTextColor, textAlign: 'center' }}>
              0
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Referral;