import express from "express";

import { addStudent } from "../controller/controller.js";
const routes = express.Router();

routes.post('/addStudent',addStudent);



export default routes;