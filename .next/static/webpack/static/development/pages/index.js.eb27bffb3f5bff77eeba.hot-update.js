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
var skills = [backend = [{
  language: "C#",
  percentaje: "90"
}, {
  language: "ASP.NET Framework",
  percentaje: "80"
}, {
  language: "ASP.NET Core (WebApi)",
  percentaje: "85"
}], frontend = [{
  language: "Vanilla Javascript",
  percentaje: "75"
}, {
  language: "React",
  percentaje: "80"
}, {
  language: "ASP.NET Core (WebApi)",
  percentaje: "85"
}]];

var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(_component_headerpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Luca Provenzano | .NET Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("article", {
    className: "resume-wrapper text-center position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-wrapper-inner mx-auto text-left bg-white shadow-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_component_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "resume-body p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(_component_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section experience-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, "Work Experience"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, experiences.map(function (value, index) {
    return __jsx(_component_experience__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      job: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 30
      }
    });
  })))), __jsx("div", {
    className: "col-lg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section skills-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "Skills & Tools"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }), __jsx(_component_badgeskill__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }))), __jsx("section", {
    className: "resume-section education-section mb-5",
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
  }, "Education"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx(_component_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  })))), __jsx("section", {
    className: "resume-section reference-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, "Awards"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-awards-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, "Award Name Lorem"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.")), __jsx("li", {
    className: "mb-0 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, "Award Name Ipsum"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque."))))), __jsx("section", {
    className: "resume-section language-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }, "Language"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-lang-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, "English"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 25
    }
  }, "(Native)")), __jsx("li", {
    className: "mb-2 align-middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, "French"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, "(Professional)")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }, "Spanish"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, "(Professional)"))))), __jsx("section", {
    className: "resume-section interests-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  }, "Interests"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 23
    }
  }, "Climbing"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, "Snowboarding"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBlcmllbmNlcyIsInJvbGUiLCJjb21wYW55IiwibmFtZSIsInVybCIsImRhdGUiLCJmcm9tIiwidG8iLCJkdXRpZXMiLCJ0ZWNobm9sb2dpZXNVc2VkIiwic2tpbGxzIiwiYmFja2VuZCIsImxhbmd1YWdlIiwicGVyY2VudGFqZSIsImZyb250ZW5kIiwiSW5kZXgiLCJtYXAiLCJ2YWx1ZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSx1QkFEUjtBQUVFQyxTQUFPLEVBQUU7QUFDUEMsUUFBSSxFQUFFLG9CQURDO0FBRVBDLE9BQUcsRUFBRTtBQUZFLEdBRlg7QUFNRUMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFBRSxVQURGO0FBRUpDLE1BQUUsRUFBRTtBQUZBLEdBTlI7QUFVRUMsUUFBTSxFQUFFLENBQ04saUNBRE0sRUFFTixxQ0FGTSxFQUdOLDhCQUhNLEVBSU4saURBSk0sQ0FWVjtBQWdCRUMsa0JBQWdCLEVBQUUsQ0FDaEIsSUFEZ0IsRUFFaEIsYUFGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsS0FMZ0IsRUFNaEIsc0JBTmdCLEVBT2hCLE9BUGdCLEVBUWhCLFNBUmdCLEVBU2hCLE9BVGdCLEVBVWhCLGdCQVZnQixFQVdoQixpQkFYZ0I7QUFoQnBCLENBRGtCLEVBK0JsQjtBQUNFUixNQUFJLEVBQUUsdUJBRFI7QUFFRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxtQkFEQztBQUVQQyxPQUFHLEVBQUU7QUFGRSxHQUZYO0FBTUVDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUUsVUFERjtBQUVKQyxNQUFFLEVBQUU7QUFGQSxHQU5SO0FBVUVDLFFBQU0sRUFBRSxDQUNO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QUFBQSxnQkFERixFQUVFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLENBREYsQ0FKRixDQXBGRixDQWJGLENBRkYsQ0FGRixDQURGLENBRkYsQ0FERjtBQTRIRCxDQTlIRDs7S0FBTUYsSztBQWdJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmViMjdiZmZiM2Y1YmZmNzdlZWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXJQYWdlIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVycGFnZVwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2ZpbGVcIjtcclxuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIi4uL2NvbXBvbmVudC9zdW1tYXJ5XCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuLi9jb21wb25lbnQvZXhwZXJpZW5jZVwiO1xyXG5pbXBvcnQgU2tpbGwgZnJvbSBcIi4uL2NvbXBvbmVudC9za2lsbFwiO1xyXG5pbXBvcnQgQmFkZ2VTa2lsbCBmcm9tIFwiLi4vY29tcG9uZW50L2JhZGdlc2tpbGxcIjtcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50L2VkdWNhdGlvblwiO1xyXG5cclxuY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgcm9sZTogXCJTZW5pb3IgLk5FVCBEZXZlbG9wZXJcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJpbnZlcnRpck9ubGluZS5jb21cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vaW52ZXJ0aXJvbmxpbmUuY29tXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIk1BWSAyMDE5XCIsXHJcbiAgICAgIHRvOiBcIlBSRVNFTlRcIixcclxuICAgIH0sXHJcbiAgICBkdXRpZXM6IFtcclxuICAgICAgXCJDcmVhdGlvbiBvZiBmaW5hbmNpYWwgcHJvZHVjdHMuXCIsXHJcbiAgICAgIFwiQ2FzaCAoSU4vT1VUKSBtb3ZlbWVudHMgYXV0b21hdGlvbi5cIixcclxuICAgICAgXCJUaGlyZC1QYXJ0eSBBUEkgSW50ZWdyYXRpb24uXCIsXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYnkgaXRlcmF0aW9ucywgYWdpbGUgbWV0aG9kb2xvZ2llcy5cIlxyXG4gICAgXSxcclxuICAgIHRlY2hub2xvZ2llc1VzZWQ6IFtcclxuICAgICAgXCJDI1wiLFxyXG4gICAgICBcIkFTUC5ORVQgTVZDXCIsXHJcbiAgICAgIFwiV2ViIEFQSVwiLFxyXG4gICAgICBcIi5ORVQgQ29yZVwiLFxyXG4gICAgICBcIkFXU1wiLFxyXG4gICAgICBcIk1pY3Jvc29mdCBTUUwgU2VydmVyXCIsXHJcbiAgICAgIFwiTXlTUUxcIixcclxuICAgICAgXCJNb25nb0RCXCIsXHJcbiAgICAgIFwiUmVkaXNcIixcclxuICAgICAgXCJNZXNzYWdlIFF1ZXVlc1wiLFxyXG4gICAgICBcIldvcmtlciBTZXJ2aWNlc1wiLFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogXCJKdW5pb3IgLk5FVCBEZXZlbG9wZXJcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJJVCBSZXNvdXJjZXMgUy5BLlwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaXRyc2EuY29tLmFyL1wiLFxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgZnJvbTogXCJBVUcgMjAxN1wiLFxyXG4gICAgICB0bzogXCJNQVkgMjAxOSDigKIgMXlyIDltb1wiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkRldmVsb3BtZW50IGFuZCBtYWludGVuYW5jZSBvZiBDUk0gLyBFUlAgZm9yIGNsaWVudHMgb2YgdGhlIHNvZnR3YXJlIGZhY3RvcnkuXCJcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQyNcIixcclxuICAgICAgXCJBU1AuTkVUIE1WQ1wiLFxyXG4gICAgICBcIkFTUCBXZWIgRm9ybXNcIixcclxuICAgICAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIFwiU0FQIEludGVncmF0aW9uc1wiLFxyXG4gICAgICBcIkVudGl0eSBGcmFtZXdvcmtcIixcclxuICAgICAgXCJNaWNyb3NvZnQgU1FMIFNlcnZlclwiLFxyXG4gICAgICBcIkF6dXJlIENsb3VkXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvbGU6IFwiU3lzdGVtcyBBdWRpdG9yXCIsXHJcbiAgICBjb21wYW55OiB7XHJcbiAgICAgIG5hbWU6IFwiQmVydG9yYSAmIEFzb2NpYWRvc1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuY3Jvd2UuY29tL2FyL2Fib3V0LXVzL251ZXN0cmFzLW9maWNpbmFzXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIk5PViAyMDE2XCIsXHJcbiAgICAgIHRvOiBcIkFVRyAyMDE3IOKAoiA5bW9cIixcclxuICAgIH0sXHJcbiAgICBkdXRpZXM6IFtcclxuICAgICAgXCJJbnRlcm5hbCBhbmQgRXh0ZXJuYWwgU3lzdGVtcyBBdWRpdC5cIixcclxuICAgICAgXCJQcm90ZWN0aW9uIG9mIElUIGFzc2V0cy5cIixcclxuICAgICAgXCJBbmFseXNpcyBvZiBjeWNsZXMgY29ycmVzcG9uZGluZyB0byB0aGUgRW50aXR5J3MgYnVzaW5lc3MgZnJhbWV3b3JrLCBkZXRlY3Rpb24gYW5kIGV2YWx1YXRpb24gb2YgYXV0b21hdGljIGFuZCBtYW51YWwgY29udHJvbHMuXCIsXHJcbiAgICAgIFwiQ29tcGxpYW5jZSByZXZpZXcgb2YgQ29tbXVuaWNhdGlvbnMgXFxcIkFcXFwiIDQ2MDkgYW5kIDUzNzQgb2YgdGhlIENlbnRyYWwgQmFuayBvZiBBcmdlbnRpbmEuXCIsXHJcbiAgICAgIFwiQ29tcHV0ZXIgQXNzaXN0ZWQgQXVkaXQgVGVjaG5pcXVlcyAoQ0FBVHMpLlwiXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1xyXG4gICAgICBcIkFDTFwiLFxyXG4gICAgICBcIkV4Y2VsXCJcclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBza2lsbHMgPSBbXHJcbiAgYmFja2VuZCA9IFtcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQyNcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI5MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJBU1AuTkVUIEZyYW1ld29ya1wiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjgwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkFTUC5ORVQgQ29yZSAoV2ViQXBpKVwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjg1XCJcclxuICAgIH1cclxuICBdLFxyXG4gIGZyb250ZW5kID0gW1xyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJWYW5pbGxhIEphdmFzY3JpcHRcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI3NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJSZWFjdFwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjgwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkFTUC5ORVQgQ29yZSAoV2ViQXBpKVwiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjg1XCJcclxuICAgIH1cclxuICBdLFxyXG5dO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXJQYWdlIHRpdGxlPVwiTHVjYSBQcm92ZW56YW5vIHwgLk5FVCBEZXZlbG9wZXJcIj48L0hlYWRlclBhZ2U+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJlc3VtZS13cmFwcGVyIHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtd3JhcHBlci1pbm5lciBteC1hdXRvIHRleHQtbGVmdCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1ib2R5IHAtNVwiPlxyXG4gICAgICAgICAgICA8U3VtbWFyeSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGV4cGVyaWVuY2Utc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdvcmsgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKCh2YWx1ZSwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFeHBlcmllbmNlIGtleT17aW5kZXh9IGpvYiA9IHt2YWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gc2tpbGxzLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTa2lsbHMgJmFtcDsgVG9vbHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlU2tpbGwgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBlZHVjYXRpb24tc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVkdWNhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gcmVmZXJlbmNlLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBBd2FyZHNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcmVzdW1lLWF3YXJkcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMiBwbC00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLWljb24gZmFzIGZhLXRyb3BoeSBwb3NpdGlvbi1hYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mYS10cmFuc2Zvcm09XCJzaHJpbmstMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLW5hbWVcIj5Bd2FyZCBOYW1lIExvcmVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBd2FyZCBkZXNjIGdvZXMgaGVyZSwgdWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlIGV1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByZXRpdW0gcXVpcywgc2VtLiBOdWxsYSBjb25zZXF1YXQgbWFzc2EgcXVpcyBlbmltLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERvbmVjIHBlZGUganVzdG8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0wIHBsLTQgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN1bWUtYXdhcmQtaWNvbiBmYXMgZmEtdHJvcGh5IHBvc2l0aW9uLWFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZhLXRyYW5zZm9ybT1cInNocmluay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtYXdhcmQtbmFtZVwiPkF3YXJkIE5hbWUgSXBzdW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtYXdhcmQtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEF3YXJkIGRlc2MgZ29lcyBoZXJlLCB1bHRyaWNpZXMgbmVjLCBwZWxsZW50ZXNxdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGxhbmd1YWdlLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCByZXN1bWUtbGFuZy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXN1bWUtbGFuZy1uYW1lIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbmdsaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChOYXRpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTIgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3VtZS1sYW5nLW5hbWUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZyZW5jaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoUHJvZmVzc2lvbmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3BhbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoUHJvZmVzc2lvbmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIGludGVyZXN0cy1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJlc3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiPkNsaW1iaW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+U25vd2JvYXJkaW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+Q29va2luZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==