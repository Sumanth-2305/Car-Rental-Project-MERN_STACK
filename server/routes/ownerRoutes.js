import express from "express";
import { addCar,changeRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailability, updateUserImage } from "../controllers/ownerController.js";
import { protect } from "../middleware/auth.js"; // Assuming you have an auth middleware for protecting routes
import upload from "../middleware/multer.js";// Assuming you have an upload middleware for handling file uploads


const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner);
ownerRouter.post("/add-car", upload.single("image"), protect, addCar); // Assuming you have an addCar function in ownerController.js
ownerRouter.get("/cars",protect, getOwnerCars);
ownerRouter.post("/toggle-car",protect, toggleCarAvailability)
ownerRouter.post("/delete-car",protect,deleteCar)
ownerRouter.get("/dashboard", protect, getDashboardData)
ownerRouter.post("/update-image", upload.single("image"), protect, updateUserImage); // Assuming you have an updateUserImage function in ownerController.js


export default ownerRouter;