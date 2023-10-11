import * as bigInt from 'big-integer';

class RsaPrivKey {
  d: bigInt.BigInteger;
  n: bigInt.BigInteger;

  constructor(d: bigInt.BigInteger, n: bigInt.BigInteger) {
    this.d = d;
    this.n = n;
  }

  decrypt(c: bigInt.BigInteger): bigInt.BigInteger {
    // m = c^d mod n
    return c.modPow(this.d, this.n);
  }

  sign(m: bigInt.BigInteger): bigInt.BigInteger {
    // s = m^d mod n
    return m.modPow(this.d, this.n);
  }
}

export default RsaPrivKey;
