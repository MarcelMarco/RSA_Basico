import RsaPubKey from './RsaPubKey';
import RsaPrivKey from './RsaPrivKey';
import * as rsaUtils from 'bigint-crypto-utils';
import * as bigInt from 'big-integer';

function generateRSAKeys() {
  const p = bigInt('3');
  const q = bigInt('8');

  const n = p.multiply(q);  // n = p * q
  const phi = p.subtract(1).multiply(q.subtract(1));  // φ(n) = (p-1)(q-1)
  const e = bigInt(65537);  // Public exponent, commonly used value
  const d = bigInt(e).modInv(phi);  // Private exponent

  const rsaPubKey = new RsaPubKey(e, n);
  const rsaPrivKey = new RsaPrivKey(d, n);

  console.log('Clave pública:');
  console.log(rsaPubKey);

  console.log('\nClave privada:');
  console.log(rsaPrivKey);
}

generateRSAKeys();

