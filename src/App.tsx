import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

import {
  ContractData,
  HeroSection,
  Copyright,
  Deposit,
  Levels,
  Navbars,
  Referral,
  ReferralLinkData,
} from "./components";

const App: React.FC = () => {
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
        <Copyright />
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;
