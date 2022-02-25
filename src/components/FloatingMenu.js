import React, { useState } from "react";
import ModalTemplate from "./ModalTemplate";

function FloatingMenu() {
  const [showAccountStats, setShowAccountStats] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleAccountClose = () => setShowAccountStats(false);
  const handleAccountShow = () => setShowAccountStats(true);

  const handleAboutClose = () => setShowAbout(false);
  const handleAboutShow = () => setShowAbout(true);

  const accountModalConfig = {
    showBool: showAccountStats,
    handleCloseFunc: handleAccountClose,
    handleShow: handleAccountShow,
    title: "Check Account Status",
    body: <div>sex</div>,
  };

  const aboutModalConfig = {
    showBool: showAbout,
    handleCloseFunc: handleAboutClose,
    handleShow: handleAboutShow,
    title: "About This Project",
    body: "aasssdddfff",
  };

  return (
    <>
      <div className="fixed pointer col d-flex">
        <div
          className="inline-block bg-info p-2 border border-dark"
          onClick={handleAccountShow}
        >
          Check Account Status
        </div>
        <div
          className="inline-block bg-info p-2 border border-dark"
          onClick={handleAboutShow}
        >
          About This Project
        </div>
      </div>

      <ModalTemplate config={accountModalConfig} />
      <ModalTemplate config={aboutModalConfig} />
    </>
  );
}

export default FloatingMenu;