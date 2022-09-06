'use strict';

const {squareTheNum} = require('../middlewares/validate-number');

describe('Testing squareTheNum Middleware',()=>{

    let spy ;
    let res = {};
    let req = {query:{num:5}};
    let next = jest.fn();
    //error with match rgx method 
    beforeEach(()=>{
        spy = jest.spyOn(console,'log').mockImplementation();
    });

    afterAll(()=>{
        spy.mockRestore();
    })

    it('Test squareTheNum console.log',()=>{

        squareTheNum(req,res,next);
        expect(spy).toHaveBeenCalled();
    });

    it('Test squareTheNum next',()=>{

        squareTheNum(req,res,next);
        expect(next).toHaveBeenCalled();
    });


})