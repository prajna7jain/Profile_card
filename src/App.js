import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Recipe from "./Pages/Recipe";
import SingleProduct from "./Pages/SingleProduct";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Box sx={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Recipe" element={<Recipe />} />
            <Route path="/recipe/:id" element={<SingleProduct />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
