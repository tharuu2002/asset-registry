import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AssetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/assets/${id}`).then((res) => setAsset(res.data));
  }, [id]);

  if (!asset) return <div>Loading...</div>;

  return (
    <div className="container">
      <button className="btn btn-secondary mb-20" onClick={() => navigate("/")}>
        ← Back to List
      </button>

      <div className="main-card">
        <div className="details-header">
          <div>
            <h1>{asset.name}</h1>
            <span className="type-tag">{asset.type}</span>
          </div>
          <span className={`status-badge status-${asset.status}`}>
            {asset.status}
          </span>
        </div>

        <hr className="divider" />

        <div className="details-grid">
          <div className="details-section">
            <strong>{asset.type === "Hardware" ? "Serial Number" : "License Key"}:</strong>
            <p>{asset.specific_attr}</p>
          </div>
          <div className="details-section">
            <strong>Registered Date:</strong>
            <p>{new Date(asset.created_at).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="details-section">
          <strong>Description:</strong>
          <p>{asset.details || "No details provided."}</p>
        </div>

        <div className="mt-20">
          <Link to={`/edit/${asset.id}`}>
            <button className="btn btn-primary">Edit Asset Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;