// Отображает сохраненные данные
let list = document.getElementById("list");
let data = localStorage.getItem("list");
// Проверяет, что сохраненные данные не пустые
if (data) {
  list.innerHTML = data;
}

// Cледим за нажатием кнопки 'Add'
submit.onclick = function () {
  // Получаем значение из инпута с id='text'
  let task = document.getElementById("text").value;
  // Создает элемент 'li'
  let text2 = document.createElement("li");
  // Создаем элемент 'button'
  let rem = document.createElement("button");
  // В 'li' записываем значение из инпута
  text2.innerHTML = task;
  // Задаем текст кнопке
  rem.innerHTML = "Delete";
  // К элементу добавляем кнопку
  rem.className = "rem1";
  text2.appendChild(rem);
  // В конец списка добавляет элемент 'li'
  list.appendChild(text2);
  // К кнопке добавляем слушателя
  rem.addEventListener("click", function () {
    // Удаляет элемент 'li'
    text2.remove();
    // Сохраняем новый список после удаления элемента
    localStorage.setItem("list", list.innerHTML);
  });

  // Cохраняем список
  localStorage.setItem("list", list.innerHTML);
};
let btns = document.querySelectorAll("ul button");
console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.parentElement.remove();
    localStorage.setItem("list", list.innerHTML);
  });
});
