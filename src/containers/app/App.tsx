import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import EditPage from "../../pages/editPage/EditPage";
import ViewPage from "../../pages/viewPage/Builder";
import "./App.css";

function App() {
  return (
    <Router >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ViewPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="*" element={<Navigate to="/view"/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
