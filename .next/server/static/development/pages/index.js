module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/profile.jpg":
/*!***********************************!*\
  !*** ./assets/images/profile.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-ca23c954402e59bb293152790a08a171.jpg";

/***/ }),

/***/ "./component/badgeskill.js":
/*!*********************************!*\
  !*** ./component/badgeskill.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\badgeskill.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BadgeSkill = ({
  skill
}) => {
  return __jsx("li", {
    className: "list-inline-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "badge badge-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, skill));
};

/* harmony default export */ __webpack_exports__["default"] = (BadgeSkill);

/***/ }),

/***/ "./component/education.js":
/*!********************************!*\
  !*** ./component/education.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\education.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Education = () => {
  return __jsx("li", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "resume-degree font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "Programming technician"), __jsx("div", {
    className: "resume-degree-org",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "Universidad Tecnol\xF3gica Nacional"), __jsx("div", {
    className: "resume-degree-time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "2016 - 2019"));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./component/experience.js":
/*!*********************************!*\
  !*** ./component/experience.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\experience.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Experience = ({
  job
}) => {
  const duties = [];
  const technologiesUsed = [];

  for (const [index, value] of job.duties.entries()) {
    duties.push(__jsx("li", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }
    }, value));
  }

  for (const [index, value] of job.technologiesUsed.entries()) {
    technologiesUsed.push(__jsx("li", {
      key: index,
      className: "list-inline-item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "badge badge-primary badge-pill",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, value)));
  }

  return __jsx("div", {
    className: "resume-timeline position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "resume-timeline-item position-relative pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-timeline-item-header mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex flex-column flex-md-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "resume-position-title font-weight-bold mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, job.role)), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: job.company.url,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, job.company.name)), __jsx("div", {
    className: "resume-position-time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, job.date.from, " - ", job.date.to)), __jsx("div", {
    className: "resume-timeline-item-desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, duties), __jsx("ul", {
    className: "list-inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, technologiesUsed))));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./component/headerpage.js":
/*!*********************************!*\
  !*** ./component/headerpage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\headerpage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeadPage = ({
  title
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    charset: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "NET developer, specialized in distributed systems. Backend software developer. Luca Provenzano Resume",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "Luca Provenzano",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadPage);

/***/ }),

