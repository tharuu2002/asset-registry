const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Create an Asset
app.post("/assets", async (req, res) => {
  try {
    const { name, type, status, details, specific_attr } = req.body;
    const newAsset = await pool.query(
      "INSERT INTO assets (name, type, status, details, specific_attr) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, type, status, details, specific_attr]
    );
    res.json(newAsset.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 2. Get All Assets (Sorted by newest first)
app.get("/assets", async (req, res) => {
  try {
    const allAssets = await pool.query("SELECT * FROM assets ORDER BY created_at DESC");
    res.json(allAssets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. Get Single Asset
app.get("/assets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await pool.query("SELECT * FROM assets WHERE id = $1", [id]);
    res.json(asset.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 4. Update Asset
app.put("/assets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status, details, specific_attr } = req.body;
    await pool.query(
      "UPDATE assets SET name = $1, status = $2, details = $3, specific_attr = $4 WHERE id = $5",
      [name, status, details, specific_attr, id]
    );
    res.json("Asset was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// 5. Delete Asset (Optional utility)
app.delete("/assets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM assets WHERE id = $1", [id]);
    res.json("Asset was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server has started on port ${process.env.SERVER_PORT}`);
});