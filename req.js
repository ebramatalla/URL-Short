var expression =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
var regex = new RegExp(expression);
var t = "https://regex101.com/";

if (t.match(regex)) {
  console.log("Successful match");
} else {
  console.log("No match");
}
