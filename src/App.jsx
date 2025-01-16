import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
