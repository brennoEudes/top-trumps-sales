import NavBar from "./Components/NavBar";
import { Footer } from "./Components/footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CreateCar } from "./Pages/CreateCar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<CreateCar />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
