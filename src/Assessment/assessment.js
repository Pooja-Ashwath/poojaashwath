function add(str) {
  if (!str) {
    return 0;
  }
  const numbersOnly = str.replace(/[^\d+-]/g, ",");

  const arr = numbersOnly.split(",").map((val) => Number(val));

  const arr1 = arr.map((val) => Number(val));

  const negativeNumbers = arr.filter((val) => {
    return val < 0;
  });

  if (negativeNumbers.length == 0) {
    const sum = arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    return sum;
  }

  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed, ${negativeNumbers}`);
  }
}

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
console.log(add("//;\n-1;-2;-6;-33;-6")); // Should throw an exception
