import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import BrisePay from "./Pages/BrisePay";


function App() {
  return (
    <div>
      <Navbar />
      <BrisePay />
    </div>
  );
}

export default App;
