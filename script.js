String.prototype.format = function () {
  var formatted = this;
  for (var arg in arguments) {
    formatted = formatted.replace("{" + arg + "}", arguments[arg]);
  }
  return formatted;
};

function position_changer(ev) {
  document.getElementById("style_position").value =
    ev.target.getAttribute("name");
}

function selectElement(id, valueToSelect) {
  let element = document.getElementById(id);
  element.value = valueToSelect;
}

var Detector = function () {
  var h = document.getElementsByTagName("BODY")[0];
  var d = document.createElement("DIV");
  var s = document.createElement("SPAN");
  d.appendChild(s);
  d.style.fontFamily = "serif"; //font for the parent element DIV.
  s.style.fontFamily = "serif"; //have to use serif coz in FF3.0, it doesn't fall back to font of parent element.
  s.style.fontSize = "72px"; //we test using 72px font size, we may use any size. I guess larger the better.
  s.innerHTML = "mmmmmmmmmml"; //we use m or w because these two characters take up the maximum width. And we use a L so that the same matching fonts can get separated
  h.appendChild(d);
  var defaultWidth = s.offsetWidth; //now we have the defaultWidth
  var defaultHeight = s.offsetHeight; //and the defaultHeight, we compare other fonts with these.
  h.removeChild(d);
  /* test
   * params:
   * font - name of the font you wish to detect
   * return:
   * f[0] - Input font name.
   * f[1] - Computed width.
   * f[2] - Computed height.
   * f[3] - Detected? (true/false).
   */
  function debug(font) {
    h.appendChild(d);
    var f = [];
    f[0] = s.style.fontFamily = font; // Name of the font
    f[1] = s.offsetWidth; // Width
    f[2] = s.offsetHeight; // Height
    h.removeChild(d);
    font = font.toLowerCase();
    if (font == "serif") {
      f[3] = true; // to set arial and sans-serif true
    } else {
      f[3] = f[1] != defaultWidth || f[2] != defaultHeight; // Detected?
    }
    return f;
  }
  function test(font) {
    f = debug(font);
    return f[3];
  }
  this.detailedTest = debug;
  this.test = test;
};
var fonts = [];
/**
 * other stuff
 */
function init() {
  fonts.push("cursive");
  fonts.push("monospace");
  fonts.push("serif");
  fonts.push("sans-serif");
  fonts.push("fantasy");
  fonts.push("default");
  fonts.push("Arial");
  fonts.push("Arial Black");
  fonts.push("Arial Narrow");
  fonts.push("Arial Rounded MT Bold");
  fonts.push("Bookman Old Style");
  fonts.push("Bradley Hand ITC");
  fonts.push("Century");
  fonts.push("Century Gothic");
  fonts.push("Comic Sans MS");
  fonts.push("Courier");
  fonts.push("Courier New");
  fonts.push("Georgia");
  fonts.push("Gentium");
  fonts.push("Impact");
  fonts.push("King");
  fonts.push("Lucida Console");
  fonts.push("Lalit");
  fonts.push("Modena");
  fonts.push("Monotype Corsiva");
  fonts.push("Papyrus");
  fonts.push("Tahoma");
  fonts.push("TeX");
  fonts.push("Times");
  fonts.push("Times New Roman");
  fonts.push("Trebuchet MS");
  fonts.push("Verdana");
  fonts.push("Verona");
  d = new Detector();
  // compute height and width for all fonts
  for (i = 0; i < fonts.length; i++) {
    fonts.push(d.detailedTest(fonts.shift()));
  }
  //sortResults();
  listResults();
}
function listResults() {
  var table = document.getElementById("style_font_family");
  for (i = 0; i < fonts.length; i++) {
    if (fonts[i][3]) {
      var option = document.createElement("option");
      option.value = fonts[i][0];
      option.innerHTML = fonts[i][0];
      option.style.fontFamily = fonts[i][0];
      table.appendChild(option);
    }
  }
}
function sortResults() {
  for (i = 0; i < fonts.length - 1; i++) {
    for (j = i; j < fonts.length; j++) {
      if (fonts[i][1] < fonts[j][1]) {
        t = fonts[i];
        fonts[i] = fonts[j];
        fonts[j] = t;
      }
    }
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  var cusid_ele = document.getElementsByClassName("div1");
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.classList.add("dragging");
  }
}

