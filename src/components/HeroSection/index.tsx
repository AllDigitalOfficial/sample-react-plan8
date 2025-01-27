import { Container } from "react-bootstrap";

const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = "transparent"; // Default background color
  const heroTextColor = "#ffffff"; // Default text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonOutlineColor = "#dee2e6"; // Default outline button color
  const contractBalanceColor = "#ffffff"; // Default contract balance color
  const withdrawnColor = import.meta.env.VITE_APP_WITHDRAWN_COLOR || "#ffffff"; // Default withdrawn color
  const presentationLink =
    import.meta.env.VITE_APP_PRESENTATION_LINK || "BNBPUMP.pdf"; // Default presentation link
  //const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK || "#deposit"; 

  return (
    <Container style={{ backgroundColor: heroBgColor, color: heroTextColor }}>
      <Container>
        <div className="row align-items-stretch g-6">
          {/* Left Section: Profit Info */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="w-70 p-5 bg-transparent shadow rounded border d-flex flex-column">
              <h4 className="fw-bold mb-4" style={{ color: heroTextColor, borderColor: buttonOutlineColor }}>
              Get 200% Profit in BNB
              </h4>
              <div>
                <p className="mb-3">
                  <span>Basic interest rate :</span>
                  <span style={{ color: "#ffffff" }}>1.5% every 24 hrs</span>
                </p>
                <p className="mb-3">
                  <span>Personal hold-bonus:</span>
                  <span style={{ color: "#ffffff" }}>
                    +0.1% for every 24 hrs without withdrawal
                  </span>
                </p>
                <p className="mb-3">
                  <span>Contract total amount bonus:</span>
                  <span style={{ color: "#ffffff" }}>
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
                {/*<a
                  href={depositLink}
                  className="btn"
                  style={{ backgroundColor: buttonColor, color: "#fff" }}
                >
                  Deposit
                </a>*/}
              </div>
            </div>
          </div>

          {/* Right Section: BlackChain Illustration */}
          <div className="col-lg-13 col-md-8 d-flex align-items-right">
            <img
              src="/BNB Pump IMG 1.png"
              alt="Blockchain Illustration"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="my-5">
            <hr className="border-secondary opacity-20" />
          </div>
          {/* Below Section:  */}
          <div className="row justify-content-center">
            <div className="col-10 text-center mb-4">
              <h1 className="fw-bold" style={{ color: heroTextColor }}>
                Current Contract Balance
              </h1>
              <p
              className="fs-5 fw-bold mt-4"
              style={{ color: contractBalanceColor }}
              >
                0.000 BNB
              </p>
            </div>
            <p></p>
            <div className="row justify-content-center">
              <div className="col-10 text-center mb-4">
                <h1 className="fw-bold" style={{ color: withdrawnColor }}>
                  Total Withdrawn
                </h1>
                <p
                className="fs-5 fw-bold mt-4"
                style={{ color: contractBalanceColor }}
                >
                  0.000 BNB
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
