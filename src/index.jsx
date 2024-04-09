import ReactDOM from "react-dom/client";
import PPFcalc from "./PPFcalc";

export default function App() {
  return (
    <PPFcalc />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);