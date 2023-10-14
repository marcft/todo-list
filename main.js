/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/dom/project_style.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/dom/project_style.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* BUTTONS */

.sidebar li > button.project-btn .li-title {
    text-align: left;
    flex: 1 0 auto;
}

.sidebar li > button.active {
    background-color: var(--LIGHT-GRAY);
}

.personal-list img.delete-project {
    display: none;
}

.sidebar li > button:hover img.delete-project {
    display: block;
}

.personal-list img.delete-project:hover {
    filter: invert(27%) sepia(82%) saturate(4113%) hue-rotate(346deg) brightness(104%) contrast(100%);
}

#add-project-btn.hidden {
    display: none;
}

/* FORM */

form {
    display: grid;
    grid-template-rows: 35px 40px;
    grid-column: 1fr 1fr;
    row-gap: 10px;
    column-gap: 15px;
}

form input {
    grid-column: 1 / 3;

    border: 1px solid var(--LIGHT-GRAY);
    border-radius: 5px;
    padding: 10px 5px;
}

form button {
    border: 1px solid var(--LIGHT-GRAY);
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

form button[type="submit"] {
    background-color: rgb(57, 207, 57);
    
}

form button[type="submit"]:hover {
    background-color: rgb(57, 207, 57, 0.8);
}

form button[type="reset"] {
    background-color: rgb(255, 96, 96);
}

form button[type="reset"]:hover {
    background-color: rgb(255, 96, 96, 0.8);
}`, "",{"version":3,"sources":["webpack://./src/modules/dom/project_style.css"],"names":[],"mappings":"AAAA,YAAY;;AAEZ;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iGAAiG;AACrG;;AAEA;IACI,aAAa;AACjB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,6BAA6B;IAC7B,oBAAoB;IACpB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;;IAElB,mCAAmC;IACnC,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,uCAAuC;AAC3C","sourcesContent":["/* BUTTONS */\n\n.sidebar li > button.project-btn .li-title {\n    text-align: left;\n    flex: 1 0 auto;\n}\n\n.sidebar li > button.active {\n    background-color: var(--LIGHT-GRAY);\n}\n\n.personal-list img.delete-project {\n    display: none;\n}\n\n.sidebar li > button:hover img.delete-project {\n    display: block;\n}\n\n.personal-list img.delete-project:hover {\n    filter: invert(27%) sepia(82%) saturate(4113%) hue-rotate(346deg) brightness(104%) contrast(100%);\n}\n\n#add-project-btn.hidden {\n    display: none;\n}\n\n/* FORM */\n\nform {\n    display: grid;\n    grid-template-rows: 35px 40px;\n    grid-column: 1fr 1fr;\n    row-gap: 10px;\n    column-gap: 15px;\n}\n\nform input {\n    grid-column: 1 / 3;\n\n    border: 1px solid var(--LIGHT-GRAY);\n    border-radius: 5px;\n    padding: 10px 5px;\n}\n\nform button {\n    border: 1px solid var(--LIGHT-GRAY);\n    border-radius: 5px;\n    color: #fff;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\nform button[type=\"submit\"] {\n    background-color: rgb(57, 207, 57);\n    \n}\n\nform button[type=\"submit\"]:hover {\n    background-color: rgb(57, 207, 57, 0.8);\n}\n\nform button[type=\"reset\"] {\n    background-color: rgb(255, 96, 96);\n}\n\nform button[type=\"reset\"]:hover {\n    background-color: rgb(255, 96, 96, 0.8);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/dom/todo_style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/dom/todo_style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* GENERAL-TODO-STYLE */

.todo-item {
    --TEAL-COLOR: #3ba395;

    display: flex;
    align-items: center;
    gap: 15px;

    width: 100%;
    height: 55px;
    padding: 0 15px;
    background-color: rgb(237, 237, 237);
    transition: box-shadow 0.2s ease-in-out;
}

.todo-item:hover {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
}

.todo-checkbox {
    width: 17px;
    height: 17px;
    accent-color: var(--TEAL-COLOR);
}

.todo-title {
    flex: 1;
    font-size: 1rem;
}

.todo-details {
    padding: 5px 8px;
    background-color: rgb(240, 240, 240);
    color: var(--TEAL-COLOR);
    border: 1.2px solid var(--TEAL-COLOR);
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
}

.todo-details:hover {
    background-color: var(--TEAL-COLOR);
    color: #fff;
}

.todo-date {
    font-size: 0.9rem;
}

.todo-edit,
.todo-delete {
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.todo-edit img:hover,
.todo-delete img:hover {
    filter: invert(46%) sepia(94%) saturate(269%) hue-rotate(122deg) brightness(99%) contrast(88%);
}

/* --TODO-ITEM-DONE */

.todo-item.todo-done > :not(.todo-checkbox) {
    opacity: 0.5;
}

.todo-item.todo-done .todo-title {
    text-decoration: line-through;
}

/* -- TODO-ITEM-URGENCY */

.todo-urgency-low {
    border-left: 8px solid #57e235;
}

.todo-urgency-mid {
    border-left: 8px solid #e9b933;
}

.todo-urgency-high {
    border-left: 8px solid #e93535;
}`, "",{"version":3,"sources":["webpack://./src/modules/dom/todo_style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAEvB;IACI,qBAAqB;;IAErB,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,WAAW;IACX,YAAY;IACZ,eAAe;IACf,oCAAoC;IACpC,uCAAuC;AAC3C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,OAAO;IACP,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,wBAAwB;IACxB,qCAAqC;IACrC,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;;IAEI,8FAA8F;AAClG;;AAEA,qBAAqB;;AAErB;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA,yBAAyB;;AAEzB;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":["/* GENERAL-TODO-STYLE */\n\n.todo-item {\n    --TEAL-COLOR: #3ba395;\n\n    display: flex;\n    align-items: center;\n    gap: 15px;\n\n    width: 100%;\n    height: 55px;\n    padding: 0 15px;\n    background-color: rgb(237, 237, 237);\n    transition: box-shadow 0.2s ease-in-out;\n}\n\n.todo-item:hover {\n    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.todo-checkbox {\n    width: 17px;\n    height: 17px;\n    accent-color: var(--TEAL-COLOR);\n}\n\n.todo-title {\n    flex: 1;\n    font-size: 1rem;\n}\n\n.todo-details {\n    padding: 5px 8px;\n    background-color: rgb(240, 240, 240);\n    color: var(--TEAL-COLOR);\n    border: 1.2px solid var(--TEAL-COLOR);\n    border-radius: 3px;\n    text-transform: uppercase;\n    font-size: 0.85rem;\n    font-weight: 500;\n    cursor: pointer;\n}\n\n.todo-details:hover {\n    background-color: var(--TEAL-COLOR);\n    color: #fff;\n}\n\n.todo-date {\n    font-size: 0.9rem;\n}\n\n.todo-edit,\n.todo-delete {\n    width: 35px;\n    height: 35px;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.todo-edit img:hover,\n.todo-delete img:hover {\n    filter: invert(46%) sepia(94%) saturate(269%) hue-rotate(122deg) brightness(99%) contrast(88%);\n}\n\n/* --TODO-ITEM-DONE */\n\n.todo-item.todo-done > :not(.todo-checkbox) {\n    opacity: 0.5;\n}\n\n.todo-item.todo-done .todo-title {\n    text-decoration: line-through;\n}\n\n/* -- TODO-ITEM-URGENCY */\n\n.todo-urgency-low {\n    border-left: 8px solid #57e235;\n}\n\n.todo-urgency-mid {\n    border-left: 8px solid #e9b933;\n}\n\n.todo-urgency-high {\n    border-left: 8px solid #e93535;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/dom/project_style.css":
/*!*******************************************!*\
  !*** ./src/modules/dom/project_style.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./project_style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/dom/project_style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/dom/todo_style.css":
/*!****************************************!*\
  !*** ./src/modules/dom/todo_style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./todo_style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/dom/todo_style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   URGENCY_TYPE: () => (/* binding */ URGENCY_TYPE),
/* harmony export */   addButton: () => (/* binding */ addButton)
/* harmony export */ });
const URGENCY_TYPE = Object.freeze({
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
});

const addButton = Object.freeze({
    project: document.querySelector('#add-project-btn'),
    todo: document.querySelector('#add-todo-btn')
});




/***/ }),

