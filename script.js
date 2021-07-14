let growerNumber = 0;

const dotsFromSequence = (num) =>{
    for(let x = 0;  x <= num; x++){
        growerNumber = growerNumber + x;
    }
    return growerNumber;
}

console.log(`number of dots: ${dotsFromSequence(2)}`); // write which triangle from sequence do you want to check!