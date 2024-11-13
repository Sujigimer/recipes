import express from "express";
import mongoose from "mongoose";
import recipeRoutes from "./routes/recipeRoutes"; // Importuojame receptų maršrutus
import userRoutes from "./routes/userRoutes"; // Importuojame vartotojo maršrutus

const app = express();

// Middleware, leidžiantis naudoti JSON duomenis
app.use(express.json());

// MongoDB prisijungimas
mongoose
  .connect("YOUR_MONGODB_CONNECTION_STRING", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Prisijungta prie MongoDB!");
  })
  .catch((err) => {
    console.log("Klaida jungiantis prie MongoDB:", err);
  });

// Pagrindinis maršrutas (testavimui)
app.get("/", (req, res) => {
  res.send("Sveikas atvykęs į receptų API!");
});

// Naudojame receptų ir vartotojo maršrutus
app.use("/api/recipes", recipeRoutes); // Receptų maršrutai
app.use("/api/users", userRoutes); // Vartotojo maršrutai

// Klausomės 3000 prievado
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveris veikia ant http://localhost:${PORT}`);
});