function drop(ev) {
  ev.preventDefault();
  var cusid_ele = document.getElementsByClassName("div1");
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.classList.remove("dragging");
  }

  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
}

function main_render() {
  window.table_list = [];
  window.table_position = 0;
  console.log(init());
  window.els_created = 0;
  document.body.setAttribute("onclick", "clr_editable(event)");
  window.dom_elements = [
    "text",
    "button",
    "canvas",
    "image",
    "table",
    "link",
    "details",
  ];
  for (var i = 0; i < window.dom_elements.length; i++) {
    var add_button = document.createElement("button");
    add_button.innerText = "Add " + window.dom_elements[i];
    add_button.classList.add("to_remove_using_js");
    add_button.setAttribute("name", window.dom_elements[i]);
    add_button.setAttribute("onclick", "Add(event)");
    add_button.id = window.dom_elements[i];
    document.getElementById("style_building").appendChild(add_button);
  }
  document.getElementsByName("text")[0].innerHTML =
    '<i class="fa-solid fa-t icon-4x"></i><i class="fa-solid fa-e"></i><i class="fa-solid fa-x"></i><i class="fa-solid fa-t"></i>';
  document.getElementsByName("button")[0].innerHTML =
    '<i class="fa-solid fa-toggle-on"></i>';
  document.getElementsByName("image")[0].innerHTML =
    '<i class="fa-regular fa-image"></i>';
}
function Add(ev) {
  trgt = ev.target;
  console.log(trgt.id);
  if (window.dom_elements.includes(trgt.id) == false) {
    trgt = ev.target.parentElement;
    console.log(trgt.id);
  }
  var type1 = trgt.id;
  window.els_created += 1;
  var object = document.createElement("div");
  object.classList.add("to_remove_classes_using_js");
  object.classList.add("hoverable");
  object.draggable = true;
  object.setAttribute("ondrop", "drop(event)");
  object.setAttribute("ondragover", "ondragover(event)");
  object.setAttribute("ondragstart", "drag(event)");
  object.setAttribute("ondblclick", "dblclck_text(event)");
  //object.setAttribute("onclick", "style_editor_attack(event)");

  object.setAttribute("onmouseover", "over(event)");
  object.setAttribute("onmouseleave", "leave(event)");
  object.id = "drag_" + type1 + "_" + window.els_created;
  object.setAttribute("name", type1 + "_" + window.els_created);
  // text adder

  var txt_section = document.createElement("section");
  txt_section.classList.add("file-marker");
  txt_section.classList.add("to_remove_using_js");

  var txt_section_ch = document.createElement("div");
  txt_section_ch.classList.add("contt");
  var txt_section_ch_ch = document.createElement("div");
  txt_section_ch_ch.classList.add("box-title");
  txt_section_ch_ch.innerText = type1 + " " + window.els_created;
  var txt_section_ch_btn = document.createElement("button");
  txt_section_ch_btn.classList.add("box-title");
  txt_section_ch_btn.innerHTML = '<i class="unstyleble fa-solid fa-xmark"></i>';
  txt_section_ch_btn.style.background = "red";
  txt_section_ch_btn.style.color = "white";
  txt_section_ch_btn.style.margin = "0";
  txt_section_ch_btn.style.borderRadius = "30%";
  txt_section_ch_btn.style.text_align = "center";
  txt_section_ch_btn.style.float = "right";
  txt_section_ch_btn.setAttribute(
    "onclick",
    "remove_element(event, '{0}' )".format(object.id),
  );
  //======================================
  var txt_section_ch_btn_stngs = document.createElement("button");
  txt_section_ch_btn_stngs.classList.add("box-title");
  txt_section_ch_btn_stngs.innerHTML =
    '<i class="unstyleble fa-solid fa-gear"></i>';
  txt_section_ch_btn_stngs.style.background = "#446cbd";
  txt_section_ch_btn_stngs.style.color = "white";
  txt_section_ch_btn_stngs.style.borderRadius = "30%";
  txt_section_ch_btn_stngs.style.text_align = "center";
  txt_section_ch_btn_stngs.style.float = "right";
  txt_section_ch_btn_stngs.style.margin = "0";
  txt_section_ch_btn_stngs.classList.add("unstyleble");
  txt_section_ch_btn_stngs.setAttribute(
    "onclick",
    "style_editor_attack(event, '{0}' )".format(object.id),
  );
  txt_section_ch.appendChild(txt_section_ch_ch);
  txt_section_ch.appendChild(txt_section_ch_btn);
  txt_section_ch.appendChild(txt_section_ch_btn_stngs);
  txt_section.appendChild(txt_section_ch);
  object.appendChild(txt_section);
  //======================================
  if (type1 == "text") {
    var txt_section = document.createElement("p");
    txt_section.innerText = "Text";
    object.appendChild(txt_section);
  } else if (type1 == "button") {
    var txt_section = document.createElement("button");
    txt_section.innerText = "Button";
    object.appendChild(txt_section);
  } else if (type1 == "canvas") {
    var txt_section = document.createElement("canvas");
    txt_section.innerText = "Canvas";
    txt_section.style.setProperty("border", "1px solid black");
    object.appendChild(txt_section);
  } else if (type1 == "link") {
    var txt_section = document.createElement("a");
    txt_section.href = "#";
    txt_section.innerText = "Link";
    object.appendChild(txt_section);
  } else if (type1 == "details") {
    var txt_section = document.createElement("details");
    var txt_section_summary = document.createElement("summary");
    txt_section_summary.innerText = "Details";
    txt_section.appendChild(txt_section_summary);
    txt_section.innerText = "hidden text";

    object.appendChild(txt_section);
  } else if (type1 == "table") {
    var par = document.createElement("div");
    var txt_section = document.createElement("table");
    txt_section.rows = 1;
    txt_section.setAttribute("onclick", "get_border_onclick(event)");
    txt_section.setAttribute("onmouseover", "get_border_onhover(event)");
    txt_section.setAttribute("onmouseleave", "get_border_onleave(event)");
    var row = txt_section.insertRow(txt_section.rows - 1);
    txt_section.setAttribute(
      "style",
      "border: 4px solid darkblue;margin-left: auto;margin-right: auto;",
    );
    row.setAttribute(
      "style",
      "border: 4px solid darkblue;margin-left: auto;margin-right: auto;",
    );
    txt_section.classList.add("table1");
    var cell = row.insertCell(0);
    cell.innerText = "Table";
    cell.setAttribute("onclick", "dblclck_text(event)");
    window.table_list.push(txt_section);
    par.appendChild(txt_section);
    object.appendChild(par);
  }

  document.getElementById("main").appendChild(object);
}

