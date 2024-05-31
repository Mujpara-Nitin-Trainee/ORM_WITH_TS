import express from "express";
import { getAll, home, registerUser, deleteUser,restoreUsers,findByPk,findFirst, registerUniqueUser, updateUser, upsertUser } from "../controller/userController";
import { getGifts,addGift, searchDeletedGifts, removeGift, revertGifts } from "../controller/giftController";
import { addEvent, getEvents, removeEvent } from "../controller/eventController";
import { addProduct, products, removeProduct, revertProduct } from "../controller/productController";

const router = express.Router();

//user Routes
router.get("/",home);

router.get("/users",getAll);

router.post("/register",registerUser);

router.get("/getById/:id",findByPk);

router.delete("/remove/:id",deleteUser);

router.get("/getByName/:value",findFirst);

router.post("/registerUnique",registerUniqueUser);

router.put("/updateUser",updateUser);

router.post("/upsertUser",upsertUser)

router.get('/restore',restoreUsers);


//gift Routes

router.get("/gifts",getGifts);

router.post("/addGift",addGift);

router.get("/search/:name",searchDeletedGifts);

router.delete("/gift/remove/:id",removeGift);

router.get("/gift/restore",revertGifts);

// event Routes

router.get("/events",getEvents);

router.post("/addEvents",addEvent);

router.delete("/event/remove/:id",removeEvent);


// product Routes

router.get("/products",products);

router.post("/addProducts",addProduct);

router.delete("/product/remove/:id",removeProduct);

router.get("/product/restore",revertProduct);

export default router;