/***/ "./src/modules/dom/project.js":
/*!************************************!*\
  !*** ./src/modules/dom/project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDefaultProject: () => (/* binding */ displayDefaultProject),
/* harmony export */   displayPersonalProject: () => (/* binding */ displayPersonalProject),
/* harmony export */   displayProjectForm: () => (/* binding */ displayProjectForm),
/* harmony export */   emptyPersonalProjectsUl: () => (/* binding */ emptyPersonalProjectsUl),
/* harmony export */   hideAddProjectButton: () => (/* binding */ hideAddProjectButton),
/* harmony export */   removePersonalProject: () => (/* binding */ removePersonalProject),
/* harmony export */   setActiveClassTo: () => (/* binding */ setActiveClassTo),
/* harmony export */   showAddProjectButton: () => (/* binding */ showAddProjectButton)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./src/constants.js");
/* harmony import */ var _project_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_style.css */ "./src/modules/dom/project_style.css");




const defaultProjectsUl = document.querySelector('ul.default-list');
const personalProjectsUl = document.querySelector('ul.personal-list');

function hideAddProjectButton() {
    _constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.project.classList.add('hidden');
}

function showAddProjectButton() {
    _constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.project.classList.remove('hidden');
}

function displayProjectForm() {
    const form = document.createElement('form');
    form.innerHTML = 
        `<input type="text" name="project-name" placeholder="Project Name" required>
        <button type="submit">Confirm</button>
        <button type="reset">Cancel</button>`;

    personalProjectsUl.appendChild(form);
    return form;
}

function displayPersonalProject(project) {
    const li = document.createElement('li');
    li.innerHTML =
    `<button id="${project.id}" class="project-btn">
        <img src="assets/bookmark_icon.svg">
        <span class="li-title">${project.name}</span>
        <img class="delete-project" src="assets/trash_icon.svg">
    </button>`;

    personalProjectsUl.insertBefore(li, _constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.project.parentElement);
    return li.querySelector('button');
}

function displayDefaultProject(project, iconPath) {
    const li = document.createElement('li');
    li.innerHTML = 
    `<button id="${project.id}" class="project-btn">
        <img src="${iconPath}">
        <span class="li-title">${project.name}</span>
    </button>`;
    defaultProjectsUl.appendChild(li);
    return li.querySelector('button');
}

function removePersonalProject(project) {
    personalProjectsUl.removeChild(project.parentElement);
}

function setActiveClassTo(project) {
    const allProjects = document.querySelectorAll('.sidebar button');
    allProjects.forEach(project => project.classList.remove('active'));
    project.classList.add('active');
}

function emptyPersonalProjectsUl() {
    personalProjectsUl.querySelectorAll('li .project-btn').forEach(li => li.remove());
}

/***/ }),

/***/ "./src/modules/dom/todo.js":
/*!*********************************!*\
  !*** ./src/modules/dom/todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjectTodos: () => (/* binding */ renderProjectTodos),
/* harmony export */   renderSingleTodo: () => (/* binding */ renderSingleTodo),
/* harmony export */   renderTodoDetails: () => (/* binding */ renderTodoDetails),
/* harmony export */   toggleTodoDone: () => (/* binding */ toggleTodoDone)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./src/constants.js");
/* harmony import */ var _todo_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_style.css */ "./src/modules/dom/todo_style.css");



const main = document.querySelector('main');

function renderProjectTodos(project) {
    main.querySelectorAll('.todo-item').forEach(todo => todo.remove());

    project.todoList.forEach(todo => { renderSingleTodo(todo); });

    return main.querySelectorAll('.todo-item');
}

function renderSingleTodo(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.setAttribute('id', todo.id);
    todoContainer.classList.add('todo-item');  
    todoContainer.classList.add(`todo-urgency-${todo.urgency}`);
    if(todo.isDone) todoContainer.classList.add('todo-done');

    const todoCheckbox = document.createElement('input');
    todoCheckbox.classList.add('todo-checkbox');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.checked = todo.isDone;

    const todoTitle = document.createElement('h3');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.name;

    const todoDetailsButton = document.createElement('button');
    todoDetailsButton.classList.add('todo-details');
    todoDetailsButton.textContent = 'Details';

    const todoDate = document.createElement('p');   
    todoDate.classList.add('todo-date');
    todoDate.textContent = todo.dueDate;

    const todoEditButton = document.createElement('button');
    todoEditButton.classList.add('todo-edit');
    const todoEditIcon = document.createElement('img');
    todoEditIcon.setAttribute('src', 'assets/edit_icon.svg');
    todoEditButton.appendChild(todoEditIcon);

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('todo-delete');
    const todoDeleteIcon = document.createElement('img');
    todoDeleteIcon.setAttribute('src', 'assets/trash_icon.svg');
    todoDeleteButton.appendChild(todoDeleteIcon);

    todoContainer.append(
        todoCheckbox, todoTitle, todoDetailsButton, todoDate, todoEditButton, todoDeleteButton);
        
    main.insertBefore(todoContainer, _constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.todo);

    return todoContainer;
}

