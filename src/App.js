import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/products" element={<h1>Products</h1>}></Route>
          <Route path="/services" element={<h1>Services</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/login" element={<h1>Login</h1>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
