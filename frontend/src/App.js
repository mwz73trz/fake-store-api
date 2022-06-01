import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="products/category/:category"
            element={<ProductsByCategoryPage />}
          />
          <Route
            path="products/category/:category/products/:id"
            element={<ProductPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
