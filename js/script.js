function footerUp() {
  document.getElementById("footer").classList.remove("footer");
  document.getElementById("footer").classList.add("open");
  document.getElementById("line").classList.add("after-line");
  document.getElementById("line").classList.remove("before-line");

  /*document.getElementById("footer").onclick = function() {
    alert("Спасибо");
  };*/
}

function footerDown() {
  document.getElementById("footer").classList.add("footer");
  document.getElementById("footer").classList.remove("open");
  document.getElementById("line").classList.remove("after-line");
  document.getElementById("line").classList.add("before-line");

  /*document.getElementById("footer").onclick = function() {
    alert("Спасибо");
  };*/
}

function listOpen() {
  document.getElementById("content-list").classList.add("content-list-open");
  document
    .getElementById("content-list")
    .classList.remove("content-list-hidden");
}

function getListContent() {
  let fragment = new DocumentFragment();

  for (let i = 1; i <= 11; i++) {
    let li = document.createElement("li");
    //li.append(left-number);
    li.append(wrapperLi.cloneNode(true));
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)

// Боковая панель.
var panel = document.querySelector(".left-panel-wrapper");
var arrow = document.querySelector(".arrow");
var arrowI = document.querySelector(".fa-sort-down");
panel.addEventListener("mouseover", function() {
  panel.classList.add("active");
  arrow.classList.add("arrow-active");
  arrowI.classList.add("arrow-i-active");
});
panel.addEventListener("mouseout", function() {
  panel.classList.remove("active");
  arrow.classList.remove("arrow-active");
  arrowI.classList.remove("arrow-i-active");
});

// Поиск.
var headerSearch = document.querySelector(".search-wrapper");
var search = document.querySelector(".search");

headerSearch.addEventListener("mouseover", function() {
  search.classList.add("search-active");
});
headerSearch.addEventListener("mouseout", function() {
  search.classList.remove("search-active");
});

// Поиск по кнопке Enter.
(function() {
  document.querySelector(".search").addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      // можете делать все что угодно со значением текстового поля
      console.log(this.value);
    }
  });
})();

//  Доролнительныя информация о юзере.

var content = document.querySelector(".modal-content");
var container = document.querySelector(".modal-container");
var inf = document.querySelector(".dop-inf");
var infoLogo = document.querySelector(".info-logo");

infoLogo.addEventListener("click", function() {
  content.classList.toggle("modal-content-full");
  container.classList.toggle("modal-container-full");
  inf.classList.toggle("dop-inf-full");
});
