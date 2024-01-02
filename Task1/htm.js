var val = "";
do {
  var newval = prompt("Enter your Age : ");
  if (checkNull(newval)) val = newval;
} while (checkNull(newval));

val = checkInInputAge(val);
if (val != false) document.write(val);
else document.write("Invaild Age");

function checkNull(_str) {
  return _str != null;
}

function checkInInputNumber(_str) {
  if (checkNull(_str)) {
    let str = _str.trim();
    if (Number(str)) return Number(str);
    else return false;
  }
  return false;
}

function checkInInputAge(age) {
  age = checkInInputNumber(age);
  if (age != false) {
    if (age >= 1 && age <= 10) return "Child";
    else if (age <= 18) return "Teenager";
    else if (age <= 50) return "Grown up";
    else if (age <= 100) return "Old";
    else return false;
  }
  return age;
}
