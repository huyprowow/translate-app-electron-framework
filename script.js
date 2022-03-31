let input = document.getElementById("input");
let output = document.getElementById("output");
const path = require("path");
let { PythonShell } = require("python-shell");

let strNeedTrans;
const inputHandler = (e) => {
  let handlerStr = e.target.value.replace(/\s+/g, " ").trim();

  if (handlerStr === "") {
    output.innerHTML = "";
    return;
  } else {
    strNeedTrans = handlerStr;
  }
  let options = {
    mode: "text",
    // pythonPath: process.env.PYTHON_EXE_PATH,
    pythonOptions: ["-u"],
    scriptPath: path.join(__dirname, "./"),
    args: strNeedTrans,
  };

  PythonShell.run("service.py", options, function (err, results) {
    if (err) throw err;
    //console.log("service.py finished.");
    //console.log("results", results);
    output.textContent = results;
    strNeedTrans = "";
  });
};
if (input) {
  input.addEventListener("input", inputHandler);
}
