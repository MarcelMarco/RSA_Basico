"use strict";
exports.__esModule = true;
var RsaPubKey_1 = require("./RsaPubKey");
var RsaPrivKey_1 = require("./RsaPrivKey");
var bigInt = require("big-integer");
function generateRSAKeys() {
    var p = bigInt('3');
    var q = bigInt('8');
    var n = p.multiply(q); // n = p * q
    var phi = p.subtract(1).multiply(q.subtract(1)); // φ(n) = (p-1)(q-1)
    var e = bigInt(65537); // Public exponent, commonly used value
    var d = bigInt(e).modInv(phi); // Private exponent
    var rsaPubKey = new RsaPubKey_1["default"](e, n);
    var rsaPrivKey = new RsaPrivKey_1["default"](d, n);
    console.log('Clave pública:');
    console.log(rsaPubKey);
    console.log('\nClave privada:');
    console.log(rsaPrivKey);
}
generateRSAKeys();
