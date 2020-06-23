function receiveMessage(event) {
  if (!event.data.command) {
    return;
  }
  if (event.data.command === "say" && event.data.arg !== undefined) {
    say(event.data.arg);
  }
}

function sayToParent(txt){
  try{
    parent.say(txt);
  } catch(e){
    say(`sayToParent() error: ${e}`);
  }
}
function say(txt) {
  document.getElementById("result").insertAdjacentHTML("beforeend", `${txt}<br>`);
}

window.addEventListener("message", receiveMessage, false);