function renderTodoDetails(todo) {
    const todoDetails = document.createElement('div');
    todoDetails.classList.add('todo-details-container');
    todoDetails.innerHTML =
        `<h3 class="todo-details-title">${todo.name}</h3>
        <p class="todo-details-urgency">Urgency: ${todo.urgency}</p>
        <p class="todo-details-date">Due date: ${todo.dueDate}</p>
        <p class="todo-details-description">${todo.details}</p>`;
    //Esto no
    main.insertBefore(todoDetails, _constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.todo);
}

function toggleTodoDone(todoItem) {
    const todoElement = document.getElementById(todoItem.id);
    todoElement.classList.toggle('todo-done');
}

/***/ }),

/***/ "./src/modules/logic/project.js":
/*!**************************************!*\
  !*** ./src/modules/logic/project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectsList: () => (/* binding */ ProjectsList)
/* harmony export */ });
class Project {
    static index = 0;

    constructor(name, ...initialTodos) {
        this._name = name;
        this._todoList = [...initialTodos];
        this._id = `proj${Project.index++}`;
    }

    get name() {
        return this._name;
    }

    get todoList() {
        return this._todoList;
    }

    get id() {
        return this._id;
    }

    getTodoById(id) {
        return this._todoList.find(todo => todo.id === id);
    }

    add(item) {
        this._todoList.push(item);
    }

    removeTodoById(id) {
        const index = this._todoList.findIndex(todo => todo.id === id);
        this._todoList.splice(index, 1);
    }
}

//Afegir propietat active a la classe projecte
class ProjectsList {
    constructor(inboxProject, dayProject, weekProject, ...initialProjects) {
        this._inboxProject = inboxProject;
        this._dayProject = dayProject;
        this._weekProject = weekProject;
        this._personalProjectsList = [...initialProjects];
        this.activeProject = inboxProject;
    }

    get allProjectsList() {
        return [this._inboxProject, this._dayProject, this._weekProject, ...this._personalProjectsList];
    }

    get inboxProject() {
        return this._inboxProject;
    }

    get dayProject() {
        return this._dayProject;
    }

    get weekProject() {
        return this._weekProject;
    }

    get personalProjectsList() {
        return this._personalProjectsList;
    }

    getProjectById(id) {
        return this.allProjectsList.find(project => project.id === id);
    }

    addPersonalProject(project) {
        this._personalProjectsList.push(project);
    }

    removePersonalProjectById(id) {
        if(id === this._inboxProject.id || id === this._dayProject.id || id === this._weekProject.id) {
            throw new Error('Cannot remove default projects');
        }
        const index = this._personalProjectsList.findIndex(project => project.id === id);
        this._personalProjectsList.splice(index, 1);
    }
}



/* 
//Inbox is a special project that contains all the todo items
get inbox() {
    return this._projectList.reduce((inbox, project) => {
        return inbox.concat(project.todoList);
    }, []);
} 

// Today is a special project that contains all the todo items that are due today
get today() {
    const today = new Date().toLocaleDateString();
    return this._projectList.reduce((todayList, project) => {
        return todayList.concat(project.todoList.filter(item => item.dueDate === today));
    }, []);
}

// Week is a special project that contains all the todo items that are due in the next 7 days
get week() {
    const today = new Date();
    const week = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).toLocaleDateString();
    return this._projectList.reduce((weekList, project) => {
        return weekList.concat(project.todoList.filter(item => item.dueDate <= week));
    }, []);
}
*/

/***/ }),

/***/ "./src/modules/logic/todo.js":
/*!***********************************!*\
  !*** ./src/modules/logic/todo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItem: () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
    static index = 0;

    constructor(name, urgency, isDone = false, details = "",
    dueDate = new Date().toLocaleDateString()) {
        this._name = name;
        this._urgency = urgency;
        this._isDone = isDone;
        this._details = details;
        this._dueDate = dueDate;
        this._id = `todo${TodoItem.index++}`;
    }

    get name() {
        return this._name;
    }

    get urgency() {
        return this._urgency;
    }

    get isDone() {
        return this._isDone;
    }

    get details() {
        return this._details;
    }

    get dueDate() { 
        return this._dueDate;
    }

    get id() {
        return this._id;
    }

    toggleIsDone() {
        this._isDone = !this._isDone;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/logic/project.js */ "./src/modules/logic/project.js");
/* harmony import */ var _modules_logic_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/logic/todo.js */ "./src/modules/logic/todo.js");
/* harmony import */ var _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom/project.js */ "./src/modules/dom/project.js");
/* harmony import */ var _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom/todo.js */ "./src/modules/dom/todo.js");








const myProjectsList = new _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList(
        new _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('Inbox'), new _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('Today'), new _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('Week'), new _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('First Project'));

initializeState(myProjectsList);

function initializeState(projectList) {
    //Display default projects
    const inboxProjectButton =
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.displayDefaultProject(projectList.inboxProject, 'assets/inbox_icon.svg');
    const dayProjectButton =
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.displayDefaultProject(projectList.dayProject, 'assets/today_calendar_icon.svg');
    const weekProjectButton =
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.displayDefaultProject(projectList.weekProject, 'assets/week_calendar_icon.svg');

    //Initialize active project
    const initialActiveProject = document.getElementById(projectList.activeProject.id);
    _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.setActiveClassTo(initialActiveProject);
    const todosList = _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__.renderProjectTodos(myProjectsList.activeProject);
    todosList.forEach(todo => setTodoElementListeners(todo));

    //Set listeners to default projects, just the ActiveProjectListener
    const defaultProjects = [inboxProjectButton, dayProjectButton, weekProjectButton];
    defaultProjects.forEach( project => setActiveProjectListener(project) );

    //Display personal projects and set listeners
    const personalProjects = projectList.personalProjectsList;
    personalProjects.forEach( project => { setPersonalProject(project); } );
}

//Default projects are setted in the initializeState function, and they have a different functionality
function setPersonalProject(project) {
    const projectButton = _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.displayPersonalProject(project);
    setActiveProjectListener(projectButton);
    setDeleteProjectListener(projectButton);
}

