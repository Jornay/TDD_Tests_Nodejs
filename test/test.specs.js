const Math = require('../src/math.js');
const expect = require("chai").expect;
const sinon = require("sinon");

let value = 0;
describe('Math class', function(){

    beforeEach(function(){
        value = 0;
    });
    it('Sum two values', function(done){
        const math = new Math();
        this.timeout(3000);

        value = 5;
        math.sum(value,5 , (value) =>{
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two values', function(){
        const math = new Math();
        
        value = 5;
        math.multiply(value,5, (value) =>{
            expect(value).to.equal(25);
            done();
        })    
    });
    it.only('Calls values returned', function(){
        const req = {};
        const res = {
            load : sinon.spy()
        };
        const math = new Math();
        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
    })

});