import React from 'react';
import { Jumbotron } from "reactstrap"
import RocprDemo from "./RocprDemo"
import './App.css';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Jumbotron fluid className="text-center header">
        <h2>Wykreślanie krzywej ROC i PR</h2>
      </Jumbotron>
      <RocprDemo />
      <Footer/>
    </div>
  );
}

export default App;
