const email = [
  194,
  200,
  218,
  210,
  220,
  128,
  202,
  240,
  224,
  216,
  222,
  230,
  210,
  236,
  202,
  92,
  216,
  222,
  236,
  202
]

var output = ""
for(i in email) {
  output += String.fromCharCode(email[i] / 2)
}

const regexpr = /{.+}/i;
var p = document.getElementById("lift_yourself");
p.textContent = p.textContent.replace(regexpr, output);

