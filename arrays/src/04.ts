function capitalizeNames(arr: string[]): string[] {
  let capitalize = arr.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
  return capitalize;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]