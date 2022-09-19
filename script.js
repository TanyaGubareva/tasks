const list = document.getElementById("list");
const input = document.getElementById("text");
const data = localStorage.getItem("list");
let change = document.querySelector("#change");
let editLi = null;
let form = document.querySelector("#form");

// функция удаления задачи
const removeTask = function (event) {
  // Удаляет элемент 'li'
  event.target.parentElement.remove();
  // Сохраняем новый список после удаления элемента
  localStorage.setItem("list", list.innerHTML);
};

// Проверяет, что сохраненные данные не пустые
if (data) {
  // Отображает сохраненные данные
  list.innerHTML = data;
  // Добавляем слушатели только если есть что-то сохранённое
  document.querySelectorAll("ul button").forEach(function (button) {
    button.addEventListener("click", removeTask);
  });
}

// Cледим за нажатием кнопки 'Add'
submit.onclick = function (event) {
  event.preventDefault();
  // Получаем значение из инпута с id='text'
  let task = input.value;
  // очищаем поле
  input.value = "";
  // Создает элемент 'li'
  let text2 = document.createElement("li");
  // Создаем элемент 'button'
  let rem = document.createElement("button");
  // В 'li' записываем значение из инпута
  text2.textContent = task;
  // Задаем текст кнопке
  rem.textContent = "Delete";
  // К элементу добавляем кнопку
  rem.className = "rem1";
  text2.appendChild(rem);
  // В конец списка добавляет элемент 'li'
  list.appendChild(text2);

  rem.className = "rem1";
  let edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.className = "edit1";
  edit.addEventListener("click", function () {
    change.value = this.parentElement.childNodes[0].textContent;
    editLi = this.parentElement.childNodes[0].textContent;
  });

  // К элементу добавляем кнопку
  text2.appendChild(rem);
  text2.appendChild(edit);
  // В конец списка добавляет элемент 'li'
  list.appendChild(text2);

  form.addEventListener("click", function () {
    this.parentElement.childNodes[0].textContent = change.value;
  });

  // Cохраняем список
  localStorage.setItem("list", list.innerHTML);

  // К кнопке добавляем слушателя
  rem.addEventListener("click", removeTask);
};
