"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAthenticated_1 = require("./middlewares/isAthenticated");
const CreateCategorieController_1 = require("./controllers/categories/CreateCategorieController");
const ListCategoriesController_1 = require("./controllers/categories/ListCategoriesController");
const CreateProductsCrontroller_1 = require("./controllers/products/CreateProductsCrontroller");
const CreateProductsURLController_1 = require("./controllers/products/CreateProductsURLController");
const ListByCategoriesController_1 = require("./controllers/products/ListByCategoriesController");
const CreateOrderController_1 = require("./controllers/orders/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/orders/RemoveOrderController");
const AddItemController_1 = require("./controllers/orders/AddItemController");
const RemoveItemController_1 = require("./controllers/orders/RemoveItemController");
const SendOrderController_1 = require("./controllers/orders/SendOrderController");
const ListLastOrdersController_1 = require("./controllers/orders/ListLastOrdersController");
const OrderDetailsController_1 = require("./controllers/orders/OrderDetailsController");
const ConcludOrderController_1 = require("./controllers/orders/ConcludOrderController");
const RemoveProductController_1 = require("./controllers/products/RemoveProductController");
const ListAllProductsController_1 = require("./controllers/products/ListAllProductsController");
const EditProductController_1 = require("./controllers/products/EditProductController");
const EditCategorieController_1 = require("./controllers/categories/EditCategorieController");
const RemoveCategoryController_1 = require("./controllers/categories/RemoveCategoryController");
const ListAllDraftOrdersController_1 = require("./controllers/orders/ListAllDraftOrdersController");
const ListAllOrdersController_1 = require("./controllers/orders/ListAllOrdersController");
const ListAllDeliveryOrdersController_1 = require("./controllers/orders/ListAllDeliveryOrdersController");
const ListProductsBySizeCrontoller_1 = require("./controllers/products/ListProductsBySizeCrontoller");
const ListProductsByProteinController_1 = require("./controllers/products/ListProductsByProteinController");
const ListProductByIdController_1 = require("./controllers/products/ListProductByIdController");
const ListAllConcluidOrdersController_1 = require("./controllers/orders/ListAllConcluidOrdersController");
const ListAllOrdersByTableNumberController_1 = require("./controllers/orders/ListAllOrdersByTableNumberController");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
/* ROUTES USERS */
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/user_details", isAthenticated_1.isAthenticated, new DetailUserController_1.DetailUserController().handle);
/* --ROUTES CATEGORIES -- */
router.post("/category", isAthenticated_1.isAthenticated, new CreateCategorieController_1.CreateCategorieController().handle);
router.get("/categories_list", isAthenticated_1.isAthenticated, new ListCategoriesController_1.ListCategoriesController().handle);
router.put("/category", isAthenticated_1.isAthenticated, new EditCategorieController_1.EditCategoryController().handle);
router.delete("/category", isAthenticated_1.isAthenticated, new RemoveCategoryController_1.RemoveCategoryController().handle);
/* --ROUTES PRODUCTS -- */
router.post("/product", isAthenticated_1.isAthenticated, upload.single("file"), new CreateProductsCrontroller_1.CreateProductsController().handle);
router.post("/product_url", isAthenticated_1.isAthenticated, new CreateProductsURLController_1.CreateProductsURLController().handle);
router.get("/category/product", isAthenticated_1.isAthenticated, new ListByCategoriesController_1.ListByCategoriesController().handle);
router.get("/product_list", isAthenticated_1.isAthenticated, new ListAllProductsController_1.ListAllProductsController().handle);
router.get("/product/id", isAthenticated_1.isAthenticated, new ListProductByIdController_1.ListProductByIdController().handle);
router.get("/product/size", isAthenticated_1.isAthenticated, new ListProductsBySizeCrontoller_1.ListProductsBySizeController().handle);
router.get("/product/protein", isAthenticated_1.isAthenticated, new ListProductsByProteinController_1.ListProductsByProteinController().handle);
router.delete("/product", isAthenticated_1.isAthenticated, new RemoveProductController_1.RemoveProductController().handle);
router.put("/product", isAthenticated_1.isAthenticated, new EditProductController_1.EditProductController().handle);
/* --ROUTES ORDERS -- */
router.post("/order", isAthenticated_1.isAthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete("/order", isAthenticated_1.isAthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post("/order/add_item", isAthenticated_1.isAthenticated, new AddItemController_1.AddItemController().handle);
router.delete("/order/remove_item", isAthenticated_1.isAthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put("/order/send", isAthenticated_1.isAthenticated, new SendOrderController_1.SendOrderController().handle);
router.get("/orders/list", isAthenticated_1.isAthenticated, new ListLastOrdersController_1.ListLastOrdersController().handle);
router.post("/orders/table", isAthenticated_1.isAthenticated, new ListAllOrdersByTableNumberController_1.ListAllOrdersByTableNumberController().handle);
router.get("/order/detail", isAthenticated_1.isAthenticated, new OrderDetailsController_1.OrderDetailsController().handle);
router.get("/orders/draft", isAthenticated_1.isAthenticated, new ListAllDraftOrdersController_1.ListAllDraftOrdersController().handle);
router.get("/orders/concluid", isAthenticated_1.isAthenticated, new ListAllConcluidOrdersController_1.ListAllConcluidOrdersController().handle);
router.get("/orders/delivery", isAthenticated_1.isAthenticated, new ListAllDeliveryOrdersController_1.ListAllDeliveryOrdersController().handle);
router.get("/orders/all", isAthenticated_1.isAthenticated, new ListAllOrdersController_1.ListAllOrdersController().handle);
router.put("/order/conclud", isAthenticated_1.isAthenticated, new ConcludOrderController_1.ConcludOrderController().handle);
