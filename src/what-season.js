module.exports = function getSeason(date) {
  if (!date) {return 'Unable to determine the time of year!';}
  else if (Object.keys(date).length)  {throw new Error();}
  let month = date.getMonth();
  if (month>=0 && month<2 || month==11) {return "winter";}
  else if (month>=2 && month<5) {return "spring";}
  else if (month>=5 && month<8) {return "summer";}
  else if (month>=8 && month<11) {return "autumn";}
};
