const bubbleSort = (arr) => {
  let length = arr.length;
  let passes = 0;
  let tmp;
  let swaps;
  let totalSwaps = 0;

  do {
    swaps = 0;
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swaps++;
      }
    }
    totalSwaps += swaps;
    passes++;
    process.stdout.write(`${arr} - ${swaps}\n`);
  } while (swaps > 0);

  console.log(totalSwaps);
  console.log(passes);
};

/* bubbleSort([6, 5, 4, 3, 2, 1]); */
bubbleSort([
  19, 50, 55, 48, 68, 48, 92, 49, 46, 43, 38, 36, 94, 99, 4, 46, 21, 13, 56, 36,
]);

// bubbleSort(["and", "zebra", "help", "aardvark", "johnson", "pillock"]);
