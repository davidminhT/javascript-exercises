const convertToCelsius = function(fahrenheit) {
  var result = ((fahrenheit-32) * 5/9);
  if(result % 1 != 0)
  {
    return Number(result.toFixed(1));
  }
  return Number(result);
};

const convertToFahrenheit = function(celsius) {
  var result = (celsius * 9/5 + 32)
  if(result % 1 != 0)
  {
    return Number(result.toFixed(1));
  }
  return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
