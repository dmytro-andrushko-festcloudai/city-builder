import React from "react";
import TilesBuilder from "components/TilesBuilder";
import { ModalProvider } from "components/common/Modal";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <TilesBuilder />
      </ModalProvider>
    </div>
  );
}
