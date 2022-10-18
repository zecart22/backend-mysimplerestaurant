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
exports.CreateProductsURLController = void 0;
const CreateProductsURLService_1 = require("../../services/products/CreateProductsURLService");
class CreateProductsURLController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { category_id, description, hungryLevel, name, price, protein, image, } = req.body;
            const createProductService = new CreateProductsURLService_1.CreateProductURLService();
            if (!image) {
                throw new Error("error to send image url");
            }
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
        });
    }
}
exports.CreateProductsURLController = CreateProductsURLController;
