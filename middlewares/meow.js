'use strict'


function meow(req,res,next) {
console.log('inside moew funciton')
next();
}

function x(num) {

     return function dog(req, res, next) {
        
        if(typeof num == 'number') {
            console.log('inside dog funciton',num)
            next();
        }else {
            next(`${num} is not a number`);
        }
    }
}



module.exports= {meow,x};
