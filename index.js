import asyncDivision from './cb.js';

//callback type
asyncDivision(10, 2, (error, result) => {
    if(error) {
        return console.log(error);
    }
    console.log(result);
})

//promises type
asyncDivision(22, 11)
    .then(result => console.log(result))
    .catch(error => console.log(error));