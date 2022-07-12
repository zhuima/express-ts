"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    console.log('just a ping test api endpoint');
    res.send('pong');
});
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
