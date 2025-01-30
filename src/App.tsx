import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ContractData,
  HeroSection,
  Footer,
  Deposit,
  Levels,
  Navbars,
  Referral,
  ReferralLinkData,
  ScrollToTopButton,
} from "./components";

const App: React.FC = () => {
  const scrollToTopButtonBgColor =
    import.meta.env.VITE_APP_SCROLL_TO_TOP_BUTTON_BG_COLOR || "rgb(25, 35, 55)";

  useEffect(() => {
    document.title = import.meta.env.VITE_APP_TITLE || "BnbPump";
    const favicon = document.querySelector(
      "link[rel*='icon']"
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href = import.meta.env.VITE_APP_FAVICON_ICON || "";
    }

    const fontFamily = import.meta.env.VITE_FONT_FAMILY || "Inter, sans-serif";
    document.body.style.fontFamily = fontFamily;
    const backgroundColor = import.meta.env.VITE_APP_BACKGROUND_COLOR || "#003153";
    const backgroundImageUrl =
      import.meta.env.VITE_APP_BACKGROUND_IMAGE_URL || "";
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    document.body.style.backgroundColor = backgroundColor;
  }, []);

  return (
    <div className="App">
      <Navbars />

      <div className="container my-4">
        <HeroSection />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4">
            <ContractData />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <Deposit />
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4">
            <ReferralLinkData />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mb-4">
          <Referral />
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <Levels />
        </div>
      </div>

      <div className="col-lg-12 col-md-12 mb-4">
        <Footer />
      </div>
      <div>
        <ScrollToTopButton bgColor={scrollToTopButtonBgColor} />
      </div>
    </div>
  );
};

export default App;
