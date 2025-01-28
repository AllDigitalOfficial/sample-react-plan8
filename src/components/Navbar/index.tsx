import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";
const Navbars = () => {
  const navbarBgColor = import.meta.env.VITE_APP_NAVBAR_BG_COLOR || "#343a40"; // Default to dark
  const navbarTextColor = import.meta.env.VITE_APP_NAVBAR_TEXT_COLOR || "#ffffff"; // Default to white

  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "transparent"; // Default to blue
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#ffffff"; // Default to white
  const buttonBorderColor =
    import.meta.env.VITE_APP_BUTTON_BORDER_COLOR || "#ffffff"; // Default to blue

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
        <Container fluid>
          {/* Left: Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt="Logo"
              src={import.meta.env.VITE_APP_LOGO || "BNBPUMP-LOGO.png"}
              className="img-fluid"
              style={{ width: "250px", height: "auto", marginLeft: "72px", alignSelf: "right" }}
            />
          </Navbar.Brand>

          {/* Right: Buttons */}
          <Nav className="ms-auto d-flex align-items-center flex-wrap">
            <Button
              variant="outline-light"
              className="me-5 mb-3 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
                marginLeft: "10px", alignSelf: "right"
              }}
              onClick={() =>
                window.open(import.meta.env.VITE_SMART_CONTRACT || "https://bscscan.com/address/0x1510930bc9959cc4163be0b8503636161c81d014#code", "_blank")
              }
            >
              Smart Contract {import.meta.env.VITE_SMART_CONTRACT}
            </Button>
            <p></p>
            <Button
              variant="outline-light"
              className="me-5 mb-3 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
                marginLeft: "10px", alignSelf: "right"
              }}
            >
              Connect Wallet
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Internal CSS for Button Responsiveness */}
      <style>{`
        /* For extra large screens */
        @media (min-width: 1200px) {
          .btn-responsive {
            font-size: 1.5rem;
            padding: 10px 20px;
          }
        }

        /* For smaller screens */
        @media (max-width: 500px) {
          .btn-responsive {
            font-size: 1rem;
            padding: 8px 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbars;
