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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class EditProductService {
    execute({ product_id, name, price, description, category_id, image, hungryLevel, protein, curName, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const nameUnavailable = yield prisma_1.default.product.findFirst({
                where: {
                    name: name,
                },
            });
            const notChangeName = curName === name;
            if (name === "") {
                throw new Error("Name invalid");
            }
            if (!notChangeName && nameUnavailable) {
                throw new Error("The name of product is Unavailable");
            }
            const product = prisma_1.default.product.update({
                where: {
                    id: product_id,
                },
                data: {
                    name: name,
                    price: price,
                    description: description,
                    category_id: category_id,
                    image: image,
                    hungryLevel: hungryLevel,
                    protein: protein,
                },
            });
            return product;
        });
    }
}
exports.EditProductService = EditProductService;
