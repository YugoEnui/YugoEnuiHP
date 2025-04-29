import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import BiographyPage from "./BiographyPage.jsx";
import MenuBar from "./components/MenuBar.jsx";

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<BiographyPage />} />
      </Routes>
    </>
  );
}

export default App;
