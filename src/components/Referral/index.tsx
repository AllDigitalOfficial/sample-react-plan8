import { useState } from 'react';
import { Toast, ToastContainer, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Referral = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_BG_COLOR || "#FFFFFF0B"; // Default background color
  const textColor = import.meta.env.VITE_APP_REFERRAL_TEXT_COLOR || "#ffffff"; // Default text color
  const cardBgColor = import.meta.env.VITE_APP_REFERRAL_CARD_BG_COLOR || "transparent"; // Default card background color
  const NotificationbgColor = import.meta.env.VITE_APP_NOTIFICATION_BG_COLOR || "#008000FF"; // Default notification background color
  const Linktext = import.meta.env.VITE_APP_LINK_TEXT || "Link copied to clipboard!"; // Default notification background color
  const cardTextColor = import.meta.env.VITE_APP_REFERRAL_CARD_TEXT_COLOR || "#ffffff"; // Default card text color
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#FFCC00FF"; // Default button text color
  const buttonHoverColor = import.meta.env.VITE_APP_BUTTON_HOVER_COLOR || "#0056b3"; // Default button hover color

  const [showToast, setShowToast] = useState(false);

  const handleCopyClick = () => {
    // Copy referral link logic here
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide toast after 3 seconds
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
            <Button
              id="copyButton"
              variant="outline-primary"
              className="ms-3"
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
            </Button>
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
      <ToastContainer className="p-3 position-fixed bottom-0 end-0">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide style={{ width: '250px', height: '40px' }}>
          <Toast.Body style={{ backgroundColor: NotificationbgColor, color: textColor, display: 'flex' }}>
            {Linktext}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Referral;