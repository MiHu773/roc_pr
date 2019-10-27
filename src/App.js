import React from 'react';
import { Jumbotron } from "reactstrap"
import RocprDemo from "./RocprDemo"
import './App.css';

function App() {
  return (
    <div>
        <Jumbotron fluid className="text-center">
          <h2>Wykreślanie krzywej ROC i PR</h2>
          <h3>MBI 19Z</h3>
        </Jumbotron>
        <RocprDemo />
      <footer className="footertext-right font-small fixed-bottom bg-secondary text-light">
        <div className="p-2">
          Michał Grzeszczyk
        <br />
          Przemysław Wilczyński
        </div>
      </footer>
    </div>
  );
}

export default App;
