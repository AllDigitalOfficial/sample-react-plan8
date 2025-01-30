import { Container } from "react-bootstrap";

const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR || "transparent"; // Default background color
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR || "#ffffff"; // Default text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonOutlineColor = import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR ||"#dee2e6"; // Default outline button color
  const contractBalanceColor = import.meta.env.VITE_APP_CONTRACT_BALANCE_COLOR ||"#FFCC00FF"; // Default contract balance color
  const withdrawnColor = import.meta.env.VITE_APP_WITHDRAWN_COLOR || "#ffffff"; // Default withdrawn color
  const presentationLink =
    import.meta.env.VITE_APP_PRESENTATION_LINK || "BNBPUMP.pdf"; // Default presentation link
  const smartContractLink = import.meta.env.VITE_APP_SMART_CONTRACT || "https://bscscan.com/address/0x1510930bc9959cc4163be0b8503636161c81d014#code" ;
  const basicInterestRate = import.meta.env.VITE_APP_BASIC_INTEREST_RATE || "1.5% every 24 hrs"; // Default basic interest rate 
  const personalHoldBonus = import.meta.env.VITE_APP_PERSONAL_HOLD_BONUS || "+0.1% for every 24 hrs without withdrawal"; // Default personal hold bonus
  const contractTotalAmount = import.meta.env.VITE_APP_CONTRACT_TOTAL_AMOUNT || "0.1% for every 500 BNB on platform address balance"; // Default contract total amount bonus

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
                  <span>Basic interest rate : </span>
                  <span style={{ color: "#ffffff" }}>{basicInterestRate}</span>
                </p>
                <p className="mb-3">
                  <span>Personal hold-bonus: </span>
                  <span style={{ color: "#ffffff" }}>
                    {personalHoldBonus}
                  </span>
                </p>
                <p className="mb-3">
                  <span>Contract total amount bonus : </span>
                  <span style={{ color: "#ffffff" }}>
                    {contractTotalAmount}
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
                {<a
                  href={smartContractLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: buttonColor, color: "#fff" }}
                >
                  Smart Contract
                </a>}
              </div>
            </div>
          </div>
          
          {/* Right Section: BlackChain Illustration */}
          <div className="col-lg-13 col-md-8 d-flex align-items-right">
            <img
              src="/BNB Pump IMG 1.png"
              alt="Blockchain Illustration"
              className="img-fluid"
              style={{ maxWidth: "110%", height: "90%", marginBottom: '10px', marginTop:'30px', marginLeft: '-20px' }}
            />
          </div>
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
                0.000 <span style ={{color: heroTextColor}}>BNB</span>
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
                  0.000  <span style ={{color: heroTextColor}}>BNB</span>
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
