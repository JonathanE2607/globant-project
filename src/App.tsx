import { Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPage/LandingPage"
import Catalog from "./pages/Dashboard/Catalog";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
