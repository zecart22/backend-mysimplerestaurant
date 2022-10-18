"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsController = void 0;
const CreateProductService_1 = require("../../services/products/CreateProductService");
class CreateProductsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { category_id, description, hungryLevel, name, price, protein, image, } = req.body;
            const createProductService = new CreateProductService_1.CreateProductService();
            if (!req.file) {
                throw new Error("error upload file");
            }
            else {
                const { originalname, filename: image } = req.file;
                const product = yield createProductService.execute({
                    category_id,
                    description,
                    hungryLevel,
                    image,
                    name,
                    price,
                    protein,
                });
                return res.json(product);
            }
        });
    }
}
exports.CreateProductsController = CreateProductsController;
