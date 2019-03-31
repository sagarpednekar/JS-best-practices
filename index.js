/** Arrays */

const items = ["car", "bike", "plane"];
/**
 *The destructuring assignment syntax with Arrays
 **/

const [CAR, BIKE, PLANE] = items;

console.log(`
CAR: ${CAR},
bike: ${BIKE},
plane: ${PLANE}
`);

/** TO skip items */

const [, , plane] = items;

console.log("Plane ===>", plane);

/**combine the destructuring syntax with the rest syntax: */

const [car, ...otherItems] = items;

console.log(
  `
CAR: ${car},
OTHERS: ${otherItems}
`
);

/** Objects */

const car = {
  brand: "ferrari",
  type: "sportscar",
  horsepower: 600,
  engine: {
    horsepower: 600,
    liters: 4,
    fuel: "gas"
  },
  wheels: 4
};
/**
 * The destructuring assignment syntax with Objects
 */
const { brand: brandName, horsepower: horsePower } = car;

console.log(
  `
    brand: ${brandName},
    Horse Power: ${horsePower}
    `
);
const {
  engine: { horsepower: horsePower, fuel: fuelType }
} = car;

console.log(
  `
    Horse Power inside Engine: ${horsePower} run on ${fuelType}
    `
);
