// new style adder
function style_changer_new(element_dict) {
  var stylemap = document.styleSheets[0];
  var css_style_former =
    ".${name} *{ \
    color: ${element_dict['color']}; \
    background-color: ${element_dict['background-color']}; \
    background-image: ${element_dict['background-image']}; \
    background-repeat: ${element_dict['background-repeat']}; \
    background-position: ${element_dict['background-position']}; \
    background-size: ${element_dict['background-size']}; \
    font-size: ${element_dict['font-size']}; \
    font-family: ${element_dict['font-family']}; \
    font-weight: ${element_dict['font-weight']}; \
    text-align: ${element_dict['text-align']}; \
    text-decoration: ${element_dict['text-decoration']}; \
    text-transform: ${element_dict['text-transform']}; \
    text-shadow: ${element_dict['text-shadow']}; \
    text-indent: ${element_dict['text-indent']}; \
    opactiy: ${element_dict['opacity']}; \
    border-radius: ${element_dict['border-radius']}; \
    border-style: ${element_dict['border-style']}; \
    border-color: ${element_dict['border-color']}; \
    border-width: ${element_dict['border-width']}; \
    animation-duration: ${element_dict['animation-duration']}; \
    animation-name: ${element_dict['animation-name']}; \
    animation-iteration-count: ${element_dict['animation-iteration-count']}; \
    animation-direction: ${element_dict['animation-direction']}; \
    animation-timing-function: ${element_dict['animation-timing-function']}; \
    animation-event-function: ${element_dict['animation-event-function']}; \
    animation-delay: ${element_dict['animation-delay']}; \
    animation-play-state: ${element_dict['animation-play-state'];}";
  stylemap.insertRule(css_style_former);
}
function load_to_form(ev,el){
    
      document.getElementById('name').value =el;
    var el=document.getElementById(el);
    el.classList.add(el.id);
  document.getElementById('color').value = el.style.color;
      document.getElementById('background-color').value = el.style.backgroundColor;
      document.getElementById('background-image').value = el.style.backgroundImage;
      document.getElementById('background-repeat').value = el.style.backgroundRepeat;
      document.getElementById('background-position').value = el.style.backgroundPosition;
      document.getElementById('background-size').value = el.style.backgroundSize;
  document.getElementById('font-size').value = el.style.fontSize;
      document.getElementById('font-family').value = el.style.fontFamily;
      document.getElementById('text-align').value = el.style.textAlign;
      document.getElementById('text-decoration').value = el.style.textDecoration;
  document.getElementById('text-transform').value = el.style.textTransform;
  document.getElementById('text-shadow').value = el.style.textShadow;
      document.getElementById('text-indent').value = el.style.textIndent;
      document.getElementById('opacity').value = el.style.opacity;
      document.getElementById('border-radius').value = el.style.borderRadius;
      document.getElementById('border-style').value = el.style.borderStyle;
      document.getElementById('border-color').value = el.style.borderColor;
      document.getElementById('border-width').value = el.style.borderWidth;
      document.getElementById('animation-duration').value = el.style.animationDuration;
      document.getElementById('animation-name').value = el.style.animationName;
      document.getElementById('animation-iteration-count').value = el.style.animationIterationCount;
      document.getElementById('animation-direction').value = el.style.animationDirection;
  document.getElementById('animation-timing-function').value = el.style.animationTimingFunction;
      document.getElementById('animation-event-function').value = el.style.animationEventFunction;
      document.getElementById('animation-delay').value = el.style.animationDelay;
  document.getElementById('animation-play-state').value = el.style.animationPlayState;
  
}
// new style form
function style_changer_new_form() {
  var parent = document.getElementById("style_editing");
  var child = document.createElement("div");
  child.setAttribute("id", "style_editing_child");
  var arr = [
    "name",
    "color",
    "background-color",
    "background-image",
    "background-repeat",
    "background-position",
    "background-size",
    "font-size",
    "font-family",
    "font-weight",
    "text-align",
    "text-decoration",
    "text-transform",
    "text-shadow",
    "text-indent",
    "opacity",
    "border-radius",
    "border-style",
    "border-color",
    "border-width",
    "animation-duration",
    "animation-name",
    "animation-iteration-count",
    "animation-direction",
    "animation-timing-function",
    "animation-event-function",
    "animation-delay",
    "animation-play-state",
  ];
  for (var i = 0; i < arr.length; i++) {
    child.innerHTML += "<div>";
    if (arr[i] == "name") {
      var label = document.createElement("label");
      label.innerHTML = "Name: ";
      var input = document.createElement("input");
      input.setAttribute("id", "name");
      input.setAttribute("type", "text");
      input.setAttribute("value", "Object name");
    } else if (arr[i] == "color") {
      var label = document.createElement("label");
      label.innerHTML = "Color: ";
      var input = document.createElement("input");
      input.setAttribute("id", "color");
      input.setAttribute("type", "color");
      input.setAttribute("value", "#000000");
       
    } else if (arr[i] == "background-color") {
      var label = document.createElement("label");
      label.innerHTML = "Background Color: ";
      var input = document.createElement("input");
      input.setAttribute("id", "background-color");
      input.setAttribute("type", "color");
      input.setAttribute("value", "#ffffff");
       
    } else if (arr[i] == "background-image") {
      var label = document.createElement("label");
      label.innerHTML = "Background Image: ";
      var input = document.createElement("input");
      input.setAttribute("id", "background-image");
      input.setAttribute("type", "text");
      input.setAttribute("value", "none");
       
    } else if (arr[i] == "background-repeat") {
      var label = document.createElement("label");
      label.innerHTML = "Background Repeat: ";
      var input = document.createElement("input");
      input.setAttribute("id", "background-repeat");
      input.setAttribute("type", "text");
      input.setAttribute("value", "no-repeat");
       
    } else if (arr[i] == "background-position") {
      var label = document.createElement("label");
      label.innerHTML = "Background Position: ";
      var input = document.createElement("input");
      input.setAttribute("id", "background-position");
      input.setAttribute("type", "text");
      input.setAttribute("value", "0% 0%");
       
    } else if (arr[i] == "background-size") {
      var label = document.createElement("label");
      label.innerHTML = "Background Size: ";
      var input = document.createElement("input");
      input.setAttribute("id", "background-size");
      input.setAttribute("type", "text");
      input.setAttribute("value", "auto auto");
       
    } else if (arr[i] == "font-size") {
      var label = document.createElement("label");
      label.innerHTML = "Font Size: ";
      var input = document.createElement("input");
      input.setAttribute("id", "font-size");
      input.setAttribute("type", "text");
      input.setAttribute("value", "16px");
       
    } else if (arr[i] == "font-family") {
      var label = document.createElement("label");
      label.innerHTML = "Font Family: ";
      var input = document.createElement("input");
      input.setAttribute("id", "font-family");
      input.setAttribute("type", "text");
      input.setAttribute("value", "Arial");
       
    } else if (arr[i] == "font-weight") {
      var label = document.createElement("label");
      label.innerHTML = "Font Weight: ";
      var input = document.createElement("input");
      input.setAttribute("id", "font-weight");
      input.setAttribute("type", "text");
      input.setAttribute("value", "normal");
       
    } else if (arr[i] == "text-align") {
      var label = document.createElement("label");
      label.innerHTML = "Text Align: ";
      var input = document.createElement("input");
      input.setAttribute("id", "text-align");
      input.setAttribute("type", "text");
      input.setAttribute("value", "left");
       
    } else if (arr[i] == "text-decoration") {
      var label = document.createElement("label");
      label.innerHTML = "Text Decoration: ";
      var input = document.createElement("input");
      input.setAttribute("id", "text-decoration");
      input.setAttribute("type", "text");
      input.setAttribute("value", "none");
       
    } else if (arr[i] == "text-transform") {
      var label = document.createElement("label");
      label.innerHTML = "Text Transform: ";
      var input = document.createElement("input");
      input.setAttribute("id", "text-transform");
      input.setAttribute("type", "text");
      input.setAttribute("value", "none");
       
    } else if (arr[i] == "text-shadow") {
      var label = document.createElement("label");
      label.innerHTML = "Text Shadow: ";
      var input = document.createElement("input");
      input.setAttribute("id", "text-shadow");
      input.setAttribute("type", "text");
      input.setAttribute("value", "none");
       
    } else if (arr[i] == "text-indent") {
      var label = document.createElement("label");
      label.innerHTML = "Text Indent: ";
      var input = document.createElement("input");
      input.setAttribute("id", "text-indent");
      input.setAttribute("type", "text");
      input.setAttribute("value", "0px");
       
    } else if (arr[i] == "opacity") {
      var label = document.createElement("label");
      label.innerHTML = "Opacity: ";
      var input = document.createElement("input");
      input.setAttribute("id", "opacity");
      input.setAttribute("type", "text");
      input.setAttribute("value", "1");
       
    } else if (arr[i] == "border-radius") {
      var label = document.createElement("label");
      label.innerHTML = "Border Radius: ";
      var input = document.createElement("input");
      input.setAttribute("id", "border-radius");
      input.setAttribute("type", "text");
      input.setAttribute("value", "0px");
       
    } else if (arr[i] == "border-style") {
      var label = document.createElement("label");
      label.innerHTML = "Border Style: ";
      var input = document.createElement("input");
      input.setAttribute("id", "border-style");
      input.setAttribute("type", "text");
      input.setAttribute("value", "none");
       
    } else if (arr[i] == "border-color") {
      var label = document.createElement("label");
      label.innerHTML = "Border Color: ";
      var input = document.createElement("input");
      input.setAttribute("id", "border-color");
      input.setAttribute("type", "text");
      input.setAttribute("value", "#000000");
       
    } else if (arr[i] == "border-width") {
      var label = document.createElement("label");
      label.innerHTML = "Border Width: ";
      var input = document.createElement("input");
      input.setAttribute("id", "border-width");
      input.setAttribute("type", "text");
      input.setAttribute("value", "0px");
       
    } else if (arr[i] == "animation-duration") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Duration: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-duration");
      input.setAttribute("type", "text");
      input.setAttribute("value", "0s");
      
    } else if (arr[i] == "animation-name") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Name: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-name");
      input.setAttribute("type", "text");
      input.setAttribute("value", "none");
       
    } else if (arr[i] == "animation-iteration-count") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Iteration Count: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-iteration-count");
      input.setAttribute("type", "text");
      input.setAttribute("value", "infinite");
       
    } else if (arr[i] == "animation-timing-function") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Timing Function: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-timing-function");
      input.setAttribute("type", "text");
      input.setAttribute("value", "ease-in-out");
       
    } else if (arr[i] == "animation-delay") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Delay: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-delay");
      input.setAttribute("type", "text");
      input.setAttribute("value", "0s");
       
    } else if (arr[i] == "animation-direction") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Direction: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-direction");
      input.setAttribute("type", "text");
      input.setAttribute("value", "normal");
       
    } else if (arr[i] == "animation-play-state") {
      var label = document.createElement("label");
      label.innerHTML = "Animation Play State: ";
      var input = document.createElement("input");
      input.setAttribute("id", "animation-play-state");
      input.setAttribute("type", "text");
      input.setAttribute("value", "running");
       
    }
    child.appendChild(label);
    child.innerHTML += "<br>";
    child.appendChild(input);
    child.innerHTML += "</div>";
    parent.appendChild(child);
  }
  //save the changes
  var save = document.createElement("button");
  save.setAttribute("id", "save");
  save.innerHTML = "Save";
  parent.appendChild(save);
  //add event listener to save button
  save.addEventListener("click", function () {
    var arr = {};
    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value;
    var background_color = document.getElementById("background-color").value;
    var font_size = document.getElementById("font-size").value;
    var font_family = document.getElementById("font-family").value;
    var font_weight = document.getElementById("font-weight").value;
    var text_align = document.getElementById("text-align").value;
    var text_decoration = document.getElementById("text-decoration").value;
    var text_transform = document.getElementById("text-transform").value;
    var text_shadow = document.getElementById("text-shadow").value;
    var text_indent = document.getElementById("text-indent").value;
    var opacity = document.getElementById("opacity").value;
    var border_radius = document.getElementById("border-radius").value;
    var border_style = document.getElementById("border-style").value;
    var border_color = document.getElementById("border-color").value;
    var border_width = document.getElementById("border-width").value;
    var animation_duration =
      document.getElementById("animation-duration").value;
    var animation_name = document.getElementById("animation-name").value;
    var animation_iteration_count = document.getElementById(
      "animation-iteration-count",
    ).value;
    arr = {
      name: name,
      color: color,
      background_color: background_color,
      font_size: font_size,
      font_family: font_family,
      font_weight: font_weight,
      text_align: text_align,
      tex_decoration: text_decoration,
      text_transform: text_transform,
      text_shadow: text_shadow,
      text_indent: text_indent,
      opacity: opacity,
      border_radius: border_radius,
      border_style: border_style,
      border_color: border_color,
      border_width: border_width,
      animation_duration: animation_duration,
      amination_name: animation_name,
      animation_iteration_count: animation_iteration_count,
    };
    style_changer_new(arr);
  });
}

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

