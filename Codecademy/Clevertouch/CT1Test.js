const fib = (input) => {
    let start = 0; //start number decleration
    let init = 1;

    let next;

    console.log(start); //print start digits
    console.log(init);

    //REPEATS input NUMBER OF TIMES
    for (let i = 0; i < input - 2; i++) {
        next = start + init;
        console.log(next);
        start = init;
        init = next;
    }

    //REPEATS WHILE LESS THAN input
    /*do {
        next = start + init;

        console.log(next);

        start = init;
        init = next;
    } while (next < input);*/
}

fib(100);