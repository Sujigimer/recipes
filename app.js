import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json()); // leidžia naudoti JSON formatu siunčiamus duomenis

// MongoDB ryšio nustatymas (pridėsime prisijungimo nuorodą po šio skyriaus)
mongoose
  .connect(
    "mongodb+srv://typescript:typescript23@recipes.g3wfq.mongodb.net/?retryWrites=true&w=majority&appName=recipes",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Prisijungta prie MongoDB!");
  })
  .catch((err) => {
    console.log("Klaida jungiantis prie MongoDB:", err);
  });

// Pagrindinis maršrutas
app.get("/", (req, res) => res.send("Sveikas atvykęs į receptų API!"));

// Klausomės serveryje
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Serveris veikia ant http://localhost:${PORT}`)
);
