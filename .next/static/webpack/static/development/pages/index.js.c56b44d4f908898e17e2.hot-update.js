webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_headerpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/headerpage */ "./component/headerpage.js");
/* harmony import */ var _component_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/profile */ "./component/profile.js");
/* harmony import */ var _component_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/summary */ "./component/summary.js");
/* harmony import */ var _component_experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/experience */ "./component/experience.js");
/* harmony import */ var _component_skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/skill */ "./component/skill.js");
/* harmony import */ var _component_badgeskill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/badgeskill */ "./component/badgeskill.js");
/* harmony import */ var _component_education__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/education */ "./component/education.js");
var _this = undefined,
    _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var experiences = [{
  role: "Senior .NET Developer",
  company: {
    name: "invertirOnline.com",
    url: "https://invertironline.com"
  },
  date: {
    from: "MAY 2019",
    to: "PRESENT"
  },
  duties: ["Creation of financial products.", "Cash (IN/OUT) movements automation.", "Third-Party API Integration.", "Development by iterations, agile methodologies."],
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
var mySkills = {
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
    percentaje: "25"
  }, {
    language: "Angular",
    percentaje: "30"
  }, {
    language: "HTML/CSS",
    percentaje: "95"
  }]
};
var otherSkills = ["Docker", "Bash", "Git", "SCRUM", "Streaming", "Messages design patterns", "Distributed systems"];

