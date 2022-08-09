import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAthenticated } from "./middlewares/isAthenticated";
import { CreateCategorieController } from "./controllers/categories/CreateCategorieController";
import { ListCategoriesController } from "./controllers/categories/ListCategoriesController";

const router = Router();

/* ROUTES USERS */

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/user_details", isAthenticated, new DetailUserController().handle);

/* --ROUTES CATEGORIES -- */

router.post(
  "/category",
  isAthenticated,
  new CreateCategorieController().handle
);

router.get(
  "/categories_list",
  isAthenticated,
  new ListCategoriesController().handle
);

export { router };
