let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A People's History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//Challenge Area

/*
to create a function - take fahrenheit in - return object with all three measuring quantities*/

let temperature = 32;

let tempConv = function (temp) {
  return {
    fahrenheit: temp,
    celsius: ((temp - 32) * 5) / 9,
    kelvin: ((temp + 459.67) * 5) / 9,
  };
};

let firstTemp = tempConv(temperature);
console.log(firstTemp.fahrenheit, firstTemp.celsius, firstTemp.kelvin);

temperature = 160;
let secondTemp = tempConv(temperature);
console.log(secondTemp);
