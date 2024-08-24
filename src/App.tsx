import MainPage from "./components/MainPage";
<<<<<<< HEAD
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
=======
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //   </Routes>
    // </Router>
    <MainPage />
>>>>>>> master
  );
}

export default App;
