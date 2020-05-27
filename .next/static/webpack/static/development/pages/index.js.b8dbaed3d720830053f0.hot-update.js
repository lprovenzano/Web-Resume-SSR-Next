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
  duties: ["Internal and External Systems Audit.", "Protection of IT assets.", "Analysis of cycles corresponding to the Entity's business framework, detection and evaluation of automatic and manual controls.", "Compliance review of Communications \"A\" 4609 and 5374 of the Central Bank of Argentina.", "Computer Assisted Audit Techniques (CAATs)."],
  technologiesUsed: ["ACL", "Excel"]
}];
var skills = [{
  language: "C#",
  percentaje: "90"
}, {
  language: "C#",
  percentaje: "90"
}, {
  language: "C#",
  percentaje: "90"
}, {
  language: "C#",
  percentaje: "90"
}, {
  language: "C#",
  percentaje: "90"
}];

var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(_component_headerpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Luca Provenzano | .NET Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), __jsx("article", {
    className: "resume-wrapper text-center position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-wrapper-inner mx-auto text-left bg-white shadow-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_component_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "resume-body p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(_component_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section experience-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Work Experience"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, experiences.map(function (value, index) {
    return __jsx(_component_experience__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      job: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 30
      }
    });
  })))), __jsx("div", {
    className: "col-lg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section skills-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "Skills & Tools"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }), __jsx(_component_badgeskill__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }))), __jsx("section", {
    className: "resume-section education-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, "Education"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx(_component_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  })))), __jsx("section", {
    className: "resume-section reference-section mb-5",
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
  }, "Awards"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-awards-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, "Award Name Lorem"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.")), __jsx("li", {
    className: "mb-0 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, "Award Name Ipsum"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque."))))), __jsx("section", {
    className: "resume-section language-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }, "Language"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-lang-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }, "English"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }, "(Native)")), __jsx("li", {
    className: "mb-2 align-middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 25
    }
  }, "French"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }, "(Professional)")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, "Spanish"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 25
    }
  }, "(Professional)"))))), __jsx("section", {
    className: "resume-section interests-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }, "Interests"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, "Climbing"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, "Snowboarding"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBlcmllbmNlcyIsInJvbGUiLCJjb21wYW55IiwibmFtZSIsInVybCIsImRhdGUiLCJmcm9tIiwidG8iLCJkdXRpZXMiLCJ0ZWNobm9sb2dpZXNVc2VkIiwic2tpbGxzIiwibGFuZ3VhZ2UiLCJwZXJjZW50YWplIiwiSW5kZXgiLCJtYXAiLCJ2YWx1ZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSx1QkFEUjtBQUVFQyxTQUFPLEVBQUU7QUFDUEMsUUFBSSxFQUFFLG9CQURDO0FBRVBDLE9BQUcsRUFBRTtBQUZFLEdBRlg7QUFNRUMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFBRSxVQURGO0FBRUpDLE1BQUUsRUFBRTtBQUZBLEdBTlI7QUFVRUMsUUFBTSxFQUFFLENBQ04saUNBRE0sRUFFTixxQ0FGTSxFQUdOLDhCQUhNLEVBSU4saURBSk0sQ0FWVjtBQWdCRUMsa0JBQWdCLEVBQUUsQ0FDaEIsSUFEZ0IsRUFFaEIsYUFGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsS0FMZ0IsRUFNaEIsc0JBTmdCLEVBT2hCLE9BUGdCLEVBUWhCLFNBUmdCLEVBU2hCLE9BVGdCLEVBVWhCLGdCQVZnQixFQVdoQixpQkFYZ0I7QUFoQnBCLENBRGtCLEVBK0JsQjtBQUNFUixNQUFJLEVBQUUsdUJBRFI7QUFFRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxtQkFEQztBQUVQQyxPQUFHLEVBQUU7QUFGRSxHQUZYO0FBTUVDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUUsVUFERjtBQUVKQyxNQUFFLEVBQUU7QUFGQSxHQU5SO0FBVUVDLFFBQU0sRUFBRSxDQUNOLCtFQURNLENBVlY7QUFhRUMsa0JB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QUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsQ0FERixDQUpGLENBcEZGLENBYkYsQ0FGRixDQUZGLENBREYsQ0FGRixDQURGO0FBNEhELENBOUhEOztLQUFNRixLO0FBZ0lTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjhkYmFlZDNkNzIwODMwMDUzZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlclBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJwYWdlXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnQvcHJvZmlsZVwiO1xyXG5pbXBvcnQgU3VtbWFyeSBmcm9tIFwiLi4vY29tcG9uZW50L3N1bW1hcnlcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudC9leHBlcmllbmNlXCI7XHJcbmltcG9ydCBTa2lsbCBmcm9tIFwiLi4vY29tcG9uZW50L3NraWxsXCI7XHJcbmltcG9ydCBCYWRnZVNraWxsIGZyb20gXCIuLi9jb21wb25lbnQvYmFkZ2Vza2lsbFwiO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnQvZWR1Y2F0aW9uXCI7XHJcblxyXG5jb25zdCBleHBlcmllbmNlcyA9IFtcclxuICB7XHJcbiAgICByb2xlOiBcIlNlbmlvciAuTkVUIERldmVsb3BlclwiLFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICBuYW1lOiBcImludmVydGlyT25saW5lLmNvbVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9pbnZlcnRpcm9ubGluZS5jb21cIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGZyb206IFwiTUFZIDIwMTlcIixcclxuICAgICAgdG86IFwiUFJFU0VOVFwiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkNyZWF0aW9uIG9mIGZpbmFuY2lhbCBwcm9kdWN0cy5cIixcclxuICAgICAgXCJDYXNoIChJTi9PVVQpIG1vdmVtZW50cyBhdXRvbWF0aW9uLlwiLFxyXG4gICAgICBcIlRoaXJkLVBhcnR5IEFQSSBJbnRlZ3JhdGlvbi5cIixcclxuICAgICAgXCJEZXZlbG9wbWVudCBieSBpdGVyYXRpb25zLCBhZ2lsZSBtZXRob2RvbG9naWVzLlwiXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1xyXG4gICAgICBcIkMjXCIsXHJcbiAgICAgIFwiQVNQLk5FVCBNVkNcIixcclxuICAgICAgXCJXZWIgQVBJXCIsXHJcbiAgICAgIFwiLk5FVCBDb3JlXCIsXHJcbiAgICAgIFwiQVdTXCIsXHJcbiAgICAgIFwiTWljcm9zb2Z0IFNRTCBTZXJ2ZXJcIixcclxuICAgICAgXCJNeVNRTFwiLFxyXG4gICAgICBcIk1vbmdvREJcIixcclxuICAgICAgXCJSZWRpc1wiLFxyXG4gICAgICBcIk1lc3NhZ2UgUXVldWVzXCIsXHJcbiAgICAgIFwiV29ya2VyIFNlcnZpY2VzXCIsXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb2xlOiBcIkp1bmlvciAuTkVUIERldmVsb3BlclwiLFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICBuYW1lOiBcIklUIFJlc291cmNlcyBTLkEuXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pdHJzYS5jb20uYXIvXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIkFVRyAyMDE3XCIsXHJcbiAgICAgIHRvOiBcIk1BWSAyMDE5IOKAoiAxeXIgOW1vXCIsXHJcbiAgICB9LFxyXG4gICAgZHV0aWVzOiBbXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYW5kIG1haW50ZW5hbmNlIG9mIENSTSAvIEVSUCBmb3IgY2xpZW50cyBvZiB0aGUgc29mdHdhcmUgZmFjdG9yeS5cIlxyXG4gICAgXSxcclxuICAgIHRlY2hub2xvZ2llc1VzZWQ6IFtcclxuICAgICAgXCJDI1wiLFxyXG4gICAgICBcIkFTUC5ORVQgTVZDXCIsXHJcbiAgICAgIFwiQVNQIFdlYiBGb3Jtc1wiLFxyXG4gICAgICBcIkphdmFTY3JpcHRcIixcclxuICAgICAgXCJTQVAgSW50ZWdyYXRpb25zXCIsXHJcbiAgICAgIFwiRW50aXR5IEZyYW1ld29ya1wiLFxyXG4gICAgICBcIk1pY3Jvc29mdCBTUUwgU2VydmVyXCIsXHJcbiAgICAgIFwiQXp1cmUgQ2xvdWRcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogXCJTeXN0ZW1zIEF1ZGl0b3JcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJCZXJ0b3JhICYgQXNvY2lhZG9zXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5jcm93ZS5jb20vYXIvYWJvdXQtdXMvbnVlc3RyYXMtb2ZpY2luYXNcIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGZyb206IFwiTk9WIDIwMTZcIixcclxuICAgICAgdG86IFwiQVVHIDIwMTcg4oCiIDltb1wiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkludGVybmFsIGFuZCBFeHRlcm5hbCBTeXN0ZW1zIEF1ZGl0LlwiLFxyXG4gICAgICBcIlByb3RlY3Rpb24gb2YgSVQgYXNzZXRzLlwiLFxyXG4gICAgICBcIkFuYWx5c2lzIG9mIGN5Y2xlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBFbnRpdHkncyBidXNpbmVzcyBmcmFtZXdvcmssIGRldGVjdGlvbiBhbmQgZXZhbHVhdGlvbiBvZiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBjb250cm9scy5cIixcclxuICAgICAgXCJDb21wbGlhbmNlIHJldmlldyBvZiBDb21tdW5pY2F0aW9ucyBcXFwiQVxcXCIgNDYwOSBhbmQgNTM3NCBvZiB0aGUgQ2VudHJhbCBCYW5rIG9mIEFyZ2VudGluYS5cIixcclxuICAgICAgXCJDb21wdXRlciBBc3Npc3RlZCBBdWRpdCBUZWNobmlxdWVzIChDQUFUcykuXCJcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQUNMXCIsXHJcbiAgICAgIFwiRXhjZWxcIlxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IHNraWxscyA9IFtcclxuICB7XHJcbiAgICBsYW5ndWFnZTogXCJDI1wiLFxyXG4gICAgcGVyY2VudGFqZTogXCI5MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZTogXCJDI1wiLFxyXG4gICAgcGVyY2VudGFqZTogXCI5MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZTogXCJDI1wiLFxyXG4gICAgcGVyY2VudGFqZTogXCI5MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZTogXCJDI1wiLFxyXG4gICAgcGVyY2VudGFqZTogXCI5MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZTogXCJDI1wiLFxyXG4gICAgcGVyY2VudGFqZTogXCI5MFwiXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlclBhZ2UgdGl0bGU9XCJMdWNhIFByb3Zlbnphbm8gfCAuTkVUIERldmVsb3BlclwiPjwvSGVhZGVyUGFnZT5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicmVzdW1lLXdyYXBwZXIgdGV4dC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS13cmFwcGVyLWlubmVyIG14LWF1dG8gdGV4dC1sZWZ0IGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWJvZHkgcC01XCI+XHJcbiAgICAgICAgICAgIDxTdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gZXhwZXJpZW5jZS1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgV29yayBFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKHZhbHVlLCBpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEV4cGVyaWVuY2Uga2V5PXtpbmRleH0gam9iID0ge3ZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBza2lsbHMtc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNraWxscyAmYW1wOyBUb29sc1xyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2tpbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VTa2lsbCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGVkdWNhdGlvbi1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiByZWZlcmVuY2Utc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEF3YXJkc1xyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCByZXN1bWUtYXdhcmRzLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yIHBsLTQgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN1bWUtYXdhcmQtaWNvbiBmYXMgZmEtdHJvcGh5IHBvc2l0aW9uLWFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZhLXRyYW5zZm9ybT1cInNocmluay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtYXdhcmQtbmFtZVwiPkF3YXJkIE5hbWUgTG9yZW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtYXdhcmQtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEF3YXJkIGRlc2MgZ29lcyBoZXJlLCB1bHRyaWNpZXMgbmVjLCBwZWxsZW50ZXNxdWUgZXUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldGl1bSBxdWlzLCBzZW0uIE51bGxhIGNvbnNlcXVhdCBtYXNzYSBxdWlzIGVuaW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uZWMgcGVkZSBqdXN0by5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTAgcGwtNCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1pY29uIGZhcyBmYS10cm9waHkgcG9zaXRpb24tYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmEtdHJhbnNmb3JtPVwic2hyaW5rLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1uYW1lXCI+QXdhcmQgTmFtZSBJcHN1bTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXdhcmQgZGVzYyBnb2VzIGhlcmUsIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gbGFuZ3VhZ2Utc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIExhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIHJlc3VtZS1sYW5nLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3VtZS1sYW5nLW5hbWUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKE5hdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMiBhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRnJlbmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChQcm9mZXNzaW9uYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXN1bWUtbGFuZy1uYW1lIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTcGFuaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChQcm9mZXNzaW9uYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gaW50ZXJlc3RzLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbnRlcmVzdHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+Q2xpbWJpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5Tbm93Ym9hcmRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5Db29raW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9