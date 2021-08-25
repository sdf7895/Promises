module.exports = function asyncDivision (dividend, divisor, cb){
    return new Promise((resolve, reject) => {

        process.nextTick(() => {
            const result = dividend / divisor;
            if(isNaN(result) || !Number.isFinite(result)){
                const error = new Error('Invalid operands');
                if (cb) { cb(error); }
                return reject(error);
            }
            /*
                메서드는 주어진 값으로 이행하는 Promise.then 객체를 반환
            */
            if(cb) { cb(null,result); }
            resolve(result);
        });
    });
};