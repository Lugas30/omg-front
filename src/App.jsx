import "./assets/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import { NotFound } from "./pages/NotFound";
import { DetailWork } from "./pages/DetailWork";

// base URL API and IMAGE
const baseUrl = "https://cms.omgroup.id/api";
const baseImg = "https://cms.omgroup.id/storage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/About"
          element={<About baseUrl={baseUrl} baseImg={baseImg} />}
        />
        <Route
          path="/Contact"
          element={<Contact baseUrl={baseUrl} baseImg={baseImg} />}
        />
        <Route
          path="/Work"
          element={<Work baseUrl={baseUrl} baseImg={baseImg} />}
        />
        <Route
          path="/Work/:slug"
          element={<DetailWork baseUrl={baseUrl} baseImg={baseImg} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
