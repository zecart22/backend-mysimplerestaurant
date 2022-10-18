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
exports.EditProductController = void 0;
const EditProductService_1 = require("../../services/products/EditProductService");
class EditProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product_id = req.query.product_id;
            const { curName, name, price, description, category_id, image, hungryLevel, protein, } = req.body;
            const editProductController = new EditProductService_1.EditProductService();
            const product = yield editProductController.execute({
                curName,
                product_id,
                name,
                price,
                description,
                category_id,
                image,
                hungryLevel,
                protein,
            });
            return res.json(product);
        });
    }
}
exports.EditProductController = EditProductController;