function setActiveProjectListener(projectButton) {
    projectButton.addEventListener('click', () => {
        myProjectsList.activeProject = myProjectsList.getProjectById(projectButton.id);
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.setActiveClassTo(projectButton);
        const todosList = _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__.renderProjectTodos(myProjectsList.activeProject);
        todosList.forEach(todo => setTodoElementListeners(todo));
    });
}

function setDeleteProjectListener(projectButton) {
    const deleteIcon = projectButton.querySelector('.delete-project');
    deleteIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        myProjectsList.removePersonalProjectById(projectButton.id);
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.removePersonalProject(projectButton);
        if(myProjectsList.activeProject.id === projectButton.id) {
            myProjectsList.activeProject = myProjectsList.inboxProject;
            _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.setActiveClassTo(document.getElementById(myProjectsList.activeProject.id));
            _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__.renderProjectTodos(myProjectsList.activeProject);
        }
    });
}

_constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.project.addEventListener('click', () => {
    _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.hideAddProjectButton();
    const form = _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectForm();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = form.querySelector('input').value;
        const newProject = new _modules_logic_project_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);
        myProjectsList.addPersonalProject(newProject);
        setPersonalProject(newProject);
        form.remove();
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.showAddProjectButton();
    });

    form.addEventListener('reset', () => {
        form.remove();
        _modules_dom_project_js__WEBPACK_IMPORTED_MODULE_3__.showAddProjectButton();
    });
});

let testCounter = 0;
_constants_js__WEBPACK_IMPORTED_MODULE_0__.addButton.todo.addEventListener('click', () => {
    const newTodo = new _modules_logic_todo_js__WEBPACK_IMPORTED_MODULE_2__.TodoItem(`New Todo${testCounter++}`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.URGENCY_TYPE.LOW);
    myProjectsList.activeProject.add(newTodo);
    const todoElement = _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__.renderSingleTodo(newTodo);
    setTodoElementListeners(todoElement);
});

