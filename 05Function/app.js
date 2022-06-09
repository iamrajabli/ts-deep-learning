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
function Foo(a, b) {
    return [a + b];
}
;
;
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(url);
        if (!req.ok) {
            throw new Error(`could not ${url}`);
        }
        return yield req.json();
    });
}
;
getData('https://fakestoreapi.com/prodsucts/1')
    .then(data => console.log(data));
