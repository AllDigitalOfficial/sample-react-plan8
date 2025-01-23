import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Navbars = () => {
  const navbarBgColor = import.meta.env.VITE_APP_NAVBAR_BG_COLOR || "#343a40"; // Default to dark
  const navbarTextColor = import.meta.env.VITE_APP_NAVBAR_TEXT_COLOR || "#ffffff"; // Default to white

  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "#007bff"; // Default to blue
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#ffffff"; // Default to white
  const buttonBorderColor =
    import.meta.env.VITE_APP_BUTTON_BORDER_COLOR || "#007bff"; // Default to blue

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
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
              src={import.meta.env.VITE_APP_LOGO || ""}
              className="img-fluid"
              style={{ maxWidth: "40%", height: "auto" }}
            />
          </Navbar.Brand>

          {/* Right: Buttons */}
          <Nav className="ms-auto d-flex align-items-center flex-wrap">
            <Button
              variant="outline-light"
              className="me-2 mb-2 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
              }}
              onClick={() =>
                window.open(import.meta.env.VITE_SMART_CONTRACT || "", "_blank")
              }
            >
              Smart Contract {import.meta.env.VITE_SMART_CONTRACT}
            </Button>
            <Button
              variant="outline-light"
              className="mb-2 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
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
        @media (max-width: 768px) {
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
