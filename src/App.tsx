import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
