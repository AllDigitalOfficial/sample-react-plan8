import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";

const Navbars = () => {
  const {
    navbarBgColor = import.meta.env.VITE_APP_NAVBAR_BG_COLOR || "#4B4B4BFF",
    buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "#007bff",
    buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#ffffff",
    buttonBorderColor = import.meta.env.VITE_APP_BUTTON_BORDER_COLOR  || "#007bff",
    depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK || "#deposit",
  } = import.meta.env;

  return (
    <Navbar
      fixed="top"
      className="py-2 py-lg-3"
      style={{
        backgroundColor: navbarBgColor,
        boxShadow: "0 2px 10px rgba(252, 250, 250, 0.1)",
        zIndex: 1000, // Ensure it stays on top
      }}
    >
      <Container>
        <Row className="w-100" style={{ backgroundColor: navbarBgColor }}>
          {/* Logo Section */}
          <Col
            xs={12}
            lg={6}
            className="text-center text-lg-start mb-3 mb-lg-0"
          >
            <Navbar.Brand href="#home" className="navbar-brand-custom">
              <img
                alt="Logo"
                src={import.meta.env.VITE_APP_LOGO || "BNBPUMP-LOGO.png"}
                className="img-fluid"
                width={150}
              />
            </Navbar.Brand>
          </Col>

          {/* Buttons Section */}
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center justify-content-lg-end"
          >
            <Nav className="w-100 d-flex justify-content-between">
              <Button
                className="btn w-50 ms-2"
                style={{
                  backgroundColor: buttonBgColor,
                  color: buttonTextColor,
                  borderColor: buttonBorderColor,
                  borderRadius: '20px',
                }}
                onClick={() => (window.location.href = depositLink)}
              >
                Deposit
              </Button>
              <Button
                className="btn w-50 ms-2"
                style={{
                  backgroundColor: buttonBgColor,
                  color: buttonTextColor,
                  borderColor: buttonBorderColor,
                  borderRadius: '20px',
                }}
              >
                Connect Wallet
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbars;