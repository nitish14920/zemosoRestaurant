async function getData() {
  var response = await fetch("/data.json");
  var data = await response.json();
  console.log(data);

  localStorage.setItem("menu", JSON.stringify(data.menu));
  localStorage.setItem("tables", JSON.stringify(data.tables));
}

function showMenu() {
  var menu = JSON.parse(localStorage.getItem("menu"));
  console.log(menu);

  var menu_container = document.getElementById("menu-container");
  for (let i = 0; i < menu.length; i++) {
    var menu_div = document.createElement("div");
    menu_div.setAttribute("id", i + 1);
    menu_div.setAttribute("draggable", "true");
    menu_div.ondragstart = function drag(e) {
      console.log(e.target.id);
      e.dataTransfer.setData(`text`, e.target.id);
    };
    menu_div.classList.add("menu-item");
    var menu_title = document.createElement("span");
    menu_title.classList.add("menu-title");
    var menu_price = document.createElement("span");
    menu_price.classList.add("menu-price");
    var menu_image = document.createElement("img");
    menu_image.classList.add("menu-image");
    menu_title.innerText = menu[i].menuName;
    menu_price.innerText = menu[i].price;
    menu_image.src = menu[i].image;

    menu_div.append(menu_title, menu_price, menu_image);

    menu_container.append(menu_div);
  }
}
function showTables() {
  var tables = JSON.parse(localStorage.getItem("tables"));
  console.log(tables);
}
function allowDrop(e) {
  e.preventDefault();
}

function drop1(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var item = document.getElementById(data);
  var div = document.getElementById("myModal1");
  var totalItemsTable1 = document.getElementById("total-items-table1");
  var totalItems = document.getElementById("total-items1");

  var totalCostTable1 = document.getElementById("total-cost-table1");

  totalItems.innerText = 1 + Number(totalItems.innerText);

  var totalCost = document.getElementById("total-cost1");
  totalCost.innerText =
    Number(totalCost.innerText) + Number(item.childNodes[1].innerText.slice(3));

  totalItemsTable1.innerText = "Total Items: " + totalItems.innerText;
  totalCostTable1.innerText = "Total Cost: " + totalCost.innerText;
  div.append(item);
}
function drop2(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var item = document.getElementById(data);
  var div = document.getElementById("myModal2");
  var totalItemsTable1 = document.getElementById("total-items-table2");
  var totalCostTable1 = document.getElementById("total-cost-table2");
  var totalItems = document.getElementById("total-items2");
  totalItems.innerText = 1 + Number(totalItems.innerText);

  var totalCost = document.getElementById("total-cost2");
  totalCost.innerText =
    Number(totalCost.innerText) + Number(item.childNodes[1].innerText.slice(3));

  totalItemsTable1.innerText = "Total Items: " + totalItems.innerText;
  totalCostTable1.innerText = "Total Cost: " + totalCost.innerText;
  div.append(item);
}
function drop3(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var item = document.getElementById(data);
  var div = document.getElementById("myModal3");
  var totalItemsTable1 = document.getElementById("total-items-table3");
  var totalCostTable1 = document.getElementById("total-cost-table3");

  var totalItems = document.getElementById("total-items3");
  totalItems.innerText = 1 + Number(totalItems.innerText);

  var totalCost = document.getElementById("total-cost3");
  totalCost.innerText =
    Number(totalCost.innerText) + Number(item.childNodes[1].innerText.slice(3));

  totalItemsTable1.innerText = "Total Items: " + totalItems.innerText;
  totalCostTable1.innerText = "Total Cost: " + totalCost.innerText;

  div.append(item);
}

function searchMenu() {
  console.log("Entered search Function");
  var menu = JSON.parse(localStorage.getItem("menu"));
  var value = document.getElementById("menuSearch").value;
  var menu_container = document.getElementById("menu-container");
  menu_container.innerHTML = "";
  console.log(menu_container);
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].menuName.toLowerCase().includes(value.toLowerCase())) {
      var menu_div = document.createElement("div");

      menu_div.setAttribute("id", i + 1);
      menu_div.setAttribute("draggable", "true");
      menu_div.ondragstart = function drag(e) {
        console.log(e.target.id);
        e.dataTransfer.setData(`text`, e.target.id);
      };
      menu_div.classList.add("menu-item");
      var menu_title = document.createElement("span");
      menu_title.classList.add("menu-title");
      var menu_price = document.createElement("span");
      menu_price.classList.add("menu-price");
      var menu_image = document.createElement("img");
      menu_image.classList.add("menu-image");
      menu_title.innerText = menu[i].menuName;
      menu_price.innerText = menu[i].price;
      menu_image.src = menu[i].image;

      menu_div.append(menu_title, menu_price, menu_image);

      menu_container.append(menu_div);
    }
  }
}

getData();
showMenu();
showTables();
