const input = document.getElementById("listinput");
const listitems = document.getElementById("listitems");

function addItem() {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listitems.appendChild(li);
    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  } else {
    alert("Type something to add in the list !");
  }
  input.value = "";
  saveData();
}

listitems.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("list", listitems.innerHTML);
}

function showList() {
  listitems.innerHTML = localStorage.getItem("list");
}

showList();

input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault(); // Prevent default behavior (page refresh)
    addItem();
  }
});
