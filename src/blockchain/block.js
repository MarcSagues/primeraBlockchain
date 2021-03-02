import { SHA256 } from 'crypto-js';

class Block {
  constructor(timestamp, previousHash, hash, data) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  static get genesis() {
      const timestamp = (new Date(2000, 0, 1)).getTime();
      return new this(timestamp, undefined, 'genesis-hash', 'Primer bloque de Geminis')
  }

  static mine(previousBlock, data){
      const timestamp = Date.now(); //número de milisegons que han passat desde la data de creació del primer block
      const {hash: previousHash} = previousBlock; //agafa hash del block anterior
      const hash = Block.hash(timestamp, previousHash, data);
      

      return new this(timestamp, previousHash, hash, data);

  }

  static hash(timestamp, previousHash, data) {
      return SHA256 (`${timestamp}${previousHash}${data}`).toString();
  }

  toString() {
    const {
      timestamp, previousHash, hash, data,
    } = this;

    return `Block -
        timestamp       :${timestamp}
        previousHash    :${previousHash}
        hash            :${hash}
        data            :${data}
        `;
  }
}

export default Block;
