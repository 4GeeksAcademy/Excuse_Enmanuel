/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["El perro", "Mi abuela", "La tortuga", "Mi tia"];
let action = ["se comió", "se orinó", "aplastó", "rompió"];
let what = ["mi tarea", "las llaves", "mi ferrari", "mi proyecto"];
let when = ["antes de clases", "justo a tiempo", "cuando dormía", "ayer"];

function excuse(who, action, what, when) {
  let whoExcuse = Math.floor(Math.random() * who.length);
  let actionExcuse = Math.floor(Math.random() * action.length);
  let whatExcuse = Math.floor(Math.random() * what.length);
  let whenExcuse = Math.floor(Math.random() * when.length);

  return (
    who[whoExcuse] +
    " " +
    action[actionExcuse] +
    " " +
    what[whatExcuse] +
    " " +
    when[whenExcuse]
  );
}

window.onload = function() {
  let excusa = excuse(who, action, what, when);
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excusa;
};
