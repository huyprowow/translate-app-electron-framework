let source = document.getElementById("source");
let result = document.getElementById("result");
const path=require('path');
const inputHandler = (e) => {
  console.log(e.target.value);
  //   result.innerHTML = e.target.value;
};
if (source) {
  source.addEventListener("input", inputHandler);
}
let options = {
  mode: "text",
  scriptPath: path.join(__dirname, "./"),
  pythonPath: "/usr/bin/python",
  pythonOptions: ["-u"],
  args: [10],
};
var pyshell = require("python-shell");

pyshell.run("service.py", function (err, results) {
  if (err) throw err;
  console.log("service.py finished.");
  console.log("results", results);
});
