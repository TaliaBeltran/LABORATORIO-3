import express from "express";
import express from "express";
import ServicesController from "../controller/ServicesController.js";
var services = new ServicesController();
router.get("/", services.index);
router.get("/test", services.test);
export default router;