import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PPFcalc from "./PPFcalc";

export default function App() {
  return (
    <PPFcalc />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);