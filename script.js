submit.onclick = function () {
  let task = document.getElementById("text").value;
  console.log(task);
  let text2 = document.createElement("li");
  text2.className = "list2";
  text2.innerHTML = task;
  document.getElementById("list").appendChild(text2);
  let rem = document.createElement("button");
  rem.className = "rem1";
  rem.innerHTML = "Delete";
  text2.appendChild(rem);
  rem.addEventListener("click", function () {
    text2.remove();
  });
};

console.log("start");
