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
exports.ListAllOrdersController = void 0;
const ListAllOrdersService_1 = require("../../services/order/ListAllOrdersService");
class ListAllOrdersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listAllOrdersService = new ListAllOrdersService_1.ListAllOrdersService();
            const orders = yield listAllOrdersService.execute();
            return res.json(orders);
        });
    }
}
exports.ListAllOrdersController = ListAllOrdersController;