/***/ "./component/profile.js":
/*!******************************!*\
  !*** ./component/profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social */ "./component/social.js");
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Profile = () => {
  const SocialProfile = [{
    iconclass: "fab fa-linkedin-in fa-fw",
    link: "https://www.linkedin.com/in/provenzanoluca",
    text: "provenzanoluca"
  }, {
    iconclass: "fab fa-github-alt fa-fw",
    link: "http://github.com/lprovenzano",
    text: "lprovenzano"
  }, {
    iconclass: "far fa-file",
    link: "#",
    text: "Resume (PDF)"
  }];
  return __jsx("header", {
    className: "resume-header pt-4 pt-md-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "media flex-column flex-md-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "mr-3 img-fluid picture mx-auto",
    src: __webpack_require__(/*! ../assets/images/profile.jpg */ "./assets/images/profile.jpg"),
    alt: "Luca Provenzano profile photo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "primary-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "name mt-0 mb-1 text-white text-uppercase text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Luca Provenzano"), __jsx("div", {
    className: "title mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, ".NET Developer"), __jsx("ul", {
    className: "list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "far fa-envelope fa-fw mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "mailto:lucaeprov@gmail.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "lucaeprov[at]gmail.com")))), __jsx("div", {
    className: "secondary-info ml-md-auto mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "resume-social list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, SocialProfile.map((value, key) => {
    return __jsx(_social__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      iconclass: value.iconclass,
      link: value.link,
      text: value.text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 26
      }
    });
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./component/skill.js":
/*!****************************!*\
  !*** ./component/skill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\skill.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Skill = ({
  title,
  skills
}) => {
  return __jsx("li", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "resume-skill-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, skills.language), __jsx("div", {
    className: "progress resume-progress",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "progress-bar theme-progress-bar-dark",
    role: "progressbar",
    style: {
      width: skills.percentaje + "%"
    },
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ }),

/***/ "./component/social.js":
/*!*****************************!*\
  !*** ./component/social.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\social.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Social = ({
  iconclass,
  link,
  text
}) => {
  return __jsx("li", {
    className: "mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "fa-container text-center mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: iconclass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  })), text));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./component/summary.js":
/*!******************************!*\
  !*** ./component/summary.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\summary.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Summary = () => {
  return __jsx("section", {
    className: "resume-section summary-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "Career Summary"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "mb-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Hi! I'm ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 19
    }
  }, "software developer"), ". I specialize in ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 72
    }
  }, "backend"), "\xA0and distributed systems. Also, I'm participate in the design, development and implementation process for one of the largest ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 57
    }
  }, "fintech"), " companies in Argentina."), __jsx("p", {
    className: "mb-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Over the last 3+ years, I have developed different information systems and APIs including web sites using many technologies such as .NET (", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, "C#, ASP.NET), Javascript, MySQL, SQL Server, MongoDB and Redis.")), __jsx("p", {
    className: "mb-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Above all, it motivates me a lot to learn and create products user centered.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_headerpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/headerpage */ "./component/headerpage.js");
/* harmony import */ var _component_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/profile */ "./component/profile.js");
/* harmony import */ var _component_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/summary */ "./component/summary.js");
/* harmony import */ var _component_experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/experience */ "./component/experience.js");
/* harmony import */ var _component_skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/skill */ "./component/skill.js");
/* harmony import */ var _component_badgeskill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/badgeskill */ "./component/badgeskill.js");
/* harmony import */ var _component_education__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/education */ "./component/education.js");
var _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const experiences = [{
  role: "Senior .NET Developer",
  company: {
    name: "invertirOnline.com",
    url: "https://invertironline.com"
  },
  date: {
    from: "MAY 2019",
    to: "PRESENT"
  },
  duties: ["Creation of financial products for more than 100K clients.", "Cash (IN/OUT) movements automation.", "Third-Party API Integration.", "Development by iterations, agile methodologies."],
  technologiesUsed: ["C#", "ASP.NET MVC", "Web API", ".NET Core", "AWS", "Microsoft SQL Server", "MySQL", "MongoDB", "Redis", "Message Queues", "Worker Services"]
}, {
  role: "Junior .NET Developer",
  company: {
    name: "IT Resources S.A.",
    url: "https://www.itrsa.com.ar/"
  },
  date: {
    from: "AUG 2017",
    to: "MAY 2019 • 1yr 9mo"
  },
  duties: ["Development and maintenance of CRM / ERP for clients of the software factory."],
  technologiesUsed: ["C#", "ASP.NET MVC", "ASP Web Forms", "JavaScript", "SAP Integrations", "Entity Framework", "Microsoft SQL Server", "Azure Cloud"]
}, {
  role: "Systems Auditor",
  company: {
    name: "Bertora & Asociados",
    url: "https://www.crowe.com/ar/about-us/nuestras-oficinas"
  },
  date: {
    from: "NOV 2016",
    to: "AUG 2017 • 9mo"
  },
  duties: ["Internal and External Systems Audit.", "Protection of IT assets.", "Analysis of cycles corresponding to the Entity's business framework, detection and evaluation of automatic and manual controls.", 'Compliance review of Communications "A" 4609 and 5374 of the Central Bank of Argentina.', "Computer Assisted Audit Techniques (CAATs)."],
  technologiesUsed: ["ACL", "Excel"]
}];
const mySkills = {
  backend: [{
    language: "C#",
    percentaje: "90"
  }, {
    language: "ASP.NET Framework",
    percentaje: "80"
  }, {
    language: "ASP.NET Core",
    percentaje: "85"
  }],
  frontend: [{
    language: "Javascript",
    percentaje: "75"
  }, {
    language: "React",
    percentaje: "15"
  }, {
    language: "Angular",
    percentaje: "20"
  }, {
    language: "HTML/CSS",
    percentaje: "95"
  }]
};
const otherSkills = ["Docker", "Bash", "Git", "SCRUM", "REST Api", "Distributed systems"];

