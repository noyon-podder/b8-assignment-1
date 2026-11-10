"use strict";
// Problem : 1
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const result1 = multiplyValue(5);
const result2 = multiplyValue(5, 3);
const result3 = multiplyValue(5, 0);
console.log(result1);
console.log(result2);
console.log(result3);
// Problem : 2
const processInput = (input) => {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return input ? "ACtive" : "Inactive";
};
console.log(processInput("hello"));
console.log(processInput(5));
console.log(processInput(true));
console.log(processInput(false));
// Problem : 3
// const formatCoordinate = (
//   coordinate: readonly [number, number, string],
// ): string => {
//   const [latitude, longitude, locationName] = coordinate;
//   return `Location: ${locationName} (${latitude}, ${longitude})`;
// };
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// // "Location: Dhaka (23.81, 90.41)"
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
// // "Location: Chittagong (22.35, 91.78)"
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
