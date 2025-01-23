import { Container } from "react-bootstrap";

const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR || "#f8f9fa"; // Default background color
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR || "#000000"; // Default text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonOutlineColor =
    import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR || "#007bff"; // Default outline button color
  const contractBalanceColor =
    import.meta.env.VITE_APP_CONTRACT_BALANCE_COLOR || "#ffc107"; // Default contract balance color
  const withdrawnColor = import.meta.env.VITE_APP_WITHDRAWN_COLOR || "#ffc107"; // Default withdrawn color
  const presentationLink =
    import.meta.env.VITE_APP_PRESENTATION_LINK || "P3 BNBCLUB PPTV.pdf"; // Default presentation link
  const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK || "#deposit"; // Default deposit link

  return (
    <Container style={{ backgroundColor: heroBgColor }}>
      <Container>
        <div className="row align-items-stretch g-4">
          {/* Left Section: Profit Info */}
          <div className="col-lg-6 col-md-6 d-flex">
            <div className="w-100 p-4 bg-white shadow rounded border d-flex flex-column">
              <h2 className="fw-bold mb-4" style={{ color: heroTextColor }}>
                BNB: Pioneering a
                <br />
                decentralized tomorrow
              </h2>
              <div>
                <p className="mb-3">
                  <strong>Basic interest rate:</strong>{" "}
                  <span className="text-primary">1.5% every 24 hrs</span>
                </p>
                <p className="mb-3">
                  <strong>Personal hold-bonus:</strong>{" "}
                  <span className="text-primary">
                    +0.1% for every 24 hrs without withdrawal
                  </span>
                </p>
                <p className="mb-3">
                  <strong>Contract total amount bonus:</strong>{" "}
                  <span className="text-primary">
                    +0.1% for every 500 BNB on platform address balance
                  </span>
                </p>
              </div>
              <div className="d-flex gap-3 mt-4 justify-content-center">
                <a
                  href={presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: buttonColor, color: "#fff" }}
                >
                  Presentation
                </a>
                <a
                  href={depositLink}
                  className="btn"
                  style={{
                    borderColor: buttonOutlineColor,
                    color: buttonOutlineColor,
                    borderWidth: "2px",
                  }}
                >
                  Deposit
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Contract Balance and User Info */}
          <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
            <div className="w-100 p-4 text-black shadow rounded border d-flex flex-column justify-content-center">
              <div className="mb-4">
                <h1 className="h4">Contract Balance</h1>
                <p
                  id="contract-balance"
                  className="fs-5 fw-bold"
                  style={{ color: contractBalanceColor }}
                >
                  0.000
                </p>
              </div>
              <div>
                <h1 className="h4">Total Withdrawn</h1>
                <p
                  id="withdrawandata"
                  className="fs-5 fw-bold"
                  style={{ color: withdrawnColor }}
                >
                  0.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default HeroSection;
