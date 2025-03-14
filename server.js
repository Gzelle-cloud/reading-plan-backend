const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/ReadingRoutes');
const cors = require('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB connection error: ", err))

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})