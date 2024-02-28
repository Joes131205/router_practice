import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import About from "./routes/About";
import Home from "./routes/Home";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
