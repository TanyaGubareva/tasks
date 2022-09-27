const list = document.getElementById("list");
const input = document.getElementById("text");
const data = localStorage.getItem("list");
let change = document.querySelector("#change");
let editLi;
let form = document.querySelector("#submit2");
let form2 = document.querySelector("#form2");

// функция удаления задачи
const removeTask = function (event) {
  // Удаляет элемент 'li'
  event.target.parentElement.remove();
  // Сохраняем новый список после удаления элемента
  localStorage.setItem("list", list.innerHTML);
};

// WARING: ДЛЯ СТАРЫХ ЗАДАЧ(задачи которые были сохранены в памятья)
// Проверяет, что сохраненные данные не пустые(то есть у нас есть задачи в прошлом)
if (data) {
  // Отображает сохраненные данные
  list.innerHTML = data;
  // Добавляем слушатели для старых задач, только если есть что-то сохранённое
  document.querySelectorAll("ul .rem1").forEach(function (button) {
    button.addEventListener("click", removeTask);
  });
  // добавляем слушатели для старых задач, на редактирование задачи
  document.querySelectorAll("ul .edit1").forEach(function (button) {
    button.addEventListener("click", function () {
      editLi = this.parentElement;
      console.log(this.parentElement);
      change.value = this.parentElement.childNodes[0].textContent;
      form2.style.display = "block";
    });
  });
}

console.log(this);

// Cледим за нажатием кнопки 'Add'
submit.onclick = function (event) {
  event.preventDefault();
  // Получаем значение из инпута с id='text'
  let task = input.value;
  // очищаем поле
  input.value = "";
  // Создает элемент 'li'
  let text2 = document.createElement("li");
  // В 'li' записываем значение из инпута
  text2.textContent = task;
  text2.className = "text2";
  // Создаем элемент 'button'
  let rem = document.createElement("button");
  rem.className = "rem1";
  rem.textContent = "Delete";
  // Задаем текст кнопке
  // К элементу добавляем кнопку
  text2.appendChild(rem);
  // В конец списка добавляет элемент 'li'
  list.appendChild(text2);

  let edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.className = "edit1";
  edit.addEventListener("click", () => {
    editLi = text2;
    change.value = task;
    form2.style.display = "block";
  });

  // К элементу добавляем кнопку
  text2.appendChild(rem);
  text2.appendChild(edit);
  // В конец списка добавляет элемент 'li'
  list.appendChild(text2);

  // Cохраняем список
  localStorage.setItem("list", list.innerHTML);

  // К кнопке добавляем слушателя
  rem.addEventListener("click", removeTask);
};

form.addEventListener("click", function (event) {
  event.preventDefault();
  editLi.childNodes[0].textContent = change.value;
  console.log(editLi.childNodes[0]);
  form2.style.display = "none";
});

// <html>
// <body>
//  <button>text</button>
// </body>
// </html>
// <script>
//  const button = document.querySelector('button'); <button>text</button>
//  button.textContent = '123'; <button>123</button>
//  button.addEventListener("click", function (event) {
//    event.target.textContent = 'foo'; <button>foo</button>
//    button.textContent = 'bar'; <button>bar</button>
//  }) <button>text</button>
// </script>

// <html>
// <body>
//  <button id="foobar">foo</button>
//  <button class="bar">foo</button>
//  <button class="bar">foo</button>
//  <div>
//   <button class="foo">bar</button>
//   <button class="foo">bar</button>
//  </div>
// </body>
// </html>
// <script>
//  const buttonFooBar = document.querySelector('#foobar'); <button id="foobar">foo</button>
//  const buttonsBar = document.querySelector('button.bar'); [<button class="bar">foo</button>, <button class="bar">foo</button>]
//  const buttonsFoo = document.querySelector('button.foo'); [<button class="foo">bar</button>, <button class="foo">bar</button>]
//  const hanlder = function(event) {
//    if (event.target.classlist.includes('foo')) {
//      consolo.log('this button exist class foo')
//      return;
//    }
//
//    consolo.log('this button not exist class foo')
//  }
//
//  buttonsBar.forEach(function(button) {
//    button.addEventListener('click', handler)
//  })
//  buttonsFoo.forEach(function(button) {
//    button.addEventListener('click', handler)
//  })
// </script>
