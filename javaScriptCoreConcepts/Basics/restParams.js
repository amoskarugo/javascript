console.clear()



function total(...args){

    let total = 0;

    for (const arg of args)
        total += arg;

    return total
}

console.log(total(1,3,4,4,5,8,9));


