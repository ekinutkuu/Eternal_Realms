import express from 'express';
import client from './pg_database.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3000, () => {
   console.log("Server is running on port 3000");
});
