import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Register } from "./pages/register";
import { Welcome } from "./pages/welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/register-page" element={<Register />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
