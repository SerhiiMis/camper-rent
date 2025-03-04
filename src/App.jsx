import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
