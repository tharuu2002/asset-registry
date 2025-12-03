import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const result = await axios.get("http://localhost:5000/assets");
    setAssets(result.data);
  };

  return (
    <div className="container">
      <div className="main-card">
        <header className="header-row">
          <h1>Asset Registry</h1>
          <Link to="/select-type">
            <button className="btn btn-primary">+ Add New Asset</button>
          </Link>
        </header>

        <div className="list-container">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className={`asset-card status-${asset.status}`}
              onClick={() => navigate(`/asset/${asset.id}`)}
            >
              <div>
                <h3>{asset.name}</h3>
                <span className="text-muted">{asset.type} | {asset.specific_attr}</span>
              </div>
              <div>
                <span className={`status-badge status-${asset.status}`}>
                  {asset.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetList;