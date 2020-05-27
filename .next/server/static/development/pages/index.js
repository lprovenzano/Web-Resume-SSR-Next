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

module.exports = "/_next/static/images/profile-831627e521d56d87b4b5e5dfe6618d6f.jpg";

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
  }];
  return __jsx("header", {
    className: "resume-header pt-4 pt-md-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "media flex-column flex-md-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "mr-3 img-fluid picture mx-auto",
    src: __webpack_require__(/*! ../assets/images/profile.jpg */ "./assets/images/profile.jpg"),
    alt: "Luca Provenzano profile photo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "primary-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "name mt-0 mb-1 text-white text-uppercase text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Luca Provenzano"), __jsx("div", {
    className: "title mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, ".NET Developer"), __jsx("ul", {
    className: "list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "far fa-envelope fa-fw mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "mailto:lucaeprov@gmail.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "lucaeprov[at]gmail.com")))), __jsx("div", {
    className: "secondary-info ml-md-auto mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "resume-social list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 45,
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
/* harmony import */ var _component_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/profile */ "./component/profile.js");
/* harmony import */ var _component_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/summary */ "./component/summary.js");
/* harmony import */ var _component_experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/experience */ "./component/experience.js");
/* harmony import */ var _component_skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/skill */ "./component/skill.js");
/* harmony import */ var _component_badgeskill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/badgeskill */ "./component/badgeskill.js");
/* harmony import */ var _component_education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/education */ "./component/education.js");
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("article", {
    className: "resume-wrapper text-center position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-wrapper-inner mx-auto text-left bg-white shadow-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(_component_profile__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "resume-body p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(_component_summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section experience-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, "Work Experience"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, experiences.map((value, index) => {
    return __jsx(_component_experience__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      job: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 30
      }
    });
  })))), __jsx("div", {
    className: "col-lg-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section skills-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, "Skills & Tools"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "resume-skill-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 23
    }
  }, "Backend"), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, mySkills.backend.map((value, index) => {
    return __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      skills: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 34
      }
    });
  })), __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }, "Frontend"), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, mySkills.frontend.map((value, index) => {
    return __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      skills: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 34
      }
    });
  }))), __jsx("div", {
    className: "resume-skill-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }, "Others"), __jsx("ul", {
    className: "list-inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, otherSkills.map((value, index) => {
    return __jsx(_component_badgeskill__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      skill: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 34
      }
    });
  }))))), __jsx("section", {
    className: "resume-section education-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, "Education"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, __jsx(_component_education__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 23
    }
  })))), __jsx("section", {
    className: "resume-section language-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, "Language"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-lang-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }, "English"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }, "(Intermediate)")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 25
    }
  }, "Spanish"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, "(Native)"))))), __jsx("section", {
    className: "resume-section interests-section mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, "Interests"), __jsx("div", {
    className: "resume-section-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 23
    }
  }, "Rugby"), __jsx("li", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 23
    }
  }, "CS GO"), __jsx("li", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }
  }, "Cook"))))))))), __jsx("footer", {
    className: "footer text-center pt-2 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvYmFkZ2Vza2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvZWR1Y2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9leHBlcmllbmNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9za2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvc29jaWFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9zdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQmFkZ2VTa2lsbCIsInNraWxsIiwiRWR1Y2F0aW9uIiwiRXhwZXJpZW5jZSIsImpvYiIsImR1dGllcyIsInRlY2hub2xvZ2llc1VzZWQiLCJpbmRleCIsInZhbHVlIiwiZW50cmllcyIsInB1c2giLCJyb2xlIiwiY29tcGFueSIsInVybCIsIm5hbWUiLCJkYXRlIiwiZnJvbSIsInRvIiwiUHJvZmlsZSIsIlNvY2lhbFByb2ZpbGUiLCJpY29uY2xhc3MiLCJsaW5rIiwidGV4dCIsInJlcXVpcmUiLCJtYXAiLCJrZXkiLCJTa2lsbCIsInRpdGxlIiwic2tpbGxzIiwibGFuZ3VhZ2UiLCJ3aWR0aCIsInBlcmNlbnRhamUiLCJTb2NpYWwiLCJTdW1tYXJ5IiwiZXhwZXJpZW5jZXMiLCJteVNraWxscyIsImJhY2tlbmQiLCJmcm9udGVuZCIsIm90aGVyU2tpbGxzIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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QVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixDQURGLENBSkYsQ0F2RUYsQ0FiRixDQUZGLENBRkYsQ0FERixDQURGLEVBMkdFO0FBQVEsYUFBUyxFQUFDLDhCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FERixDQTNHRixDQURGO0FBaUhELENBbEhEOztBQW9IZStCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclBBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9maWxlLTgzMTYyN2U1MjFkNTZkODdiNGI1ZTVkZmU2NjE4ZDZmLmpwZ1wiOyIsImNvbnN0IEJhZGdlU2tpbGwgPSAoeyBza2lsbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWxpZ2h0XCI+e3NraWxsfTwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhZGdlU2tpbGw7XHJcbiIsImNvbnN0IEVkdWNhdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtZGVncmVlIGZvbnQtd2VpZ2h0LWJvbGRcIj5Qcm9ncmFtbWluZyB0ZWNobmljaWFuPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWRlZ3JlZS1vcmdcIj5Vbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgTmFjaW9uYWw8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtZGVncmVlLXRpbWVcIj4yMDE2IC0gMjAxOTwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uO1xyXG4iLCJjb25zdCBFeHBlcmllbmNlID0gKHsgam9iIH0pID0+IHtcclxuICBjb25zdCBkdXRpZXMgPSBbXTtcclxuICBjb25zdCB0ZWNobm9sb2dpZXNVc2VkID0gW107XHJcblxyXG4gIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2Ygam9iLmR1dGllcy5lbnRyaWVzKCkpIHtcclxuICAgIGR1dGllcy5wdXNoKDxsaSBrZXk9e2luZGV4fT57dmFsdWV9PC9saT4pO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBqb2IudGVjaG5vbG9naWVzVXNlZC5lbnRyaWVzKCkpIHtcclxuICAgIHRlY2hub2xvZ2llc1VzZWQucHVzaChcclxuICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IGJhZGdlLXBpbGxcIj57dmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS10aW1lbGluZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyZXN1bWUtdGltZWxpbmUtaXRlbSBwb3NpdGlvbi1yZWxhdGl2ZSBwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtdGltZWxpbmUtaXRlbS1oZWFkZXIgbWItMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlc3VtZS1wb3NpdGlvbi10aXRsZSBmb250LXdlaWdodC1ib2xkIG1iLTFcIj5cclxuICAgICAgICAgICAgICB7am9iLnJvbGV9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtqb2IuY29tcGFueS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIHtqb2IuY29tcGFueS5uYW1lfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1wb3NpdGlvbi10aW1lXCI+XHJcbiAgICAgICAgICAgIHtqb2IuZGF0ZS5mcm9tfSAtIHtqb2IuZGF0ZS50b31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXRpbWVsaW5lLWl0ZW0tZGVzY1wiPlxyXG4gICAgICAgICAgPHVsPntkdXRpZXN9PC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxyXG4gICAgICAgICAgICB7dGVjaG5vbG9naWVzVXNlZH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlO1xyXG4iLCJpbXBvcnQgU29jaWFsIGZyb20gXCIuL3NvY2lhbFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgU29jaWFsUHJvZmlsZSA9IFtcclxuICAgIHtcclxuICAgICAgaWNvbmNsYXNzOiBcImZhYiBmYS1saW5rZWRpbi1pbiBmYS1md1wiLFxyXG4gICAgICBsaW5rOiAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcHJvdmVuemFub2x1Y2FcIixcclxuICAgICAgdGV4dDogIFwicHJvdmVuemFub2x1Y2FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWNvbmNsYXNzOiBcImZhYiBmYS1naXRodWItYWx0IGZhLWZ3XCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cDovL2dpdGh1Yi5jb20vbHByb3Zlbnphbm9cIixcclxuICAgICAgdGV4dDogXCJscHJvdmVuemFub1wiXHJcbiAgICB9XHJcbiAgXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVzdW1lLWhlYWRlciBwdC00IHB0LW1kLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTMgaW1nLWZsdWlkIHBpY3R1cmUgbXgtYXV0b1wiXHJcbiAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUuanBnXCIpfVxyXG4gICAgICAgICAgYWx0PVwiTHVjYSBQcm92ZW56YW5vIHByb2ZpbGUgcGhvdG9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IHAtNCBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbXgtYXV0byBteC1sZy0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmFtZSBtdC0wIG1iLTEgdGV4dC13aGl0ZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgIEx1Y2EgUHJvdmVuemFub1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTNcIj4uTkVUIERldmVsb3BlcjwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGUgZmEtZncgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bHVjYWVwcm92QGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICBsdWNhZXByb3ZbYXRdZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW5mbyBtbC1tZC1hdXRvIG10LTJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlc3VtZS1zb2NpYWwgbGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgIHtTb2NpYWxQcm9maWxlLm1hcCgodmFsdWUsIGtleSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8U29jaWFsIGtleSA9IHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbmNsYXNzPXt2YWx1ZS5pY29uY2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17dmFsdWUubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt2YWx1ZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiIsImNvbnN0IFNraWxsID0gKHsgdGl0bGUsIHNraWxscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxsLW5hbWVcIj57c2tpbGxzLmxhbmd1YWdlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHJlc3VtZS1wcm9ncmVzc1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciB0aGVtZS1wcm9ncmVzcy1iYXItZGFya1wiXHJcbiAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHNraWxscy5wZXJjZW50YWplICsgXCIlXCIgfX1cclxuICAgICAgICAgIGFyaWEtdmFsdWVub3c9XCIyNVwiXHJcbiAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXHJcbiAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGw7XHJcbiIsImNvbnN0IFNvY2lhbCA9ICh7IGljb25jbGFzcywgbGluaywgdGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLWNvbnRhaW5lciB0ZXh0LWNlbnRlciBtci0yXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb25jbGFzc30+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsO1xyXG4iLCJjb25zdCBTdW1tYXJ5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBzdW1tYXJ5LXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICBDYXJlZXIgU3VtbWFyeVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG4gICAgICAgICAgSGkhIEknbSA8c3Ryb25nPnNvZnR3YXJlIGRldmVsb3Blcjwvc3Ryb25nPi4gSSBzcGVjaWFsaXplIGluIDxzdHJvbmc+YmFja2VuZDwvc3Ryb25nPlxyXG4gICAgICAgICAgJm5ic3A7YW5kIGRpc3RyaWJ1dGVkIHN5c3RlbXMuIEFsc28sIEknbSBwYXJ0aWNpcGF0ZSBpbiB0aGUgZGVzaWduLCBkZXZlbG9wbWVudCBhbmRcclxuICAgICAgICAgIGltcGxlbWVudGF0aW9uIHByb2Nlc3MgZm9yIG9uZSBvZiB0aGUgbGFyZ2VzdCA8c3Ryb25nPmZpbnRlY2g8L3N0cm9uZz4gY29tcGFuaWVzIGluXHJcbiAgICAgICAgICBBcmdlbnRpbmEuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICBPdmVyIHRoZSBsYXN0IDMrIHllYXJzLCBJIGhhdmUgZGV2ZWxvcGVkIGRpZmZlcmVudCBpbmZvcm1hdGlvbiBzeXN0ZW1zXHJcbiAgICAgICAgICBhbmQgQVBJcyBpbmNsdWRpbmcgd2ViIHNpdGVzIHVzaW5nIG1hbnkgdGVjaG5vbG9naWVzIHN1Y2ggYXMgLk5FVFxyXG4gICAgICAgICAgKDxzdHJvbmc+QyMsIEFTUC5ORVQpLCBKYXZhc2NyaXB0LCBNeVNRTCwgU1FMIFNlcnZlcixcclxuICAgICAgICAgIE1vbmdvREIgYW5kIFJlZGlzLjwvc3Ryb25nPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMTBcIj5cclxuICAgICAgICAgIEFib3ZlIGFsbCwgaXQgbW90aXZhdGVzIG1lIGEgbG90IHRvIGxlYXJuIGFuZCBjcmVhdGUgcHJvZHVjdHMgdXNlclxyXG4gICAgICAgICAgY2VudGVyZWQuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2ZpbGVcIjtcclxuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIi4uL2NvbXBvbmVudC9zdW1tYXJ5XCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuLi9jb21wb25lbnQvZXhwZXJpZW5jZVwiO1xyXG5pbXBvcnQgU2tpbGwgZnJvbSBcIi4uL2NvbXBvbmVudC9za2lsbFwiO1xyXG5pbXBvcnQgQmFkZ2VTa2lsbCBmcm9tIFwiLi4vY29tcG9uZW50L2JhZGdlc2tpbGxcIjtcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50L2VkdWNhdGlvblwiO1xyXG5cclxuY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgcm9sZTogXCJTZW5pb3IgLk5FVCBEZXZlbG9wZXJcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJpbnZlcnRpck9ubGluZS5jb21cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vaW52ZXJ0aXJvbmxpbmUuY29tXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIk1BWSAyMDE5XCIsXHJcbiAgICAgIHRvOiBcIlBSRVNFTlRcIixcclxuICAgIH0sXHJcbiAgICBkdXRpZXM6IFtcclxuICAgICAgXCJDcmVhdGlvbiBvZiBmaW5hbmNpYWwgcHJvZHVjdHMgZm9yIG1vcmUgdGhhbiAxMDBLIGNsaWVudHMuXCIsXHJcbiAgICAgIFwiQ2FzaCAoSU4vT1VUKSBtb3ZlbWVudHMgYXV0b21hdGlvbi5cIixcclxuICAgICAgXCJUaGlyZC1QYXJ0eSBBUEkgSW50ZWdyYXRpb24uXCIsXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYnkgaXRlcmF0aW9ucywgYWdpbGUgbWV0aG9kb2xvZ2llcy5cIixcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQyNcIixcclxuICAgICAgXCJBU1AuTkVUIE1WQ1wiLFxyXG4gICAgICBcIldlYiBBUElcIixcclxuICAgICAgXCIuTkVUIENvcmVcIixcclxuICAgICAgXCJBV1NcIixcclxuICAgICAgXCJNaWNyb3NvZnQgU1FMIFNlcnZlclwiLFxyXG4gICAgICBcIk15U1FMXCIsXHJcbiAgICAgIFwiTW9uZ29EQlwiLFxyXG4gICAgICBcIlJlZGlzXCIsXHJcbiAgICAgIFwiTWVzc2FnZSBRdWV1ZXNcIixcclxuICAgICAgXCJXb3JrZXIgU2VydmljZXNcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICByb2xlOiBcIkp1bmlvciAuTkVUIERldmVsb3BlclwiLFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICBuYW1lOiBcIklUIFJlc291cmNlcyBTLkEuXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pdHJzYS5jb20uYXIvXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIkFVRyAyMDE3XCIsXHJcbiAgICAgIHRvOiBcIk1BWSAyMDE5IOKAoiAxeXIgOW1vXCIsXHJcbiAgICB9LFxyXG4gICAgZHV0aWVzOiBbXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYW5kIG1haW50ZW5hbmNlIG9mIENSTSAvIEVSUCBmb3IgY2xpZW50cyBvZiB0aGUgc29mdHdhcmUgZmFjdG9yeS5cIixcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQyNcIixcclxuICAgICAgXCJBU1AuTkVUIE1WQ1wiLFxyXG4gICAgICBcIkFTUCBXZWIgRm9ybXNcIixcclxuICAgICAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIFwiU0FQIEludGVncmF0aW9uc1wiLFxyXG4gICAgICBcIkVudGl0eSBGcmFtZXdvcmtcIixcclxuICAgICAgXCJNaWNyb3NvZnQgU1FMIFNlcnZlclwiLFxyXG4gICAgICBcIkF6dXJlIENsb3VkXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogXCJTeXN0ZW1zIEF1ZGl0b3JcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJCZXJ0b3JhICYgQXNvY2lhZG9zXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5jcm93ZS5jb20vYXIvYWJvdXQtdXMvbnVlc3RyYXMtb2ZpY2luYXNcIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGZyb206IFwiTk9WIDIwMTZcIixcclxuICAgICAgdG86IFwiQVVHIDIwMTcg4oCiIDltb1wiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkludGVybmFsIGFuZCBFeHRlcm5hbCBTeXN0ZW1zIEF1ZGl0LlwiLFxyXG4gICAgICBcIlByb3RlY3Rpb24gb2YgSVQgYXNzZXRzLlwiLFxyXG4gICAgICBcIkFuYWx5c2lzIG9mIGN5Y2xlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBFbnRpdHkncyBidXNpbmVzcyBmcmFtZXdvcmssIGRldGVjdGlvbiBhbmQgZXZhbHVhdGlvbiBvZiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBjb250cm9scy5cIixcclxuICAgICAgJ0NvbXBsaWFuY2UgcmV2aWV3IG9mIENvbW11bmljYXRpb25zIFwiQVwiIDQ2MDkgYW5kIDUzNzQgb2YgdGhlIENlbnRyYWwgQmFuayBvZiBBcmdlbnRpbmEuJyxcclxuICAgICAgXCJDb21wdXRlciBBc3Npc3RlZCBBdWRpdCBUZWNobmlxdWVzIChDQUFUcykuXCIsXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1wiQUNMXCIsIFwiRXhjZWxcIl0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IG15U2tpbGxzID0ge1xyXG4gIGJhY2tlbmQ6IFtcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQyNcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI5MFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQVNQLk5FVCBGcmFtZXdvcmtcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI4MFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQVNQLk5FVCBDb3JlXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiODVcIixcclxuICAgIH0sXHJcbiAgXSxcclxuXHJcbiAgZnJvbnRlbmQ6IFtcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjc1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJSZWFjdFwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjE1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJBbmd1bGFyXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiMjBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiOTVcIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IG90aGVyU2tpbGxzID0gW1xyXG4gIFwiRG9ja2VyXCIsXHJcbiAgXCJCYXNoXCIsXHJcbiAgXCJHaXRcIixcclxuICBcIlNDUlVNXCIsXHJcbiAgXCJSRVNUIEFwaVwiLFxyXG4gIFwiRGlzdHJpYnV0ZWQgc3lzdGVtc1wiLFxyXG5dO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJlc3VtZS13cmFwcGVyIHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtd3JhcHBlci1pbm5lciBteC1hdXRvIHRleHQtbGVmdCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1ib2R5IHAtNVwiPlxyXG4gICAgICAgICAgICA8U3VtbWFyeSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGV4cGVyaWVuY2Utc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdvcmsgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXhwZXJpZW5jZSBrZXk9e2luZGV4fSBqb2I9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gc2tpbGxzLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTa2lsbHMgJmFtcDsgVG9vbHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2tpbGwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJlc3VtZS1za2lsbHMtY2F0IGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge215U2tpbGxzLmJhY2tlbmQubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNraWxsIGtleT17aW5kZXh9IHNraWxscz17dmFsdWV9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxscy1jYXQgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGcm9udGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge215U2tpbGxzLmZyb250ZW5kLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTa2lsbCBrZXk9e2luZGV4fSBza2lsbHM9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJyZXN1bWUtc2tpbGxzLWNhdCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3RoZXJTa2lsbHMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJhZGdlU2tpbGwga2V5PXtpbmRleH0gc2tpbGw9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGVkdWNhdGlvbi1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBsYW5ndWFnZS1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcmVzdW1lLWxhbmctbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoSW50ZXJtZWRpYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3BhbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoTmF0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGludGVyZXN0cy1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJlc3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiPlJ1Z2J5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+Q1MgR088L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5Db29rPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciB0ZXh0LWNlbnRlciBwdC0yIHBiLTVcIj5cclxuICAgICAgICA8c21hbGw+Q3JhZnRlZCBpbiBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS48L3NtYWxsPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=