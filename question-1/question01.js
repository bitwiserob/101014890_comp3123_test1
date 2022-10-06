const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(mixedArray) {
  let filteredArray = mixedArray.filter((e) => typeof e == "string");

  const lowerCaseArray = filteredArray.map((r) => {
    return r.toLowerCase();
  });

  return new Promise((resolve, reject) => {
    if (lowerCaseArray != undefined) {
      console.log(lowerCaseArray);
      resolve("Success");
    } else reject("Failure");
  });
}

lowerCaseWords(mixedArray);