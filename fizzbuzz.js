for (let i = 1; i <= 100; i++){
  let tbp = "";
  if (i%3==0){tbp += "Fizz";}
  if (i%5==0){tbp += "Buzz";}
  if (i%3!==0 && i%5!==0) {console.log(i)}

  if (tbp !== ""){console.log(tbp)}
}
console.log(console)