var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx(_component_headerpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Luca Provenzano | .NET Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("article", {
    className: "resume-wrapper text-center position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-wrapper-inner mx-auto text-left bg-white shadow-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(_component_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "resume-body p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(_component_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section experience-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, "Work Experience"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, experiences.map(function (value, index) {
    return __jsx(_component_experience__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      job: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 30
      }
    });
  })))), __jsx("div", {
    className: "col-lg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section skills-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, "Skills & Tools"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "resume-skill-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, "Backend"), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }, mySkills.backend.map(function (value, index) {
    return __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      skills: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 34
      }
    });
  })), __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, "Frontend"), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 23
    }
  }, mySkills.frontend.map(function (value, index) {
    return __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      skills: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 34
      }
    });
  }))), __jsx("div", {
    className: "resume-skill-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "resume-skills-cat font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, "Others"), __jsx("ul", {
    className: "list-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }, otherSkills.map(function (value, index) {
    return __jsx(_component_badgeskill__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      skill: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 34
      }
    });
  }))))), __jsx("section", {
    className: "resume-section education-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, "Education"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, __jsx(_component_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  })))), __jsx("section", {
    className: "resume-section reference-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, "Awards"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-awards-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, "Award Name Lorem"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.")), __jsx("li", {
    className: "mb-0 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, "Award Name Ipsum"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque."))))), __jsx("section", {
    className: "resume-section language-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  }, "Language"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-lang-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, "English"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 25
    }
  }, "(Native)")), __jsx("li", {
    className: "mb-2 align-middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 25
    }
  }, "French"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, "(Professional)")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, "Spanish"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, "(Professional)"))))), __jsx("section", {
    className: "resume-section interests-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }, "Interests"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 23
    }
  }, "Climbing"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 23
    }
  }, "Snowboarding"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, "Cooking"))))))))));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBlcmllbmNlcyIsInJvbGUiLCJjb21wYW55IiwibmFtZSIsInVybCIsImRhdGUiLCJmcm9tIiwidG8iLCJkdXRpZXMiLCJ0ZWNobm9sb2dpZXNVc2VkIiwibXlTa2lsbHMiLCJiYWNrZW5kIiwibGFuZ3VhZ2UiLCJwZXJjZW50YWplIiwiZnJvbnRlbmQiLCJvdGhlclNraWxscyIsIkluZGV4IiwibWFwIiwidmFsdWUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUNFQyxNQUFJLEVBQUUsdUJBRFI7QUFFRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxvQkFEQztBQUVQQyxPQUFHLEVBQUU7QUFGRSxHQUZYO0FBTUVDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUUsVUFERjtBQUVKQyxNQUFFLEVBQUU7QUFGQSxHQU5SO0FBVUVDLFFBQU0sRUFBRSxDQUNOLGlDQURNLEVBRU4scUNBRk0sRUFHTiw4QkFITSxFQUlOLGlEQUpNLENBVlY7QUFnQkVDLGtCQUFnQixFQUFFLENBQ2hCLElBRGdCLEVBRWhCLGFBRmdCLEVBR2hCLFNBSGdCLEVBSWhCLFdBSmdCLEVBS2hCLEtBTGdCLEVBTWhCLHNCQU5nQixFQU9oQixPQVBnQixFQVFoQixTQVJnQixFQVNoQixPQVRnQixFQVVoQixnQkFWZ0IsRUFXaEIsaUJBWGdCO0FBaEJwQixDQURrQixFQStCbEI7QUFDRVIsTUFBSSxFQUFFLHVCQURSO0FBRUVDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUUsbUJBREM7QUFFUEMsT0FBRyxFQUFFO0FBRkUsR0FGWDtBQU1FQyxNQUFJLEVBQUU7QUFDSkMsUUFBSSxFQUFFLFVBREY7QUFFSkMsTUFBRSxFQUFFO0FBRkEsR0FOUjtBQVVF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QUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixDQURGLENBSkYsQ0FsSEYsQ0FiRixDQUZGLENBRkYsQ0FERixDQUZGLENBREY7QUEwSkQsQ0EzSkQ7O0tBQU1GLEs7QUE2SlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jNTZiNDRkNGY5MDg4OThlMTdlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlcnBhZ2VcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9maWxlXCI7XHJcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCIuLi9jb21wb25lbnQvc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vY29tcG9uZW50L2V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IFNraWxsIGZyb20gXCIuLi9jb21wb25lbnQvc2tpbGxcIjtcclxuaW1wb3J0IEJhZGdlU2tpbGwgZnJvbSBcIi4uL2NvbXBvbmVudC9iYWRnZXNraWxsXCI7XHJcbmltcG9ydCBFZHVjYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudC9lZHVjYXRpb25cIjtcclxuXHJcbmNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gIHtcclxuICAgIHJvbGU6IFwiU2VuaW9yIC5ORVQgRGV2ZWxvcGVyXCIsXHJcbiAgICBjb21wYW55OiB7XHJcbiAgICAgIG5hbWU6IFwiaW52ZXJ0aXJPbmxpbmUuY29tXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2ludmVydGlyb25saW5lLmNvbVwiLFxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgZnJvbTogXCJNQVkgMjAxOVwiLFxyXG4gICAgICB0bzogXCJQUkVTRU5UXCIsXHJcbiAgICB9LFxyXG4gICAgZHV0aWVzOiBbXHJcbiAgICAgIFwiQ3JlYXRpb24gb2YgZmluYW5jaWFsIHByb2R1Y3RzLlwiLFxyXG4gICAgICBcIkNhc2ggKElOL09VVCkgbW92ZW1lbnRzIGF1dG9tYXRpb24uXCIsXHJcbiAgICAgIFwiVGhpcmQtUGFydHkgQVBJIEludGVncmF0aW9uLlwiLFxyXG4gICAgICBcIkRldmVsb3BtZW50IGJ5IGl0ZXJhdGlvbnMsIGFnaWxlIG1ldGhvZG9sb2dpZXMuXCIsXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1xyXG4gICAgICBcIkMjXCIsXHJcbiAgICAgIFwiQVNQLk5FVCBNVkNcIixcclxuICAgICAgXCJXZWIgQVBJXCIsXHJcbiAgICAgIFwiLk5FVCBDb3JlXCIsXHJcbiAgICAgIFwiQVdTXCIsXHJcbiAgICAgIFwiTWljcm9zb2Z0IFNRTCBTZXJ2ZXJcIixcclxuICAgICAgXCJNeVNRTFwiLFxyXG4gICAgICBcIk1vbmdvREJcIixcclxuICAgICAgXCJSZWRpc1wiLFxyXG4gICAgICBcIk1lc3NhZ2UgUXVldWVzXCIsXHJcbiAgICAgIFwiV29ya2VyIFNlcnZpY2VzXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogXCJKdW5pb3IgLk5FVCBEZXZlbG9wZXJcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJJVCBSZXNvdXJjZXMgUy5BLlwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaXRyc2EuY29tLmFyL1wiLFxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgZnJvbTogXCJBVUcgMjAxN1wiLFxyXG4gICAgICB0bzogXCJNQVkgMjAxOSDigKIgMXlyIDltb1wiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkRldmVsb3BtZW50IGFuZCBtYWludGVuYW5jZSBvZiBDUk0gLyBFUlAgZm9yIGNsaWVudHMgb2YgdGhlIHNvZnR3YXJlIGZhY3RvcnkuXCIsXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1xyXG4gICAgICBcIkMjXCIsXHJcbiAgICAgIFwiQVNQLk5FVCBNVkNcIixcclxuICAgICAgXCJBU1AgV2ViIEZvcm1zXCIsXHJcbiAgICAgIFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICBcIlNBUCBJbnRlZ3JhdGlvbnNcIixcclxuICAgICAgXCJFbnRpdHkgRnJhbWV3b3JrXCIsXHJcbiAgICAgIFwiTWljcm9zb2Z0IFNRTCBTZXJ2ZXJcIixcclxuICAgICAgXCJBenVyZSBDbG91ZFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvbGU6IFwiU3lzdGVtcyBBdWRpdG9yXCIsXHJcbiAgICBjb21wYW55OiB7XHJcbiAgICAgIG5hbWU6IFwiQmVydG9yYSAmIEFzb2NpYWRvc1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuY3Jvd2UuY29tL2FyL2Fib3V0LXVzL251ZXN0cmFzLW9maWNpbmFzXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIk5PViAyMDE2XCIsXHJcbiAgICAgIHRvOiBcIkFVRyAyMDE3IOKAoiA5bW9cIixcclxuICAgIH0sXHJcbiAgICBkdXRpZXM6IFtcclxuICAgICAgXCJJbnRlcm5hbCBhbmQgRXh0ZXJuYWwgU3lzdGVtcyBBdWRpdC5cIixcclxuICAgICAgXCJQcm90ZWN0aW9uIG9mIElUIGFzc2V0cy5cIixcclxuICAgICAgXCJBbmFseXNpcyBvZiBjeWNsZXMgY29ycmVzcG9uZGluZyB0byB0aGUgRW50aXR5J3MgYnVzaW5lc3MgZnJhbWV3b3JrLCBkZXRlY3Rpb24gYW5kIGV2YWx1YXRpb24gb2YgYXV0b21hdGljIGFuZCBtYW51YWwgY29udHJvbHMuXCIsXHJcbiAgICAgICdDb21wbGlhbmNlIHJldmlldyBvZiBDb21tdW5pY2F0aW9ucyBcIkFcIiA0NjA5IGFuZCA1Mzc0IG9mIHRoZSBDZW50cmFsIEJhbmsgb2YgQXJnZW50aW5hLicsXHJcbiAgICAgIFwiQ29tcHV0ZXIgQXNzaXN0ZWQgQXVkaXQgVGVjaG5pcXVlcyAoQ0FBVHMpLlwiLFxyXG4gICAgXSxcclxuICAgIHRlY2hub2xvZ2llc1VzZWQ6IFtcIkFDTFwiLCBcIkV4Y2VsXCJdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBteVNraWxscyA9IHtcclxuICBiYWNrZW5kOiBbXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkMjXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiOTBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkFTUC5ORVQgRnJhbWV3b3JrXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiODBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkFTUC5ORVQgQ29yZVwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjg1XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcblxyXG4gIGZyb250ZW5kOiBbXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI3NVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiUmVhY3RcIixcclxuICAgICAgcGVyY2VudGFqZTogXCIyNVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQW5ndWxhclwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjMwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJIVE1ML0NTU1wiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjk1XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBvdGhlclNraWxscyA9IFtcclxuICBcIkRvY2tlclwiLFxyXG4gIFwiQmFzaFwiLFxyXG4gIFwiR2l0XCIsXHJcbiAgXCJTQ1JVTVwiLFxyXG4gIFwiU3RyZWFtaW5nXCIsXHJcbiAgXCJNZXNzYWdlcyBkZXNpZ24gcGF0dGVybnNcIixcclxuICBcIkRpc3RyaWJ1dGVkIHN5c3RlbXNcIixcclxuXTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyUGFnZSB0aXRsZT1cIkx1Y2EgUHJvdmVuemFubyB8IC5ORVQgRGV2ZWxvcGVyXCI+PC9IZWFkZXJQYWdlPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyZXN1bWUtd3JhcHBlciB0ZXh0LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXdyYXBwZXItaW5uZXIgbXgtYXV0byB0ZXh0LWxlZnQgYmctd2hpdGUgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtYm9keSBwLTVcIj5cclxuICAgICAgICAgICAgPFN1bW1hcnkgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBleHBlcmllbmNlLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBXb3JrIEV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEV4cGVyaWVuY2Uga2V5PXtpbmRleH0gam9iPXt2YWx1ZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIHNraWxscy1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxzICZhbXA7IFRvb2xzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJyZXN1bWUtc2tpbGxzLWNhdCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tlbmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtteVNraWxscy5iYWNrZW5kLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTa2lsbCBrZXk9e2luZGV4fSBza2lsbHM9e3ZhbHVlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJlc3VtZS1za2lsbHMtY2F0IGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRnJvbnRlbmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtteVNraWxscy5mcm9udGVuZC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2tpbGwga2V5PXtpbmRleH0gc2tpbGxzPXt2YWx1ZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1za2lsbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVzdW1lLXNraWxscy1jYXQgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPdGhlcnNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge290aGVyU2tpbGxzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCYWRnZVNraWxsIGtleT17aW5kZXh9IHNraWxsPXt2YWx1ZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBlZHVjYXRpb24tc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVkdWNhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gcmVmZXJlbmNlLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBBd2FyZHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcmVzdW1lLWF3YXJkcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMiBwbC00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLWljb24gZmFzIGZhLXRyb3BoeSBwb3NpdGlvbi1hYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mYS10cmFuc2Zvcm09XCJzaHJpbmstMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBd2FyZCBOYW1lIExvcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXdhcmQgZGVzYyBnb2VzIGhlcmUsIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZSBldSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhIHF1aXMgZW5pbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEb25lYyBwZWRlIGp1c3RvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMCBwbC00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLWljb24gZmFzIGZhLXRyb3BoeSBwb3NpdGlvbi1hYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mYS10cmFuc2Zvcm09XCJzaHJpbmstMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBd2FyZCBOYW1lIElwc3VtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXdhcmQgZGVzYyBnb2VzIGhlcmUsIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gbGFuZ3VhZ2Utc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIExhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIHJlc3VtZS1sYW5nLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3VtZS1sYW5nLW5hbWUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKE5hdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMiBhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRnJlbmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChQcm9mZXNzaW9uYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXN1bWUtbGFuZy1uYW1lIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTcGFuaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChQcm9mZXNzaW9uYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gaW50ZXJlc3RzLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbnRlcmVzdHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+Q2xpbWJpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5Tbm93Ym9hcmRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5Db29raW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9