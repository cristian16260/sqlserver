import { Router } from 'express';
import {
  listuser,
  newaruser,
  deleteuser,
  updateuser,
} from "../controller/user.js";

const routes = Router();

routes.get("/list", listuser);
routes.post("/new", newaruser);
routes.delete("/delete", deleteuser);
routes.put("/update", updateuser);

export default routes;