function setTodoElementListeners(todoElement) {
    const todoCheckbox = todoElement.querySelector('.todo-checkbox');
    todoCheckbox.addEventListener('change', () => {
        const todoItem = myProjectsList.activeProject.getTodoById(todoElement.id);   
        todoItem.toggleIsDone();
        _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__.toggleTodoDone(todoElement);
    });

    const todoDetailsButton = todoElement.querySelector('.todo-details');
    todoDetailsButton.addEventListener('click', () => {
        _modules_dom_todo_js__WEBPACK_IMPORTED_MODULE_4__.renderTodoDetails(myProjectsList.activeProject.getTodoById(todoElement.id));
    });

    const todoEditButton = todoElement.querySelector('.todo-edit');
    todoEditButton.addEventListener('click', () => {
        console.log('Edit button pressed');
    });

    const todoDeleteButton = todoElement.querySelector('.todo-delete');
    todoDeleteButton.addEventListener('click', () => {
        myProjectsList.activeProject.removeTodoById(todoElement.id);
        todoElement.remove();
    });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxxRUFBNEI7QUFDcEMsMEJBQTBCLG9FQUEwQjtBQUNwRDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwRUFBaUM7QUFDekM7QUFDQTtBQUNBLFlBQVkscUVBQTRCO0FBQ3hDLFlBQVksb0VBQTBCO0FBQ3RDO0FBQ0EsS0FBSztBQUNMOztBQUVBLG9EQUFTO0FBQ1QsSUFBSSx5RUFBZ0M7QUFDcEMsaUJBQWlCLHVFQUE4Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhEQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQWdDO0FBQ3hDLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEseUVBQWdDO0FBQ3hDLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0Esb0RBQVM7QUFDVCx3QkFBd0IsNERBQVEsWUFBWSxjQUFjLEdBQUcsdURBQVk7QUFDekU7QUFDQSx3QkFBd0Isa0VBQXdCO0FBQ2hEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBc0I7QUFDOUIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSxtRUFBeUI7QUFDakMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20vcHJvamVjdF9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tL3RvZG9fc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tL3Byb2plY3Rfc3R5bGUuY3NzPzRjMTMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tL3RvZG9fc3R5bGUuY3NzP2IzZWIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvZ2ljL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9naWMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJVVFRPTlMgKi9cblxuLnNpZGViYXIgbGkgPiBidXR0b24ucHJvamVjdC1idG4gLmxpLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4uc2lkZWJhciBsaSA+IGJ1dHRvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxJR0hULUdSQVkpO1xufVxuXG4ucGVyc29uYWwtbGlzdCBpbWcuZGVsZXRlLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyIGxpID4gYnV0dG9uOmhvdmVyIGltZy5kZWxldGUtcHJvamVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wZXJzb25hbC1saXN0IGltZy5kZWxldGUtcHJvamVjdDpob3ZlciB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMjclKSBzZXBpYSg4MiUpIHNhdHVyYXRlKDQxMTMlKSBodWUtcm90YXRlKDM0NmRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKTtcbn1cblxuI2FkZC1wcm9qZWN0LWJ0bi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEZPUk0gKi9cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1cHggNDBweDtcbiAgICBncmlkLWNvbHVtbjogMWZyIDFmcjtcbiAgICByb3ctZ2FwOiAxMHB4O1xuICAgIGNvbHVtbi1nYXA6IDE1cHg7XG59XG5cbmZvcm0gaW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUxJR0hULUdSQVkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbn1cblxuZm9ybSBidXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUxJR0hULUdSQVkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAyMDcsIDU3KTtcbiAgICBcbn1cblxuZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAyMDcsIDU3LCAwLjgpO1xufVxuXG5mb3JtIGJ1dHRvblt0eXBlPVwicmVzZXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk2LCA5Nik7XG59XG5cbmZvcm0gYnV0dG9uW3R5cGU9XCJyZXNldFwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTYsIDk2LCAwLjgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZG9tL3Byb2plY3Rfc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7O0FBRVo7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUdBQWlHO0FBQ3JHOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQlVUVE9OUyAqL1xcblxcbi5zaWRlYmFyIGxpID4gYnV0dG9uLnByb2plY3QtYnRuIC5saS10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhciBsaSA+IGJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MSUdIVC1HUkFZKTtcXG59XFxuXFxuLnBlcnNvbmFsLWxpc3QgaW1nLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIgbGkgPiBidXR0b246aG92ZXIgaW1nLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wZXJzb25hbC1saXN0IGltZy5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoODIlKSBzYXR1cmF0ZSg0MTEzJSkgaHVlLXJvdGF0ZSgzNDZkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogRk9STSAqL1xcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1cHggNDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDE1cHg7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUxJR0hULUdSQVkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUxJR0hULUdSQVkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgMjA3LCA1Nyk7XFxuICAgIFxcbn1cXG5cXG5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgMjA3LCA1NywgMC44KTtcXG59XFxuXFxuZm9ybSBidXR0b25bdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk2LCA5Nik7XFxufVxcblxcbmZvcm0gYnV0dG9uW3R5cGU9XFxcInJlc2V0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5NiwgOTYsIDAuOCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR0VORVJBTC1UT0RPLVNUWUxFICovXG5cbi50b2RvLWl0ZW0ge1xuICAgIC0tVEVBTC1DT0xPUjogIzNiYTM5NTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi50b2RvLWl0ZW06aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4udG9kby1jaGVja2JveCB7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tVEVBTC1DT0xPUik7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRvZG8tZGV0YWlscyB7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgY29sb3I6IHZhcigtLVRFQUwtQ09MT1IpO1xuICAgIGJvcmRlcjogMS4ycHggc29saWQgdmFyKC0tVEVBTC1DT0xPUik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1kZXRhaWxzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1URUFMLUNPTE9SKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvZG8tZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi50b2RvLWVkaXQsXG4udG9kby1kZWxldGUge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1lZGl0IGltZzpob3Zlcixcbi50b2RvLWRlbGV0ZSBpbWc6aG92ZXIge1xuICAgIGZpbHRlcjogaW52ZXJ0KDQ2JSkgc2VwaWEoOTQlKSBzYXR1cmF0ZSgyNjklKSBodWUtcm90YXRlKDEyMmRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDg4JSk7XG59XG5cbi8qIC0tVE9ETy1JVEVNLURPTkUgKi9cblxuLnRvZG8taXRlbS50b2RvLWRvbmUgPiA6bm90KC50b2RvLWNoZWNrYm94KSB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4udG9kby1pdGVtLnRvZG8tZG9uZSAudG9kby10aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi8qIC0tIFRPRE8tSVRFTS1VUkdFTkNZICovXG5cbi50b2RvLXVyZ2VuY3ktbG93IHtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICM1N2UyMzU7XG59XG5cbi50b2RvLXVyZ2VuY3ktbWlkIHtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNlOWI5MzM7XG59XG5cbi50b2RvLXVyZ2VuY3ktaGlnaCB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZTkzNTM1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZG9tL3RvZG9fc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1Qjs7QUFFdkI7SUFDSSxxQkFBcUI7O0lBRXJCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksOEZBQThGO0FBQ2xHOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0VORVJBTC1UT0RPLVNUWUxFICovXFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIC0tVEVBTC1DT0xPUjogIzNiYTM5NTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kby1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1URUFMLUNPTE9SKTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGNvbG9yOiB2YXIoLS1URUFMLUNPTE9SKTtcXG4gICAgYm9yZGVyOiAxLjJweCBzb2xpZCB2YXIoLS1URUFMLUNPTE9SKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tZGV0YWlsczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVRFQUwtQ09MT1IpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tZWRpdCBpbWc6aG92ZXIsXFxuLnRvZG8tZGVsZXRlIGltZzpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDQ2JSkgc2VwaWEoOTQlKSBzYXR1cmF0ZSgyNjklKSBodWUtcm90YXRlKDEyMmRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi8qIC0tVE9ETy1JVEVNLURPTkUgKi9cXG5cXG4udG9kby1pdGVtLnRvZG8tZG9uZSA+IDpub3QoLnRvZG8tY2hlY2tib3gpIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG9kby1pdGVtLnRvZG8tZG9uZSAudG9kby10aXRsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiAtLSBUT0RPLUlURU0tVVJHRU5DWSAqL1xcblxcbi50b2RvLXVyZ2VuY3ktbG93IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjNTdlMjM1O1xcbn1cXG5cXG4udG9kby11cmdlbmN5LW1pZCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2U5YjkzMztcXG59XFxuXFxuLnRvZG8tdXJnZW5jeS1oaWdoIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZTkzNTM1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0X3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdF9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb19zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9fc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgVVJHRU5DWV9UWVBFID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgTE9XOiAnbG93JyxcbiAgICBNRURJVU06ICdtZWRpdW0nLFxuICAgIEhJR0g6ICdoaWdoJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgcHJvamVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpLFxuICAgIHRvZG86IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kby1idG4nKVxufSk7XG5cblxuIiwiaW1wb3J0IHsgYWRkQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcblxuaW1wb3J0ICcuL3Byb2plY3Rfc3R5bGUuY3NzJztcblxuY29uc3QgZGVmYXVsdFByb2plY3RzVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5kZWZhdWx0LWxpc3QnKTtcbmNvbnN0IHBlcnNvbmFsUHJvamVjdHNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsLnBlcnNvbmFsLWxpc3QnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBZGRQcm9qZWN0QnV0dG9uKCkge1xuICAgIGFkZEJ1dHRvbi5wcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FkZFByb2plY3RCdXR0b24oKSB7XG4gICAgYWRkQnV0dG9uLnByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IFxuICAgICAgICBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5DYW5jZWw8L2J1dHRvbj5gO1xuXG4gICAgcGVyc29uYWxQcm9qZWN0c1VsLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBlcnNvbmFsUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVySFRNTCA9XG4gICAgYDxidXR0b24gaWQ9XCIke3Byb2plY3QuaWR9XCIgY2xhc3M9XCJwcm9qZWN0LWJ0blwiPlxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9ib29rbWFya19pY29uLnN2Z1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxpLXRpdGxlXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIiBzcmM9XCJhc3NldHMvdHJhc2hfaWNvbi5zdmdcIj5cbiAgICA8L2J1dHRvbj5gO1xuXG4gICAgcGVyc29uYWxQcm9qZWN0c1VsLmluc2VydEJlZm9yZShsaSwgYWRkQnV0dG9uLnByb2plY3QucGFyZW50RWxlbWVudCk7XG4gICAgcmV0dXJuIGxpLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURlZmF1bHRQcm9qZWN0KHByb2plY3QsIGljb25QYXRoKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVySFRNTCA9IFxuICAgIGA8YnV0dG9uIGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwicHJvamVjdC1idG5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ljb25QYXRofVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxpLXRpdGxlXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgIDwvYnV0dG9uPmA7XG4gICAgZGVmYXVsdFByb2plY3RzVWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIHJldHVybiBsaS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBlcnNvbmFsUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcGVyc29uYWxQcm9qZWN0c1VsLnJlbW92ZUNoaWxkKHByb2plY3QucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVDbGFzc1RvKHByb2plY3QpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyIGJ1dHRvbicpO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlQZXJzb25hbFByb2plY3RzVWwoKSB7XG4gICAgcGVyc29uYWxQcm9qZWN0c1VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIC5wcm9qZWN0LWJ0bicpLmZvckVhY2gobGkgPT4gbGkucmVtb3ZlKCkpO1xufSIsImltcG9ydCB7IGFkZEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgJy4vdG9kb19zdHlsZS5jc3MnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRvZG9zKHByb2plY3QpIHtcbiAgICBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKS5mb3JFYWNoKHRvZG8gPT4gdG9kby5yZW1vdmUoKSk7XG5cbiAgICBwcm9qZWN0LnRvZG9MaXN0LmZvckVhY2godG9kbyA9PiB7IHJlbmRlclNpbmdsZVRvZG8odG9kbyk7IH0pO1xuXG4gICAgcmV0dXJuIG1haW4ucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2luZ2xlVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRvZG8uaWQpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7ICBcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYHRvZG8tdXJnZW5jeS0ke3RvZG8udXJnZW5jeX1gKTtcbiAgICBpZih0b2RvLmlzRG9uZSkgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRvbmUnKTtcblxuICAgIGNvbnN0IHRvZG9DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2tib3gnKTtcbiAgICB0b2RvQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgdG9kb0NoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmlzRG9uZTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XG5cbiAgICBjb25zdCB0b2RvRGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9EZXRhaWxzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscycpO1xuICAgIHRvZG9EZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gJ0RldGFpbHMnO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7ICAgXG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJyk7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdCcpO1xuICAgIGNvbnN0IHRvZG9FZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRvZG9FZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvZWRpdF9pY29uLnN2ZycpO1xuICAgIHRvZG9FZGl0QnV0dG9uLmFwcGVuZENoaWxkKHRvZG9FZGl0SWNvbik7XG5cbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZScpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9kb0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnYXNzZXRzL3RyYXNoX2ljb24uc3ZnJyk7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlSWNvbik7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgdG9kb0NoZWNrYm94LCB0b2RvVGl0bGUsIHRvZG9EZXRhaWxzQnV0dG9uLCB0b2RvRGF0ZSwgdG9kb0VkaXRCdXR0b24sIHRvZG9EZWxldGVCdXR0b24pO1xuICAgICAgICBcbiAgICBtYWluLmluc2VydEJlZm9yZSh0b2RvQ29udGFpbmVyLCBhZGRCdXR0b24udG9kbyk7XG5cbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvZG9EZXRhaWxzKHRvZG8pIHtcbiAgICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscy1jb250YWluZXInKTtcbiAgICB0b2RvRGV0YWlscy5pbm5lckhUTUwgPVxuICAgICAgICBgPGgzIGNsYXNzPVwidG9kby1kZXRhaWxzLXRpdGxlXCI+JHt0b2RvLm5hbWV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLWRldGFpbHMtdXJnZW5jeVwiPlVyZ2VuY3k6ICR7dG9kby51cmdlbmN5fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLWRldGFpbHMtZGF0ZVwiPkR1ZSBkYXRlOiAke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwidG9kby1kZXRhaWxzLWRlc2NyaXB0aW9uXCI+JHt0b2RvLmRldGFpbHN9PC9wPmA7XG4gICAgLy9Fc3RvIG5vXG4gICAgbWFpbi5pbnNlcnRCZWZvcmUodG9kb0RldGFpbHMsIGFkZEJ1dHRvbi50b2RvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRvZG9Eb25lKHRvZG9JdGVtKSB7XG4gICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvSXRlbS5pZCk7XG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndG9kby1kb25lJyk7XG59IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIHN0YXRpYyBpbmRleCA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCAuLi5pbml0aWFsVG9kb3MpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3RvZG9MaXN0ID0gWy4uLmluaXRpYWxUb2Rvc107XG4gICAgICAgIHRoaXMuX2lkID0gYHByb2oke1Byb2plY3QuaW5kZXgrK31gO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdG9kb0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvTGlzdDtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBnZXRUb2RvQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb0xpc3QuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBhZGQoaXRlbSkge1xuICAgICAgICB0aGlzLl90b2RvTGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG9CeUlkKGlkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gaWQpO1xuICAgICAgICB0aGlzLl90b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuLy9BZmVnaXIgcHJvcGlldGF0IGFjdGl2ZSBhIGxhIGNsYXNzZSBwcm9qZWN0ZVxuZXhwb3J0IGNsYXNzIFByb2plY3RzTGlzdCB7XG4gICAgY29uc3RydWN0b3IoaW5ib3hQcm9qZWN0LCBkYXlQcm9qZWN0LCB3ZWVrUHJvamVjdCwgLi4uaW5pdGlhbFByb2plY3RzKSB7XG4gICAgICAgIHRoaXMuX2luYm94UHJvamVjdCA9IGluYm94UHJvamVjdDtcbiAgICAgICAgdGhpcy5fZGF5UHJvamVjdCA9IGRheVByb2plY3Q7XG4gICAgICAgIHRoaXMuX3dlZWtQcm9qZWN0ID0gd2Vla1Byb2plY3Q7XG4gICAgICAgIHRoaXMuX3BlcnNvbmFsUHJvamVjdHNMaXN0ID0gWy4uLmluaXRpYWxQcm9qZWN0c107XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9IGluYm94UHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgYWxsUHJvamVjdHNMaXN0KCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuX2luYm94UHJvamVjdCwgdGhpcy5fZGF5UHJvamVjdCwgdGhpcy5fd2Vla1Byb2plY3QsIC4uLnRoaXMuX3BlcnNvbmFsUHJvamVjdHNMaXN0XTtcbiAgICB9XG5cbiAgICBnZXQgaW5ib3hQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5ib3hQcm9qZWN0O1xuICAgIH1cblxuICAgIGdldCBkYXlQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF5UHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgd2Vla1Byb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrUHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgcGVyc29uYWxQcm9qZWN0c0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJzb25hbFByb2plY3RzTGlzdDtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxQcm9qZWN0c0xpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBhZGRQZXJzb25hbFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbFByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJlbW92ZVBlcnNvbmFsUHJvamVjdEJ5SWQoaWQpIHtcbiAgICAgICAgaWYoaWQgPT09IHRoaXMuX2luYm94UHJvamVjdC5pZCB8fCBpZCA9PT0gdGhpcy5fZGF5UHJvamVjdC5pZCB8fCBpZCA9PT0gdGhpcy5fd2Vla1Byb2plY3QuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbW92ZSBkZWZhdWx0IHByb2plY3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wZXJzb25hbFByb2plY3RzTGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBpZCk7XG4gICAgICAgIHRoaXMuX3BlcnNvbmFsUHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5cblxuLyogXG4vL0luYm94IGlzIGEgc3BlY2lhbCBwcm9qZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSB0b2RvIGl0ZW1zXG5nZXQgaW5ib3goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RMaXN0LnJlZHVjZSgoaW5ib3gsIHByb2plY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGluYm94LmNvbmNhdChwcm9qZWN0LnRvZG9MaXN0KTtcbiAgICB9LCBbXSk7XG59IFxuXG4vLyBUb2RheSBpcyBhIHNwZWNpYWwgcHJvamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgdG9kbyBpdGVtcyB0aGF0IGFyZSBkdWUgdG9kYXlcbmdldCB0b2RheSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RMaXN0LnJlZHVjZSgodG9kYXlMaXN0LCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiB0b2RheUxpc3QuY29uY2F0KHByb2plY3QudG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kdWVEYXRlID09PSB0b2RheSkpO1xuICAgIH0sIFtdKTtcbn1cblxuLy8gV2VlayBpcyBhIHNwZWNpYWwgcHJvamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgdG9kbyBpdGVtcyB0aGF0IGFyZSBkdWUgaW4gdGhlIG5leHQgNyBkYXlzXG5nZXQgd2VlaygpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgd2VlayA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSArIDcpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TGlzdC5yZWR1Y2UoKHdlZWtMaXN0LCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiB3ZWVrTGlzdC5jb25jYXQocHJvamVjdC50b2RvTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmR1ZURhdGUgPD0gd2VlaykpO1xuICAgIH0sIFtdKTtcbn1cbiovIiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgICBzdGF0aWMgaW5kZXggPSAwO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgdXJnZW5jeSwgaXNEb25lID0gZmFsc2UsIGRldGFpbHMgPSBcIlwiLFxuICAgIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl91cmdlbmN5ID0gdXJnZW5jeTtcbiAgICAgICAgdGhpcy5faXNEb25lID0gaXNEb25lO1xuICAgICAgICB0aGlzLl9kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX2lkID0gYHRvZG8ke1RvZG9JdGVtLmluZGV4Kyt9YDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHVyZ2VuY3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmdlbmN5O1xuICAgIH1cblxuICAgIGdldCBpc0RvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RvbmU7XG4gICAgfVxuXG4gICAgZ2V0IGRldGFpbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXRhaWxzO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlSXNEb25lKCkge1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSAhdGhpcy5faXNEb25lO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBVUkdFTkNZX1RZUEUsIGFkZEJ1dHRvbiB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuaW1wb3J0IHsgUHJvamVjdHNMaXN0LCBQcm9qZWN0IH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2ljL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tICcuL21vZHVsZXMvbG9naWMvdG9kby5qcyc7XG5cbmltcG9ydCAqIGFzIHByb2plY3RzRE9NIGZyb20gJy4vbW9kdWxlcy9kb20vcHJvamVjdC5qcyc7XG5pbXBvcnQgKiBhcyB0b2RvRE9NIGZyb20gJy4vbW9kdWxlcy9kb20vdG9kby5qcyc7XG5cbmNvbnN0IG15UHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RzTGlzdChcbiAgICAgICAgbmV3IFByb2plY3QoJ0luYm94JyksIG5ldyBQcm9qZWN0KCdUb2RheScpLCBuZXcgUHJvamVjdCgnV2VlaycpLCBuZXcgUHJvamVjdCgnRmlyc3QgUHJvamVjdCcpKTtcblxuaW5pdGlhbGl6ZVN0YXRlKG15UHJvamVjdHNMaXN0KTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVN0YXRlKHByb2plY3RMaXN0KSB7XG4gICAgLy9EaXNwbGF5IGRlZmF1bHQgcHJvamVjdHNcbiAgICBjb25zdCBpbmJveFByb2plY3RCdXR0b24gPVxuICAgICAgICBwcm9qZWN0c0RPTS5kaXNwbGF5RGVmYXVsdFByb2plY3QocHJvamVjdExpc3QuaW5ib3hQcm9qZWN0LCAnYXNzZXRzL2luYm94X2ljb24uc3ZnJyk7XG4gICAgY29uc3QgZGF5UHJvamVjdEJ1dHRvbiA9XG4gICAgICAgIHByb2plY3RzRE9NLmRpc3BsYXlEZWZhdWx0UHJvamVjdChwcm9qZWN0TGlzdC5kYXlQcm9qZWN0LCAnYXNzZXRzL3RvZGF5X2NhbGVuZGFyX2ljb24uc3ZnJyk7XG4gICAgY29uc3Qgd2Vla1Byb2plY3RCdXR0b24gPVxuICAgICAgICBwcm9qZWN0c0RPTS5kaXNwbGF5RGVmYXVsdFByb2plY3QocHJvamVjdExpc3Qud2Vla1Byb2plY3QsICdhc3NldHMvd2Vla19jYWxlbmRhcl9pY29uLnN2ZycpO1xuXG4gICAgLy9Jbml0aWFsaXplIGFjdGl2ZSBwcm9qZWN0XG4gICAgY29uc3QgaW5pdGlhbEFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0TGlzdC5hY3RpdmVQcm9qZWN0LmlkKTtcbiAgICBwcm9qZWN0c0RPTS5zZXRBY3RpdmVDbGFzc1RvKGluaXRpYWxBY3RpdmVQcm9qZWN0KTtcbiAgICBjb25zdCB0b2Rvc0xpc3QgPSB0b2RvRE9NLnJlbmRlclByb2plY3RUb2RvcyhteVByb2plY3RzTGlzdC5hY3RpdmVQcm9qZWN0KTtcbiAgICB0b2Rvc0xpc3QuZm9yRWFjaCh0b2RvID0+IHNldFRvZG9FbGVtZW50TGlzdGVuZXJzKHRvZG8pKTtcblxuICAgIC8vU2V0IGxpc3RlbmVycyB0byBkZWZhdWx0IHByb2plY3RzLCBqdXN0IHRoZSBBY3RpdmVQcm9qZWN0TGlzdGVuZXJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbaW5ib3hQcm9qZWN0QnV0dG9uLCBkYXlQcm9qZWN0QnV0dG9uLCB3ZWVrUHJvamVjdEJ1dHRvbl07XG4gICAgZGVmYXVsdFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4gc2V0QWN0aXZlUHJvamVjdExpc3RlbmVyKHByb2plY3QpICk7XG5cbiAgICAvL0Rpc3BsYXkgcGVyc29uYWwgcHJvamVjdHMgYW5kIHNldCBsaXN0ZW5lcnNcbiAgICBjb25zdCBwZXJzb25hbFByb2plY3RzID0gcHJvamVjdExpc3QucGVyc29uYWxQcm9qZWN0c0xpc3Q7XG4gICAgcGVyc29uYWxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHsgc2V0UGVyc29uYWxQcm9qZWN0KHByb2plY3QpOyB9ICk7XG59XG5cbi8vRGVmYXVsdCBwcm9qZWN0cyBhcmUgc2V0dGVkIGluIHRoZSBpbml0aWFsaXplU3RhdGUgZnVuY3Rpb24sIGFuZCB0aGV5IGhhdmUgYSBkaWZmZXJlbnQgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gc2V0UGVyc29uYWxQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gcHJvamVjdHNET00uZGlzcGxheVBlcnNvbmFsUHJvamVjdChwcm9qZWN0KTtcbiAgICBzZXRBY3RpdmVQcm9qZWN0TGlzdGVuZXIocHJvamVjdEJ1dHRvbik7XG4gICAgc2V0RGVsZXRlUHJvamVjdExpc3RlbmVyKHByb2plY3RCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0TGlzdGVuZXIocHJvamVjdEJ1dHRvbikge1xuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG15UHJvamVjdHNMaXN0LmFjdGl2ZVByb2plY3QgPSBteVByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJZChwcm9qZWN0QnV0dG9uLmlkKTtcbiAgICAgICAgcHJvamVjdHNET00uc2V0QWN0aXZlQ2xhc3NUbyhwcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgY29uc3QgdG9kb3NMaXN0ID0gdG9kb0RPTS5yZW5kZXJQcm9qZWN0VG9kb3MobXlQcm9qZWN0c0xpc3QuYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKHRvZG8gPT4gc2V0VG9kb0VsZW1lbnRMaXN0ZW5lcnModG9kbykpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXREZWxldGVQcm9qZWN0TGlzdGVuZXIocHJvamVjdEJ1dHRvbikge1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBwcm9qZWN0QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdCcpO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBteVByb2plY3RzTGlzdC5yZW1vdmVQZXJzb25hbFByb2plY3RCeUlkKHByb2plY3RCdXR0b24uaWQpO1xuICAgICAgICBwcm9qZWN0c0RPTS5yZW1vdmVQZXJzb25hbFByb2plY3QocHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGlmKG15UHJvamVjdHNMaXN0LmFjdGl2ZVByb2plY3QuaWQgPT09IHByb2plY3RCdXR0b24uaWQpIHtcbiAgICAgICAgICAgIG15UHJvamVjdHNMaXN0LmFjdGl2ZVByb2plY3QgPSBteVByb2plY3RzTGlzdC5pbmJveFByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0c0RPTS5zZXRBY3RpdmVDbGFzc1RvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG15UHJvamVjdHNMaXN0LmFjdGl2ZVByb2plY3QuaWQpKTtcbiAgICAgICAgICAgIHRvZG9ET00ucmVuZGVyUHJvamVjdFRvZG9zKG15UHJvamVjdHNMaXN0LmFjdGl2ZVByb2plY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmFkZEJ1dHRvbi5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RzRE9NLmhpZGVBZGRQcm9qZWN0QnV0dG9uKCk7XG4gICAgY29uc3QgZm9ybSA9IHByb2plY3RzRE9NLmRpc3BsYXlQcm9qZWN0Rm9ybSgpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBteVByb2plY3RzTGlzdC5hZGRQZXJzb25hbFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIHNldFBlcnNvbmFsUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdHNET00uc2hvd0FkZFByb2plY3RCdXR0b24oKTtcbiAgICB9KTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RzRE9NLnNob3dBZGRQcm9qZWN0QnV0dG9uKCk7XG4gICAgfSk7XG59KTtcblxubGV0IHRlc3RDb3VudGVyID0gMDtcbmFkZEJ1dHRvbi50b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kb0l0ZW0oYE5ldyBUb2RvJHt0ZXN0Q291bnRlcisrfWAsIFVSR0VOQ1lfVFlQRS5MT1cpO1xuICAgIG15UHJvamVjdHNMaXN0LmFjdGl2ZVByb2plY3QuYWRkKG5ld1RvZG8pO1xuICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gdG9kb0RPTS5yZW5kZXJTaW5nbGVUb2RvKG5ld1RvZG8pO1xuICAgIHNldFRvZG9FbGVtZW50TGlzdGVuZXJzKHRvZG9FbGVtZW50KTtcbn0pO1xuXG5mdW5jdGlvbiBzZXRUb2RvRWxlbWVudExpc3RlbmVycyh0b2RvRWxlbWVudCkge1xuICAgIGNvbnN0IHRvZG9DaGVja2JveCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNoZWNrYm94Jyk7XG4gICAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBteVByb2plY3RzTGlzdC5hY3RpdmVQcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9FbGVtZW50LmlkKTsgICBcbiAgICAgICAgdG9kb0l0ZW0udG9nZ2xlSXNEb25lKCk7XG4gICAgICAgIHRvZG9ET00udG9nZ2xlVG9kb0RvbmUodG9kb0VsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kb0RldGFpbHNCdXR0b24gPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXRhaWxzJyk7XG4gICAgdG9kb0RldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZG9ET00ucmVuZGVyVG9kb0RldGFpbHMobXlQcm9qZWN0c0xpc3QuYWN0aXZlUHJvamVjdC5nZXRUb2RvQnlJZCh0b2RvRWxlbWVudC5pZCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1lZGl0Jyk7XG4gICAgdG9kb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IGJ1dHRvbiBwcmVzc2VkJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGVsZXRlJyk7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbXlQcm9qZWN0c0xpc3QuYWN0aXZlUHJvamVjdC5yZW1vdmVUb2RvQnlJZCh0b2RvRWxlbWVudC5pZCk7XG4gICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==