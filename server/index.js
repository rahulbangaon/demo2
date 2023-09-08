import express from 'express';
import Connection from './database/connection.js';
import routes from './routes/routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

Connection();

app.use('/',routes)











const PORT = 9000;
app.listen(PORT,()=>{
    console.log("Server is successfully running at ",PORT);
})