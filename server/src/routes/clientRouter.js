import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();
// const currentPath = dirname(fileURLToPath(import.meta.url))

// let indexPath = path

const clientRoutes = ["/", "/user-sessions/new", "/users/new"];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});



export default router;