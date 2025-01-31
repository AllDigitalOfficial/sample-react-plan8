import { Container } from "react-bootstrap";
import "./heroSection.css";
const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR || "transparent"; // Default background color
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR || "#ffffff"; // Default text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonOutlineColor =
    import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR || "#dee2e6"; // Default outline button color
  const contractBalanceColor =
    import.meta.env.VITE_APP_CONTRACT_BALANCE_COLOR || "#FFCC00FF"; // Default contract balance color
  const withdrawnColor = import.meta.env.VITE_APP_WITHDRAWN_COLOR || "#ffffff"; // Default withdrawn color
  const presentationLink =
    import.meta.env.VITE_APP_PRESENTATION_LINK || "BNBPUMP.pdf"; // Default presentation link
  const smartContractLink =
    import.meta.env.VITE_APP_SMART_CONTRACT ||
    "https://bscscan.com/address/0x1510930bc9959cc4163be0b8503636161c81d014#code";
  const basicInterestRate =
    import.meta.env.VITE_APP_BASIC_INTEREST_RATE || "1.5% every 24 hrs"; // Default basic interest rate
  const personalHoldBonus =
    import.meta.env.VITE_APP_PERSONAL_HOLD_BONUS ||
    "+0.1% for every 24 hrs without withdrawal"; // Default personal hold bonus
  const contractTotalAmount =
    import.meta.env.VITE_APP_CONTRACT_TOTAL_AMOUNT ||
    "0.1% for every 500 BNB on platform address balance"; // Default contract total amount bonus
  const textColor1 = import.meta.env.VITE_APP_TEXT_COLOR1 || "#ffffff"; // Default text color
  const textColor2 = import.meta.env.VITE_APP_TEXT_COLOR2 || "#ffffff"; // Default text color

  return (
    <Container
      style={{
        backgroundColor: heroBgColor,
        color: heroTextColor,
        paddingTop: "180px",
      }}
    >
      {" "}
      {/* Adjust paddingTop as needed */}
      <Container>
        <div className="row align-items-stretch g-6">
          {/* Left Section: Profit Info */}
          <div className="col-lg-12 col-md-12 d-flex">
            <div className="w-100 bg-transparent  d-flex flex-column">
              <h1
                className="fw-bold mb-4"
                style={{
                  color: heroTextColor,
                  borderColor: buttonOutlineColor,
                }}
              >
                The Simplest Way to Blockchain Wealth
              </h1>
              <div>
                <p className="mb-3">
                  <span style={{ color: textColor1 }}>Basic interest rate : </span>
                  <span style={{ color: textColor2 }}>{basicInterestRate}</span>
                </p>
                <p className="mb-3">
                  <span style={{ color: textColor1 }}>Personal hold-bonus: </span>
                  <span style={{ color: textColor2 }}>{personalHoldBonus}</span>
                </p>
                <p className="mb-3">
                  <span style={{ color: textColor1 }}>Contract total amount bonus : </span>
                  <span style={{ color: textColor2 }}>
                    {contractTotalAmount}
                  </span>
                </p>
              </div>
              <div className="d-md-flex justify-content-center gap-3">
  <a
    href={presentationLink}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-lg mt-3 button-link"
    style={{
      backgroundColor: buttonColor,
      color: "#fff",
      borderColor: buttonOutlineColor,
    }}
  >
    Presentation
  </a>
  <a
    href={smartContractLink}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-lg mt-3 button-link"
    style={{
      backgroundColor: buttonColor,
      color: "#fff",
      borderColor: buttonOutlineColor,
    }}
  >
    Smart Contract
  </a>
</div>
            </div>
          </div>

          {/* Right Section: BlackChain Illustration */}

          <div className="my-3">
            <hr className="border-secondary opacity-10" />
          </div>
          {/* Below Section:  */}
          <div className="row justify-content-center">
            <div className="col-9 text-center mb-4">
              <h1 className="fw-bold" style={{ color: heroTextColor }}>
                Current Contract Balance
              </h1>
              <p
                className="fs-5 fw-bold mt-4"
                style={{ color: contractBalanceColor }}
              >
                0.000 <span style={{ color: heroTextColor }}>BNB</span>
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
                  0.000 <span style={{ color: heroTextColor }}>BNB</span>
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
