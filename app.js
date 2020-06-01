//Primitive value : string, number, boolean, null, undefined

//Object: myObject --> Object.prototype --> null

const product = {
  name: "The Da-Vinci code",
};

let paper = "soft";
console.log(paper.toUpperCase());

//hasOwnProperty

console.log(product.hasOwnProperty("price"));

console.log(product);
