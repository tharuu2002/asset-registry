import { useNavigate } from "react-router-dom";

const AssetTypeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="main-card">
        <h2>Select Asset Type</h2>
        <p className="text-muted">What kind of asset are you registering?</p>
        
        <div className="type-grid">
          <div className="type-card" onClick={() => navigate("/add/Hardware")}>
            Hardware
          </div>
          <div className="type-card" onClick={() => navigate("/add/Software")}>
            Software
          </div>
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AssetTypeSelection;