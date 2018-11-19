// Code your solution in this file

// findMatching takes an array of drivers and a string as arguments, and returns the matching list of drivers. Should be case insensitive
function findMatching(arr, element) {
  return arr.filter(function (driverName) {
    return driverName.toLowerCase() === element.toLowerCase();
  })
};

// fuzzyMatch takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters
function fuzzyMatch(arr, element) {
  return arr.filter(function (driverName) {
    return driverName.slice(0, 2) === element.slice(0, 2)
  })
};

// matchName takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element who name property matches the provided string argument
function matchName(arr, element) {
  return arr.filter(function (driver) {
    return driver.name.toLowerCase() === element.toLowerCase();
  })
};
