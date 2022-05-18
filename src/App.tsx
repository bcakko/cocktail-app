import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Menu from "./components/Menu";
import DetailsPage from "./pages/DetailsPage";
import FilteredPage from "./pages/FilteredPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <MainHeader />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingredient/:ingredientName" element={<FilteredPage />} />
        <Route path="/cocktail/:cocktailId" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
