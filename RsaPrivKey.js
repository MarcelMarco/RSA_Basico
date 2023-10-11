"use strict";
exports.__esModule = true;
var RsaPrivKey = /** @class */ (function () {
    function RsaPrivKey(d, n) {
        this.d = d;
        this.n = n;
    }
    RsaPrivKey.prototype.decrypt = function (c) {
        // m = c^d mod n
        return c.modPow(this.d, this.n);
    };
    RsaPrivKey.prototype.sign = function (m) {
        // s = m^d mod n
        return m.modPow(this.d, this.n);
    };
    return RsaPrivKey;
}());
exports["default"] = RsaPrivKey;
