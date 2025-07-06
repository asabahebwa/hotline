import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import Home from "./common/Home";
import NotFound from "./common/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