function remove_element(ev, object) {
  document.getElementById(object).remove();
}

function dblclck_text(event) {
  event.target.setAttribute("contenteditable", "true");
  event.target.classList.add("editing");
  event.target.focus();
}

function over(ev) {
  if (ev.target.classList.contains("hoverable") == true) {
    ev.target.classList.add("msh_hvr");
    var width = ev.target.offsetWidth;
    var height = ev.target.offsetHeight;
    ev.target.children[0].children[0].children[0].innerText =
      ev.target.getAttribute("name") + "     " + height + "x" + width;
    var cusid_ele = document.getElementsByClassName("box-title");
    for (var i = 0; i < cusid_ele.length; ++i) {
      var item = cusid_ele[i];
      item.classList.add("visible-txt");
    }
  }
}

function leave(ev) {
  if (ev.target.classList.contains("hoverable") == true) {
    ev.target.classList.remove("msh_hvr");
  }
  var cusid_ele = document.getElementsByClassName("box-title");
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.classList.remove("visible-txt");
  }
}
function clr_editable(ev) {
  var cusid_ele = document.getElementsByClassName("editing");
  for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.classList.remove("editing");
    item.setAttribute("contenteditable", "false");
  }
}
function getHyperText(ev) {
  var pasthtml = document.documentElement.innerHTML;
  var elementsContainer = document.getElementsByClassName("to_remove_using_js");
  while (elementsContainer.length != 0) {
    elementsContainer[0].outerHTML = "";
    elementsContainer = document.getElementsByClassName("to_remove_using_js");
  }

  var elementsContainer = document.getElementsByClassName(
    "to_remove_classes_using_js",
  );
  elementsContainer = Array.from(elementsContainer);
  elementsContainer.forEach(function (obj) {
    Array.from(obj.getAttributeNames()).forEach(function (attr) {
      if (attr != "style" && attr != "id" && attr != "name") {
        if (attr == "class") {
          if (obj.attr != undefined && obj.attr.split(" ").includes("table1")) {
            1 == 1;
          } else {
            obj.removeAttribute(attr);
          }
        } else {
          obj.removeAttribute(attr);
        }
      }
    });
  });
  var tempLink = document.createElement("a");
  var taBlob = new Blob([document.documentElement.outerHTML], {
    type: "text/plain",
  });
  tempLink.setAttribute("href", URL.createObjectURL(taBlob));
  tempLink.setAttribute("download", `page.html`);
  tempLink.click();

  URL.revokeObjectURL(tempLink.href);
  document.documentElement.innerHTML = pasthtml;
}
function style_editor_attack(ev, object) {
  var el = document.getElementById(object);
  if (el.classList.contains("unstyleble") == false) {
    window.evt_target = el;
    document.getElementById("Object_Name").value = el.getAttribute("name");
    document.getElementById("style_color_txt").value = el.style.color;
    document.getElementById("style_background_color_txt").value =
      el.style.background;
    document.getElementById("style_font_size").value = el.style.fontSize;
    selectElement("style_font_family", el.style.fontFamily.slice(1, -1));
    document.getElementById("style_position").value =
      el.style.getPropertyValue("text-align");
  }
}
function get_color_to_form(ev, name) {
  document.getElementById(name).value = ev.target.value;
}
function get_style_from_form(ev) {
  var name = document.getElementById("Object_Name").value;
  var color = document.getElementById("style_color_txt").value;
  var align = document.getElementById("style_position").value;
  var background_color = document.getElementById(
    "style_background_color_txt",
  ).value;
  var font_size = document.getElementById("style_font_size").value;
  var font_family = document.getElementById("style_font_family").value;
  window.evt_target.style.color = color;
  window.evt_target.style.background = background_color;
  window.evt_target.style.fontSize = font_size;
  window.evt_target.style.fontFamily = font_family;
  window.evt_target.style.setProperty("text-align", align);
  window.evt_target.setAttribute("name", name);
}

