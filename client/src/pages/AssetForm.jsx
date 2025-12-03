import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AssetForm = () => {
  const { type, id } = useParams(); // 'type' if adding, 'id' if editing
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    name: "",
    status: "Active",
    details: "",
    specific_attr: "",
    type: type || "Hardware", 
  });

  useEffect(() => {
    if (isEditMode) {
      loadAssetData();
    }
  }, [id]);

  const loadAssetData = async () => {
    const result = await axios.get(`http://localhost:5000/assets/${id}`);
    setFormData(result.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmed = window.confirm("Are you sure you want to save this asset?");
    if (!confirmed) return;

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/assets/${id}`, formData);
      } else {
        await axios.post("http://localhost:5000/assets", formData);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving asset", error);
    }
  };

  return (
    <div className="container">
      <div className="main-card">
        <h2 className="mb-20">{isEditMode ? "Edit Asset" : `Add New ${type} Asset`}</h2>
        
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label>Asset Name</label>
            <input required name="name" value={formData.name} onChange={handleChange} placeholder="e.g. MacBook Pro M1 / Adobe CC" />
          </div>

          <div className="form-group">
            <label>{formData.type === "Hardware" ? "Serial Number" : "License Key"}</label>
            <input required name="specific_attr" value={formData.specific_attr} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description / Details</label>
            <textarea name="details" rows="4" value={formData.details} onChange={handleChange}></textarea>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetForm;