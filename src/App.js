import NavBar from "./Components/NavBar";
import { Footer } from "./Components/footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <NavBar />

      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