function get_attributes_of_element(event) {
  var obj = event;
  return obj.getAttributeNames();
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
  style_changer_new_form();
  window.table_list = [];
  window.table_position = 0;
  //console.log(init());
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
    "input_select",
    "input_textarea",
    "input_checkbox",
    "input_radio",
    "input_color",
    "input_date",
    "input_datetime",
    "input_datetime-local",
    "input_email",
    "input_month",
    "input_file",
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
  console.log(trgt.id,window.dom_elements);
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
    "load_to_form(event, '{0}' )".format(object.id),
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
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "button") {
    var txt_section = document.createElement("button");
    txt_section.innerText = "Button";
    object.appendChild(txt_section);
  } else if (type1 == "canvas") {
    var txt_section = document.createElement("canvas");
    txt_section.innerText = "Canvas";
    txt_section.id=object.id;
    txt_section.style.setProperty("border", "1px solid black");
    object.appendChild(txt_section);
  } else if (type1 == "link") {
    var txt_section = document.createElement("a");
    txt_section.href = "#";
    txt_section.id=object.id;
    txt_section.innerText = "Link";
    object.appendChild(txt_section);
  } else if (type1 == "details") {
    var txt_section = document.createElement("details");
    txt_section.id=object.id;
    var txt_section_summary = document.createElement("summary");
    txt_section_summary.innerText = "Details";
    
    txt_section.appendChild(txt_section_summary);
    txt_section.innerText = "hidden text";

    object.appendChild(txt_section);
  } else if (type1 == "table") {
    var par = document.createElement("div");
    var txt_section = document.createElement("table");
    txt_section.id=object.id;
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
  } else if (type1 == "input_color") {
    var txt_section = document.createElement("input");
    txt_section.type = "color";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_date") {
    var txt_section = document.createElement("input");
    txt_section.type = "date";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_datetime") {
    var txt_section = document.createElement("input");
    txt_section.type = "datetime-local";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_email") {
    var txt_section = document.createElement("input");
    txt_section.type = "email";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_file") {
    var txt_section = document.createElement("input");
    txt_section.type = "file";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_month") {
    var txt_section = document.createElement("input");
    txt_section.type = "month";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_radio") {
    var txt_section = document.createElement("input");
    txt_section.type = "radio";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_checkbox") {
    var txt_section = document.createElement("input");
    txt_section.type = "checkbox";
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_textarea") {
    var txt_section = document.createElement("textarea");
    txt_section.setAttribute("rows", "5");
    txt_section.setAttribute("cols", "30");
    txt_section.id=object.id;
    object.appendChild(txt_section);
  } else if (type1 == "input_select") {
    var txt_section = document.createElement("select");
    var option = document.createElement("option");
    option.innerText = "Select";
    txt_section.id=object.id;
    txt_section.appendChild(option);
    object.appendChild(txt_section);
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
    console.log(get_attributes_of_element(ev.target));
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
