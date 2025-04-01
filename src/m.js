const container = document.querySelector(".container");
const btn1 = document.getElementById("btn1");
const lastbtn = document.getElementById("lastbtn");
const content = document.querySelector(".content");
const contents = document.querySelector(".contents");
const menubtn = document.getElementById("menubtn");
const menus = document.querySelector(".menus");

function activatebutton() {
  btn1.addEventListener("click", () => {
    content.style.display = "flex";
    contents.style.display = "none";
    menus.style.display = "none";
  });
  menubtn.addEventListener("click", () => {
    content.style.display = "none";
    contents.style.display = "flex";
    menus.style.display = "none";
  });
  lastbtn.addEventListener("click", () => {
    content.style.display = "none";
    contents.style.display = "none";
    menus.style.display = "flex";
  });
}

function createElement(
  idname,
  idelement,
  context,
  element,
  classname,
  textcontent
) {
  const newelement = document.createElement(element);
  const news = document.createElement(idelement);
  newelement.className = classname;
  news.id = idname;
  newelement.textContent = textcontent;
  news.textContent = context;
  content.appendChild(newelement);
  newelement.appendChild(news);
}
function createElements(
  idname,
  idelement,
  context,
  element,
  classname,
  textcontent
) {
  const newelement = document.createElement(element);
  const news = document.createElement(idelement);
  newelement.className = classname;
  news.id = idname;
  newelement.textContent = textcontent;
  news.textContent = context;
  contents.appendChild(newelement);
  newelement.appendChild(news);
}
function create(idname, idelement, context, element, classname, textcontent) {
  const newelement = document.createElement(element);
  const news = document.createElement(idelement);
  newelement.className = classname;
  news.id = idname;
  newelement.textContent = textcontent;
  news.textContent = context;
  menus.appendChild(newelement);
  newelement.appendChild(news);
}
export { activatebutton, createElement, createElements, create };
