import { Request, Response, Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item";

const router = Router();

// router.get("/", (req: Request, res: Response) => {
//   res.send({ data: "AQUI MODELOS VAN" });
// });

router.get("/", getItem);
router.get("/:id", getItems);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
