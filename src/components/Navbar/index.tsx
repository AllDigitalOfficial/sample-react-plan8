import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

const Navbars = () => {
  const navbarBgColor = import.meta.env.VITE_APP_NAVBAR_BG_COLOR || "#343a40"; // Default to dark

  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "#000033FF"; // Blackish blue
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#ffffff"; // Default to white
  const buttonBorderColor = import.meta.env.VITE_APP_BUTTON_BORDER_COLOR || "#ffffff"; // Default to white

  return (
    <>
      <Navbar
        bg="transparent"
        variant="transparent"
        expand="lg"
        className="py-3"
        style={{
          backgroundColor: navbarBgColor,
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt="Logo"
              src={import.meta.env.VITE_APP_LOGO || "BNBPUMP-LOGO.png"}
              className="img-fluid"
              style={{ width: "250px", height: "auto", marginLeft: "72px", alignSelf: "right" }}
            />
          </Navbar.Brand>
          <Nav className="ms-auto d-flex align-items-center flex-wrap nav-buttons">
            <Button
              variant="outline-light"
              className="me-5 mb-3 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
                borderRadius: '20px',
                padding: '10px 10px', // Increase padding
                fontSize: '1rem' // Increase font size
              }}
              onClick={() =>
                window.open(import.meta.env.VITE_SMART_CONTRACT || "https://bscscan.com/address/0x1510930bc9959cc4163be0b8503636161c81d014#code", "_blank")
              }
            >
              Smart Contract {import.meta.env.VITE_SMART_CONTRACT}
            </Button>
            <Button
              variant="outline-light"
              className="me-5 mb-3 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
                borderRadius: '20px',
                padding: '10px 10px', // Increase padding
                fontSize: '1rem' // Increase font size
              }}
            >
              Connect Wallet
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Internal CSS for Button Responsiveness */}
      <style>{`
        .nav-buttons {
          display: flex;
          flex-direction: row;
        }

        .btn-responsive {
          width: 150px;
        }

        @media (max-width: 250px) {
          .nav-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-responsive {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbars;