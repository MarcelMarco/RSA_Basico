import * as bigInt from 'big-integer';

class RsaPubKey {
  e: bigInt.BigInteger;
  n: bigInt.BigInteger;

  constructor(e: bigInt.BigInteger, n: bigInt.BigInteger) {
    this.e = e;
    this.n = n;
  }

  encrypt(m: bigInt.BigInteger): bigInt.BigInteger {
    // C = m^e mod n
    return m.modPow(this.e, this.n);
  }

  verify(s: bigInt.BigInteger): bigInt.BigInteger {
    // m = s^e mod n
    return s.modPow(this.e, this.n);
  }
}

export default RsaPubKey;
