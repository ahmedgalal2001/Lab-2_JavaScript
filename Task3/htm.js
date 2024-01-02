convert_24h_to_12h(prompt("Enter your hours : "));
function convert_24h_to_12h(str) {
  str = checkInInputNumber(str);
  if (str != false || str == 0) {
    if (str >= 0 && str <= 24) {
      if (str == 0) document.write(`${12} AM`);
      else if (str >= 13 && str <= 24) document.write(`${str - 12} PM`);
      else document.write(`${str} AM`);
    } else document.write("invaild Hours");
  } else document.write("invaild Hours");
}

function checkNull(_str) {
  return _str != null;
}

function checkInInputNumber(_str) {
  if (checkNull(_str)) {
    let str = _str.trim();
    if (Number(str) || str == 0) return Number(str);
    else return false;
  }
  return false;
}
