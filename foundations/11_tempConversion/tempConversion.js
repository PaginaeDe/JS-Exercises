const convertToCelsius = function(fahrenhiet) {
  return Math.round(((fahrenhiet - 32) * 5 / 9)*10)/10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((celsius * 9 / 5 + 32)*10)/10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToFahrenheit(100))