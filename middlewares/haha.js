'use strict'


function haha(req,res,next) {
console.log('inside haha funciton');
console.log( typeof req);

next();
}


module.exports= {haha};