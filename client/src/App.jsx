import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetList from "./pages/AssetList";
import AssetTypeSelection from "./pages/AssetTypeSelection";
import AssetForm from "./pages/AssetForm";
import AssetDetails from "./pages/AssetDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<AssetList />} />
          <Route path="/select-type" element={<AssetTypeSelection />} />
          {/* Handles both Adding (with type) and Editing (with ID) */}
          <Route path="/add/:type" element={<AssetForm />} /> 
          <Route path="/edit/:id" element={<AssetForm />} />
          <Route path="/asset/:id" element={<AssetDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;