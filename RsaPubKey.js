"use strict";
exports.__esModule = true;
var bcu = require("bigint-crypto-utils");
var RsaPubKey = /** @class */ (function () {
    function RsaPubKey(e, n) {
        this.e = e;
        this.n = n;
    }
    RsaPubKey.prototype.encrypt = function (m) {
        // C = m^e mod n
        return bcu.modPow(m, this.e, this.n);
    };
    RsaPubKey.prototype.verify = function (s) {
        // m = s^e mod n
        return bcu.modPow(s, this.e, this.n);
    };
    return RsaPubKey;
}());
exports["default"] = RsaPubKey;
