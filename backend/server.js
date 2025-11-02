import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The Lash Burrow backend is running!");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  res.json({ message: "Booking received!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
