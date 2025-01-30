
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getCardDataContractData } from "../../utils/utils_Components.ts";

const ContractData: React.FC = () => {
  // Sample data object
  const data = {
    contractBalance: "0.000",
    // Add other necessary properties here
  };

  // Get card data dynamically
  const cards = getCardDataContractData(data);

  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "transparent"; // Default to light gray
  const cardTextColor = import.meta.env.VITE_APP_CARD_TEXT_COLOR || "#ffffff"; // Default to black
  const cardBorderColor = import.meta.env.VITE_APP_CARD_BORDER_COLOR || "transparent"; // Default to light border color

  return (
    <div className="col-12 mb-4">
    <Container>

      <Row className="gap-2">
        {cards.map((card) => (
          <Col key={card.id}>
            <div
              className="card p-4 text-center shadow-sm h-100"
              style={{
                backgroundColor: cardBgColor,
                borderColor: cardBorderColor,
              }}
            >
              <h4 style={{ color: cardTextColor }}>{card.title}</h4>
              <p style={{ color: cardTextColor }} className="fs-5 fw-bold">
                {card.value}
              </p>
              {card.unit && <p style={{ color: cardTextColor }}>{card.unit}</p>}
              <i className={card.iconClass}></i>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default ContractData;