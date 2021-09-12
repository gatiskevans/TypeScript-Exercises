const sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheep(arr: boolean[]): number {
  let counter = 0;
  arr.filter(present => { if (present) { return counter++; } });
  return counter;
}

console.log(countSheep(sheep));