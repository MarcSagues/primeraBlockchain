import Block from './block';

describe('Block',() =>{
    let timestamp;
    let previousBlock;
    let data;
    let hash;



    beforeEach(() =>{
        timestamp = new Date(2010,0,1);
        previousBlock = Block.genesis;
        data = 'aloodown';
        hash = 'aloooup';

    });

    it('create an instance with parametres', () =>{
        const block= new Block(timestamp, previousBlock.hash, hash, data);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);


    });

    it('use static mine()',() =>{
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
        
    })

    it('use static mine()',() =>{
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = '9948e2cc166428df9f4091b7be3062d498368851ee756b4ef5b0a511b20794fd'
        expect(hash).toEqual(hasOutput);
    });
    
    
    it('use toString()',() =>{
        const block = Block.mine(previousBlock, data);
        expect(typeof block.toString()).toEqual('string');

    });

});