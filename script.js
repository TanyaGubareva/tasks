let list = document.getElementById("list");
let data = localStorage.getItem("list");
if (data) {
  list.innerHTML = data;
}

submit.onclick = function () {
  let task = document.getElementById("text").value;
  console.log(task);
  let text2 = document.createElement("li");
  text2.className = "list2";
  text2.innerHTML = task;
  list.appendChild(text2);
  let list1 = localStorage.setItem("list", list.innerHTML);
  let rem = document.createElement("button");
  rem.className = "rem1";
  rem.innerHTML = "Delete";
  text2.appendChild(rem);
  rem.addEventListener("click", function () {
    text2.remove();
    let list1 = localStorage.setItem("list", list.innerHTML);
  });
};