function get_border_onclick(event) {
  console.log("1");
  var object = event.target;
  var posX = event.clientX;
  var posY = event.clientY;
  var rect = object.getBoundingClientRect();
  var x = rect.right;
  var y = rect.bottom;
  if (Math.abs(posX - x) < 10) {
    for (var i = 0; i < object.rows.length; i++) {
      var row = object.rows[i];
      var cell = row.insertCell(row.cells.length);
      cell.setAttribute("onclick", "dblclck_text(event)");
      cell.innerText = "Table";
    }
  } else if (Math.abs(posY - y) < 10) {
    var row = object.insertRow(object.rows.length - 1);
    row.setAttribute(
      "style",
      "border: 4px solid darkblue;margin-left: auto;margin-right: auto;",
    );
    if (object.rows.length > 0) {
      var cells = object.rows[object.rows.length - 1].cells.length;
      for (var i = 0; i < cells; i++) {
        var cell = row.insertCell(i);
        cell.innerText = "Table";
        cell.setAttribute("onclick", "dblclck_text(event)");
      }
    } else {
      var cell = row.insertCell(0);
      cell.innerText = "Table";
      cell.setAttribute("onclick", "dblclck_text(event)");
    }
  }
}
function get_border_onleave(event) {
  var object = event.target;
  object.style.removeProperty("border-right");
  object.style.removeProperty("border-bottom");
}
function get_border_onhover(event) {
  var object = event.target;
  var posX = event.clientX;
  var posY = event.clientY;
  var rect = object.getBoundingClientRect();
  var x = rect.right;
  var y = rect.bottom;
  if (Math.abs(posX - x) < 10) {
    object.style.setProperty("border-right", "4px solid red");
  } else if (Math.abs(posY - y) < 10) {
    object.style.setProperty("border-bottom", "4px solid red");
  }
}