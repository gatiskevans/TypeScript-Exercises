export { };

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = (value: number): string => {
    return (5 / 9 * (value - 32)).toFixed(1);
}
const celsiusToFahrenheit = (value: number): string => {
    return (9 / 5 * value + 32).toFixed(1);
}

console.log(fahrenheitToCelsius(100)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
