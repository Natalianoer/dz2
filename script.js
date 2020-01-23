var inputData = document.querySelector("input[type='text']");
var ulSpisok = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var lists = document.getElementsByTagName("li");
var pAll = document.getElementsByTagName("p");
var pLists = document.getElementsByClassName("valueLi");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var infoBtn = document.getElementById("info");
var container = document.getElementById('form-container');
var form = document.getElementById('form');

function deleteTodo() {//удалить задачу при нажатии на Удалить
    for (let span of spans) {
        span.addEventListener('click', function() {
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
};
// function performed() {//удалить задачу при нажатии на Удалить
//     for (let li of lists) {
//         li.addEventListener('click', function(e) {
//           if (e.target.tagName === "li"){
//             e.target.classList.toggle('pListClick');
//           }
//           // pLists.style.textDecoration = "line-through";
//           // event.stopPropagation();
//         }, false
//       );
//     }
// };

function performed() {//удалить задачу при нажатии на Удалить
  ulSpisok.addEventListener('click', function(even) {
    if (even.target.tagName === 'P') {
      even.target.classList.toggle('pListClick');
    }
  }, false);
}

function loadTodo() {
    if (localStorage.getItem('TodoApplication')) {//добавляем данные
        ulSpisok.innerHTML = localStorage.getItem('TodoApplication');
    }
    deleteTodo();
};

//addeventListener - обработчик события

inputData.addEventListener('keypress', function(keyPressed){
    if (keyPressed.which === 13) {//проверка на enter
      if (this.value != ' ') {
        var newLi = document.createElement("li");
        var newSpan = document.createElement("span");
        newSpan.innerHTML = 'Удалить';
        var newPdata = document.createElement("p");
        var newPstyle = document.createElement("p");
        newPstyle.innerHTML = this.value;
        var newSpanTodo  = this.value;
        newPstyle.className = "valueLi";

        var newTodo = this.value;
        this.value = " ";

        var newData = new Date();
        var curr_date = newData.getDate();
        var curr_month = newData.getMonth() + 1;
        var curr_year = newData.getFullYear();

        var newP = curr_date + "-" + curr_month + "-" + curr_year;
        newPdata.innerHTML = newP;

        ulSpisok.appendChild(newLi).append(newSpan) + newLi.append(newPstyle) + newLi.append(newPdata);

        deleteTodo();
        performed();
      }
    }
});

saveBtn.addEventListener('click', function() {
    localStorage.setItem('TodoApplication', ulSpisok.innerHTML) //установить значение в определенную ячейку
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = "";
    localStorage.setItem('TodoApplication', ulSpisok.innerHTML);
});

deleteTodo();

performed();

loadTodo();

//Моальное окно
function divShadow() {//создаем тень окна
  var newShadow = document.createElement('div');
  newShadow.id = 'newShadow';
  document.body.style.overfloyY = 'hidden';
  document.body.appendChild(newShadow);
};
function clearShadow() {//удаляем тень окна
  document.getElementById('newShadow').remove();
  document.body.style.overfloyY = ' ';
}
function showModal() {
  divShadow();
  form.innerHTML = '<p>Маженкова Наталия Валентиновна</p><button id="exitBtn">Закрыть</button>';
  var exitBtn = document.getElementById("exitBtn");
  container.style.display = 'block';

  exitBtn.onclick = function() {
    clearShadow();
    container.style.display = 'none';
  };
};
infoBtn.addEventListener('click', function(){
  showModal();
});

//Стили flexBox
function flexStyle() {
  var style = document.createElement('style');
  style.innerHTML = `
    #todo_app {
      display: flex;
      flex-direction: column;
    }
    button:hover {
      background-color: #077;
      cursor: pointer;
      color: white;
    }
  `;
  document.head.appendChild(style);
}

flexStyle();
