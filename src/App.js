import NavBar from "./Components/NavBar";
import { Footer } from "./Components/footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CreateCar } from "./Pages/CreateCar";
import { CarDetail } from "./Pages/CardDetails";
import { EditPage } from "./Pages/EditPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<CreateCar />} />
        <Route path="/detail/:detailId" element={<CarDetail />} />
        <Route path="/edit/:editId" element={<EditPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
