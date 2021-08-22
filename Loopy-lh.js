for (let x = 100; x <= 200; x++) {
  let print = "";

  if (x % 3 === 0) {
    print += "Loopy";
  }
  if (x % 4 === 0) {
    print += "Lighthouse";
  }

  console.log(print === "" ? x : print);
}
