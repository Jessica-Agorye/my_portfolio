import MainPage from "./components/MainPage";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/blogList" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
