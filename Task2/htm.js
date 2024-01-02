countNumberVowels(prompt("Enter your String : "));

function countNumberVowels(str) {
  if (checkString(str) != false) {
    var vowels = { a: 0, e: 0, o: 0, u: 0, i: 0 };
    var length = str.length;
    for (let i = 0; i < length; i++) {
      for (const key in vowels) {
        if (key == str[i]) vowels[key]++;
      }
    }
    document.write(`${str} contain : `);
    document.write("</br>");
    for (const key in vowels) {
      document.write(`${key} : ${vowels[key]}`);
      document.write("</br>");
    }
  } else document.write("Ivaild String");
}

function checkNull(_str) {
  return _str != null;
}

function checkString(_str) {
  if (checkNull(_str)) {
    let str = _str.trim();
    if (str == "") return false;
    else return str;
  }
  return false;
}
