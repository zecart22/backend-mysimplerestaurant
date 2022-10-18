import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAthenticated } from "./middlewares/isAthenticated";
import { CreateCategorieController } from "./controllers/categories/CreateCategorieController";
import { ListCategoriesController } from "./controllers/categories/ListCategoriesController";
import { CreateProductsController } from "./controllers/products/CreateProductsCrontroller";
import { CreateProductsURLController } from "./controllers/products/CreateProductsURLController";
import { ListByCategoriesController } from "./controllers/products/ListByCategoriesController";
import { CreateOrderController } from "./controllers/orders/CreateOrderController";
import { RemoveOrderController } from "./controllers/orders/RemoveOrderController";
import { AddItemController } from "./controllers/orders/AddItemController";
import { RemoveItemController } from "./controllers/orders/RemoveItemController";
import { SendOrderController } from "./controllers/orders/SendOrderController";
import { ListLastOrdersController } from "./controllers/orders/ListLastOrdersController";
import { OrderDetailsController } from "./controllers/orders/OrderDetailsController";
import { ConcludOrderController } from "./controllers/orders/ConcludOrderController";
import { RemoveProductController } from "./controllers/products/RemoveProductController";
import { ListAllProductsController } from "./controllers/products/ListAllProductsController";
import { EditProductController } from "./controllers/products/EditProductController";
import { EditCategoryController } from "./controllers/categories/EditCategorieController";
import { RemoveCategoryController } from "./controllers/categories/RemoveCategoryController";
import { ListAllDraftOrdersController } from "./controllers/orders/ListAllDraftOrdersController";
import { ListAllOrdersController } from "./controllers/orders/ListAllOrdersController";
import { ListAllDeliveryOrdersController } from "./controllers/orders/ListAllDeliveryOrdersController";
import { ListProductsBySizeController } from "./controllers/products/ListProductsBySizeCrontoller";
import { ListProductsByProteinController } from "./controllers/products/ListProductsByProteinController";
import { ListProductByIdController } from "./controllers/products/ListProductByIdController";
import { ListAllConcluidOrdersController } from "./controllers/orders/ListAllConcluidOrdersController";
import { ListAllOrdersByTableNumberController } from "./controllers/orders/ListAllOrdersByTableNumberController";
import { OrderTotalPriceController } from "./controllers/orders/OrderTotalPriceController";
import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

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

router.put("/category", isAthenticated, new EditCategoryController().handle);

router.delete(
  "/category",
  isAthenticated,
  new RemoveCategoryController().handle
);

/* --ROUTES PRODUCTS -- */

router.post(
  "/product",
  isAthenticated,
  upload.single("file"),
  new CreateProductsController().handle
);

router.post(
  "/product_url",
  isAthenticated,
  new CreateProductsURLController().handle
);

router.get(
  "/category/product",
  isAthenticated,
  new ListByCategoriesController().handle
);

router.get(
  "/product_list",
  isAthenticated,
  new ListAllProductsController().handle
);

router.get(
  "/product/id",
  isAthenticated,
  new ListProductByIdController().handle
);

router.get(
  "/product/size",
  isAthenticated,
  new ListProductsBySizeController().handle
);

router.get(
  "/product/protein",
  isAthenticated,
  new ListProductsByProteinController().handle
);

router.delete("/product", isAthenticated, new RemoveProductController().handle);

router.put("/product", isAthenticated, new EditProductController().handle);

/* --ROUTES ORDERS -- */

router.post("/order", isAthenticated, new CreateOrderController().handle);

router.delete("/order", isAthenticated, new RemoveOrderController().handle);

router.post("/order/add_item", isAthenticated, new AddItemController().handle);

router.delete(
  "/order/remove_item",
  isAthenticated,
  new RemoveItemController().handle
);

router.put("/order/send", isAthenticated, new SendOrderController().handle);

router.get(
  "/orders/list",
  isAthenticated,
  new ListLastOrdersController().handle
);

router.post(
  "/orders/table",
  isAthenticated,
  new ListAllOrdersByTableNumberController().handle
);

router.get(
  "/order/detail",
  isAthenticated,
  new OrderDetailsController().handle
);

router.get(
  "/orders/draft",
  isAthenticated,
  new ListAllDraftOrdersController().handle
);

router.get(
  "/orders/concluid",
  isAthenticated,
  new ListAllConcluidOrdersController().handle
);

router.get(
  "/orders/delivery",
  isAthenticated,
  new ListAllDeliveryOrdersController().handle
);

router.get("/orders/all", isAthenticated, new ListAllOrdersController().handle);

router.put(
  "/order/conclud",
  isAthenticated,
  new ConcludOrderController().handle
);

router.get(
  "/order/total/price",
  isAthenticated,
  new OrderTotalPriceController().handle
);

export { router };