const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_headerpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Luca Provenzano | .NET Developer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx("article", {
    className: "resume-wrapper text-center position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-wrapper-inner mx-auto text-left bg-white shadow-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_component_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "resume-body p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(_component_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section experience-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, "Work Experience"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, experiences.map((value, index) => {
    return __jsx(_component_experience__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      job: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 30
      }
    });
  })))), __jsx("div", {
    className: "col-lg-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section skills-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, "Skills & Tools"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "resume-skill-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, "Backend"), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 23
    }
  }, mySkills.backend.map((value, index) => {
    return __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      skills: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 34
      }
    });
  })), __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, "Frontend"), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }, mySkills.frontend.map((value, index) => {
    return __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      skills: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 34
      }
    });
  }))), __jsx("div", {
    className: "resume-skill-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 23
    }
  }, "Others"), __jsx("ul", {
    className: "list-inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 23
    }
  }, otherSkills.map((value, index) => {
    return __jsx(_component_badgeskill__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      skill: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 34
      }
    });
  }))))), __jsx("section", {
    className: "resume-section education-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, "Education"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx(_component_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 23
    }
  })))), __jsx("section", {
    className: "resume-section language-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, "Language"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-lang-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 25
    }
  }, "English"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, "(Intermediate)")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, "Spanish"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 25
    }
  }, "(Native)"))))), __jsx("section", {
    className: "resume-section interests-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 19
    }
  }, "Interests"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }
  }, "Rugby"), __jsx("li", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 23
    }
  }, "CS GO"), __jsx("li", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 23
    }
  }, "Cook"))))))))), __jsx("footer", {
    class: "footer text-center pt-2 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, "Crafted in Buenos Aires, Argentina.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Luca\Next-Resume-Luca\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvYmFkZ2Vza2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvZWR1Y2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9leHBlcmllbmNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXJwYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9za2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvc29jaWFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9zdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQmFkZ2VTa2lsbCIsInNraWxsIiwiRWR1Y2F0aW9uIiwiRXhwZXJpZW5jZSIsImpvYiIsImR1dGllcyIsInRlY2hub2xvZ2llc1VzZWQiLCJpbmRleCIsInZhbHVlIiwiZW50cmllcyIsInB1c2giLCJyb2xlIiwiY29tcGFueSIsInVybCIsIm5hbWUiLCJkYXRlIiwiZnJvbSIsInRvIiwiSGVhZFBhZ2UiLCJ0aXRsZSIsIlByb2ZpbGUiLCJTb2NpYWxQcm9maWxlIiwiaWNvbmNsYXNzIiwibGluayIsInRleHQiLCJyZXF1aXJlIiwibWFwIiwia2V5IiwiU2tpbGwiLCJza2lsbHMiLCJsYW5ndWFnZSIsIndpZHRoIiwicGVyY2VudGFqZSIsIlNvY2lhbCIsIlN1bW1hcnkiLCJleHBlcmllbmNlcyIsIm15U2tpbGxzIiwiYmFja2VuZCIsImZyb250ZW5kIiwib3RoZXJTa2lsbHMiLCJJbmRleCJdLCJtYXBwaW5n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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLENBREYsQ0FKRixDQXZFRixDQWJGLENBRkYsQ0FGRixDQURGLENBRkYsRUE0R0U7QUFBUSxTQUFLLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBREYsQ0E1R0YsQ0FERjtBQWtIRCxDQW5IRDs7QUFxSGVnQyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZQQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvZmlsZS1jYTIzYzk1NDQwMmU1OWJiMjkzMTUyNzkwYTA4YTE3MS5qcGdcIjsiLCJjb25zdCBCYWRnZVNraWxsID0gKHsgc2tpbGwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1saWdodFwiPntza2lsbH08L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWRnZVNraWxsO1xyXG4iLCJjb25zdCBFZHVjYXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWRlZ3JlZSBmb250LXdlaWdodC1ib2xkXCI+UHJvZ3JhbW1pbmcgdGVjaG5pY2lhbjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1kZWdyZWUtb3JnXCI+VW5pdmVyc2lkYWQgVGVjbm9sw7NnaWNhIE5hY2lvbmFsPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWRlZ3JlZS10aW1lXCI+MjAxNiAtIDIwMTk8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjtcclxuIiwiY29uc3QgRXhwZXJpZW5jZSA9ICh7IGpvYiB9KSA9PiB7XHJcbiAgY29uc3QgZHV0aWVzID0gW107XHJcbiAgY29uc3QgdGVjaG5vbG9naWVzVXNlZCA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGpvYi5kdXRpZXMuZW50cmllcygpKSB7XHJcbiAgICBkdXRpZXMucHVzaCg8bGkga2V5PXtpbmRleH0+e3ZhbHVlfTwvbGk+KTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2Ygam9iLnRlY2hub2xvZ2llc1VzZWQuZW50cmllcygpKSB7XHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkLnB1c2goXHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBiYWRnZS1waWxsXCI+e3ZhbHVlfTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtdGltZWxpbmUgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicmVzdW1lLXRpbWVsaW5lLWl0ZW0gcG9zaXRpb24tcmVsYXRpdmUgcGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXRpbWVsaW5lLWl0ZW0taGVhZGVyIG1iLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXN1bWUtcG9zaXRpb24tdGl0bGUgZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+XHJcbiAgICAgICAgICAgICAge2pvYi5yb2xlfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGEgaHJlZj17am9iLmNvbXBhbnkudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICB7am9iLmNvbXBhbnkubmFtZX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtcG9zaXRpb24tdGltZVwiPlxyXG4gICAgICAgICAgICB7am9iLmRhdGUuZnJvbX0gLSB7am9iLmRhdGUudG99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS10aW1lbGluZS1pdGVtLWRlc2NcIj5cclxuICAgICAgICAgIDx1bD57ZHV0aWVzfTwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmVcIj5cclxuICAgICAgICAgICAge3RlY2hub2xvZ2llc1VzZWR9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgSGVhZFBhZ2UgPSAoe3RpdGxlfSkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuXHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTkVUIGRldmVsb3Blciwgc3BlY2lhbGl6ZWQgaW4gZGlzdHJpYnV0ZWQgc3lzdGVtcy4gQmFja2VuZCBzb2Z0d2FyZSBkZXZlbG9wZXIuIEx1Y2EgUHJvdmVuemFubyBSZXN1bWVcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJMdWNhIFByb3Zlbnphbm9cIi8+XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZFBhZ2U7IiwiaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi9zb2NpYWxcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFNvY2lhbFByb2ZpbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgIGljb25jbGFzczogXCJmYWIgZmEtbGlua2VkaW4taW4gZmEtZndcIixcclxuICAgICAgbGluazogIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Byb3Zlbnphbm9sdWNhXCIsXHJcbiAgICAgIHRleHQ6ICBcInByb3Zlbnphbm9sdWNhXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb25jbGFzczogXCJmYWIgZmEtZ2l0aHViLWFsdCBmYS1md1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHA6Ly9naXRodWIuY29tL2xwcm92ZW56YW5vXCIsXHJcbiAgICAgIHRleHQ6IFwibHByb3Zlbnphbm9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWNvbmNsYXNzOiBcImZhciBmYS1maWxlXCIsXHJcbiAgICAgIGxpbms6ICBcIiNcIixcclxuICAgICAgdGV4dDogXCJSZXN1bWUgKFBERilcIlxyXG4gICAgfSxcclxuICBcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZXN1bWUtaGVhZGVyIHB0LTQgcHQtbWQtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMyBpbWctZmx1aWQgcGljdHVyZSBteC1hdXRvXCJcclxuICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5qcGdcIil9XHJcbiAgICAgICAgICBhbHQ9XCJMdWNhIFByb3Zlbnphbm8gcHJvZmlsZSBwaG90b1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgcC00IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBteC1hdXRvIG14LWxnLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJuYW1lIG10LTAgbWItMSB0ZXh0LXdoaXRlIHRleHQtdXBwZXJjYXNlIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgTHVjYSBQcm92ZW56YW5vXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItM1wiPi5ORVQgRGV2ZWxvcGVyPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZSBmYS1mdyBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpsdWNhZXByb3ZAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgIGx1Y2FlcHJvdlthdF1nbWFpbC5jb21cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeS1pbmZvIG1sLW1kLWF1dG8gbXQtMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzdW1lLXNvY2lhbCBsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAge1NvY2lhbFByb2ZpbGUubWFwKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTb2NpYWwga2V5ID0ge2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uY2xhc3M9e3ZhbHVlLmljb25jbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt2YWx1ZS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3ZhbHVlLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIiwiY29uc3QgU2tpbGwgPSAoeyB0aXRsZSwgc2tpbGxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2tpbGwtbmFtZVwiPntza2lsbHMubGFuZ3VhZ2V9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgcmVzdW1lLXByb2dyZXNzXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHRoZW1lLXByb2dyZXNzLWJhci1kYXJrXCJcclxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogc2tpbGxzLnBlcmNlbnRhamUgKyBcIiVcIiB9fVxyXG4gICAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjI1XCJcclxuICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcclxuICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbDtcclxuIiwiY29uc3QgU29jaWFsID0gKHsgaWNvbmNsYXNzLCBsaW5rLCB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtY29udGFpbmVyIHRleHQtY2VudGVyIG1yLTJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17aWNvbmNsYXNzfT48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XHJcbiIsImNvbnN0IFN1bW1hcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIHN1bW1hcnktc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgIENhcmVlciBTdW1tYXJ5XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICBIaSEgSSdtIDxzdHJvbmc+c29mdHdhcmUgZGV2ZWxvcGVyPC9zdHJvbmc+LiBJIHNwZWNpYWxpemUgaW4gPHN0cm9uZz5iYWNrZW5kPC9zdHJvbmc+XHJcbiAgICAgICAgICAmbmJzcDthbmQgZGlzdHJpYnV0ZWQgc3lzdGVtcy4gQWxzbywgSSdtIHBhcnRpY2lwYXRlIGluIHRoZSBkZXNpZ24sIGRldmVsb3BtZW50IGFuZFxyXG4gICAgICAgICAgaW1wbGVtZW50YXRpb24gcHJvY2VzcyBmb3Igb25lIG9mIHRoZSBsYXJnZXN0IDxzdHJvbmc+ZmludGVjaDwvc3Ryb25nPiBjb21wYW5pZXMgaW5cclxuICAgICAgICAgIEFyZ2VudGluYS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMTBcIj5cclxuICAgICAgICAgIE92ZXIgdGhlIGxhc3QgMysgeWVhcnMsIEkgaGF2ZSBkZXZlbG9wZWQgZGlmZmVyZW50IGluZm9ybWF0aW9uIHN5c3RlbXNcclxuICAgICAgICAgIGFuZCBBUElzIGluY2x1ZGluZyB3ZWIgc2l0ZXMgdXNpbmcgbWFueSB0ZWNobm9sb2dpZXMgc3VjaCBhcyAuTkVUXHJcbiAgICAgICAgICAoPHN0cm9uZz5DIywgQVNQLk5FVCksIEphdmFzY3JpcHQsIE15U1FMLCBTUUwgU2VydmVyLFxyXG4gICAgICAgICAgTW9uZ29EQiBhbmQgUmVkaXMuPC9zdHJvbmc+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG4gICAgICAgICAgQWJvdmUgYWxsLCBpdCBtb3RpdmF0ZXMgbWUgYSBsb3QgdG8gbGVhcm4gYW5kIGNyZWF0ZSBwcm9kdWN0cyB1c2VyXHJcbiAgICAgICAgICBjZW50ZXJlZC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXJQYWdlIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVycGFnZVwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2ZpbGVcIjtcclxuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIi4uL2NvbXBvbmVudC9zdW1tYXJ5XCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuLi9jb21wb25lbnQvZXhwZXJpZW5jZVwiO1xyXG5pbXBvcnQgU2tpbGwgZnJvbSBcIi4uL2NvbXBvbmVudC9za2lsbFwiO1xyXG5pbXBvcnQgQmFkZ2VTa2lsbCBmcm9tIFwiLi4vY29tcG9uZW50L2JhZGdlc2tpbGxcIjtcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50L2VkdWNhdGlvblwiO1xyXG5cclxuY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgcm9sZTogXCJTZW5pb3IgLk5FVCBEZXZlbG9wZXJcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJpbnZlcnRpck9ubGluZS5jb21cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vaW52ZXJ0aXJvbmxpbmUuY29tXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIk1BWSAyMDE5XCIsXHJcbiAgICAgIHRvOiBcIlBSRVNFTlRcIixcclxuICAgIH0sXHJcbiAgICBkdXRpZXM6IFtcclxuICAgICAgXCJDcmVhdGlvbiBvZiBmaW5hbmNpYWwgcHJvZHVjdHMgZm9yIG1vcmUgdGhhbiAxMDBLIGNsaWVudHMuXCIsXHJcbiAgICAgIFwiQ2FzaCAoSU4vT1VUKSBtb3ZlbWVudHMgYXV0b21hdGlvbi5cIixcclxuICAgICAgXCJUaGlyZC1QYXJ0eSBBUEkgSW50ZWdyYXRpb24uXCIsXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYnkgaXRlcmF0aW9ucywgYWdpbGUgbWV0aG9kb2xvZ2llcy5cIixcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQyNcIixcclxuICAgICAgXCJBU1AuTkVUIE1WQ1wiLFxyXG4gICAgICBcIldlYiBBUElcIixcclxuICAgICAgXCIuTkVUIENvcmVcIixcclxuICAgICAgXCJBV1NcIixcclxuICAgICAgXCJNaWNyb3NvZnQgU1FMIFNlcnZlclwiLFxyXG4gICAgICBcIk15U1FMXCIsXHJcbiAgICAgIFwiTW9uZ29EQlwiLFxyXG4gICAgICBcIlJlZGlzXCIsXHJcbiAgICAgIFwiTWVzc2FnZSBRdWV1ZXNcIixcclxuICAgICAgXCJXb3JrZXIgU2VydmljZXNcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICByb2xlOiBcIkp1bmlvciAuTkVUIERldmVsb3BlclwiLFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICBuYW1lOiBcIklUIFJlc291cmNlcyBTLkEuXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pdHJzYS5jb20uYXIvXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIkFVRyAyMDE3XCIsXHJcbiAgICAgIHRvOiBcIk1BWSAyMDE5IOKAoiAxeXIgOW1vXCIsXHJcbiAgICB9LFxyXG4gICAgZHV0aWVzOiBbXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYW5kIG1haW50ZW5hbmNlIG9mIENSTSAvIEVSUCBmb3IgY2xpZW50cyBvZiB0aGUgc29mdHdhcmUgZmFjdG9yeS5cIixcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQyNcIixcclxuICAgICAgXCJBU1AuTkVUIE1WQ1wiLFxyXG4gICAgICBcIkFTUCBXZWIgRm9ybXNcIixcclxuICAgICAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIFwiU0FQIEludGVncmF0aW9uc1wiLFxyXG4gICAgICBcIkVudGl0eSBGcmFtZXdvcmtcIixcclxuICAgICAgXCJNaWNyb3NvZnQgU1FMIFNlcnZlclwiLFxyXG4gICAgICBcIkF6dXJlIENsb3VkXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogXCJTeXN0ZW1zIEF1ZGl0b3JcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJCZXJ0b3JhICYgQXNvY2lhZG9zXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5jcm93ZS5jb20vYXIvYWJvdXQtdXMvbnVlc3RyYXMtb2ZpY2luYXNcIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGZyb206IFwiTk9WIDIwMTZcIixcclxuICAgICAgdG86IFwiQVVHIDIwMTcg4oCiIDltb1wiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkludGVybmFsIGFuZCBFeHRlcm5hbCBTeXN0ZW1zIEF1ZGl0LlwiLFxyXG4gICAgICBcIlByb3RlY3Rpb24gb2YgSVQgYXNzZXRzLlwiLFxyXG4gICAgICBcIkFuYWx5c2lzIG9mIGN5Y2xlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBFbnRpdHkncyBidXNpbmVzcyBmcmFtZXdvcmssIGRldGVjdGlvbiBhbmQgZXZhbHVhdGlvbiBvZiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBjb250cm9scy5cIixcclxuICAgICAgJ0NvbXBsaWFuY2UgcmV2aWV3IG9mIENvbW11bmljYXRpb25zIFwiQVwiIDQ2MDkgYW5kIDUzNzQgb2YgdGhlIENlbnRyYWwgQmFuayBvZiBBcmdlbnRpbmEuJyxcclxuICAgICAgXCJDb21wdXRlciBBc3Npc3RlZCBBdWRpdCBUZWNobmlxdWVzIChDQUFUcykuXCIsXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1wiQUNMXCIsIFwiRXhjZWxcIl0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IG15U2tpbGxzID0ge1xyXG4gIGJhY2tlbmQ6IFtcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQyNcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI5MFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQVNQLk5FVCBGcmFtZXdvcmtcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI4MFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQVNQLk5FVCBDb3JlXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiODVcIixcclxuICAgIH0sXHJcbiAgXSxcclxuXHJcbiAgZnJvbnRlbmQ6IFtcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjc1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJSZWFjdFwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjE1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJBbmd1bGFyXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiMjBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiOTVcIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IG90aGVyU2tpbGxzID0gW1xyXG4gIFwiRG9ja2VyXCIsXHJcbiAgXCJCYXNoXCIsXHJcbiAgXCJHaXRcIixcclxuICBcIlNDUlVNXCIsXHJcbiAgXCJSRVNUIEFwaVwiLFxyXG4gIFwiRGlzdHJpYnV0ZWQgc3lzdGVtc1wiLFxyXG5dO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJQYWdlIHRpdGxlPVwiTHVjYSBQcm92ZW56YW5vIHwgLk5FVCBEZXZlbG9wZXJcIj48L0hlYWRlclBhZ2U+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJlc3VtZS13cmFwcGVyIHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtd3JhcHBlci1pbm5lciBteC1hdXRvIHRleHQtbGVmdCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1ib2R5IHAtNVwiPlxyXG4gICAgICAgICAgICA8U3VtbWFyeSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGV4cGVyaWVuY2Utc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdvcmsgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXhwZXJpZW5jZSBrZXk9e2luZGV4fSBqb2I9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gc2tpbGxzLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTa2lsbHMgJmFtcDsgVG9vbHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2tpbGwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJlc3VtZS1za2lsbHMtY2F0IGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge215U2tpbGxzLmJhY2tlbmQubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNraWxsIGtleT17aW5kZXh9IHNraWxscz17dmFsdWV9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxscy1jYXQgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGcm9udGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge215U2tpbGxzLmZyb250ZW5kLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTa2lsbCBrZXk9e2luZGV4fSBza2lsbHM9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJyZXN1bWUtc2tpbGxzLWNhdCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3RoZXJTa2lsbHMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJhZGdlU2tpbGwga2V5PXtpbmRleH0gc2tpbGw9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGVkdWNhdGlvbi1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBsYW5ndWFnZS1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcmVzdW1lLWxhbmctbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoSW50ZXJtZWRpYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3BhbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoTmF0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGludGVyZXN0cy1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJlc3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiPlJ1Z2J5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+Q1MgR088L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5Db29rPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIHRleHQtY2VudGVyIHB0LTIgcGItNVwiPlxyXG4gICAgICAgIDxzbWFsbD5DcmFmdGVkIGluIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLjwvc21hbGw+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=