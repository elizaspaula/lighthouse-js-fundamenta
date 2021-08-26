//new array
const cars = [];
const speed = 38;

const carPassing = function (cars, speed) {
  let newObj = { time: Date.now(), speed: speed };
  cars.push(newObj);
  return cars;
};
console.log(carPassing(cars, speed));
