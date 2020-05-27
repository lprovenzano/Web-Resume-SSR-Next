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
var skills = [backend[({
  language: "C#",
  percentaje: "90"
}, {
  language: "ASP.NET Framework",
  percentaje: "80"
}, {
  language: "ASP.NET Core (WebApi)",
  percentaje: "85"
})], frontend[({
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
})]];

var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(_component_headerpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Luca Provenzano | .NET Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }), __jsx("article", {
    className: "resume-wrapper text-center position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "resume-wrapper-inner mx-auto text-left bg-white shadow-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(_component_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "resume-body p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx(_component_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section experience-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, "Work Experience"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, experiences.map(function (value, index) {
    return __jsx(_component_experience__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      job: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 30
      }
    });
  })))), __jsx("div", {
    className: "col-lg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("section", {
    className: "resume-section skills-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }, "Skills & Tools"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, __jsx(_component_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }), __jsx(_component_badgeskill__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }))), __jsx("section", {
    className: "resume-section education-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, "Education"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx(_component_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  })))), __jsx("section", {
    className: "resume-section reference-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, "Awards"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-awards-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, "Award Name Lorem"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.")), __jsx("li", {
    className: "mb-0 pl-4 position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "resume-award-icon fas fa-trophy position-absolute",
    "data-fa-transform": "shrink-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "resume-award-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }, "Award Name Ipsum"), __jsx("div", {
    className: "resume-award-desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, "Award desc goes here, ultricies nec, pellentesque."))))), __jsx("section", {
    className: "resume-section language-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, "Language"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled resume-lang-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, "English"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, "(Native)")), __jsx("li", {
    className: "mb-2 align-middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 25
    }
  }, "French"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }, "(Professional)")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "resume-lang-name font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, "Spanish"), " ", __jsx("small", {
    className: "text-muted font-weight-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, "(Professional)"))))), __jsx("section", {
    className: "resume-section interests-section mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "resume-section-title text-uppercase font-weight-bold pb-3 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  }, "Interests"), __jsx("div", {
    className: "resume-section-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  }, "Climbing"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 23
    }
  }, "Snowboarding"), __jsx("li", {
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBlcmllbmNlcyIsInJvbGUiLCJjb21wYW55IiwibmFtZSIsInVybCIsImRhdGUiLCJmcm9tIiwidG8iLCJkdXRpZXMiLCJ0ZWNobm9sb2dpZXNVc2VkIiwic2tpbGxzIiwiYmFja2VuZCIsImxhbmd1YWdlIiwicGVyY2VudGFqZSIsImZyb250ZW5kIiwiSW5kZXgiLCJtYXAiLCJ2YWx1ZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSx1QkFEUjtBQUVFQyxTQUFPLEVBQUU7QUFDUEMsUUFBSSxFQUFFLG9CQURDO0FBRVBDLE9BQUcsRUFBRTtBQUZFLEdBRlg7QUFNRUMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFBRSxVQURGO0FBRUpDLE1BQUUsRUFBRTtBQUZBLEdBTlI7QUFVRUMsUUFBTSxFQUFFLENBQ04saUNBRE0sRUFFTixxQ0FGTSxFQUdOLDhCQUhNLEVBSU4saURBSk0sQ0FWVjtBQWdCRUMsa0JBQWdCLEVBQUUsQ0FDaEIsSUFEZ0IsRUFFaEIsYUFGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsS0FMZ0IsRUFNaEIsc0JBTmdCLEVBT2hCLE9BUGdCLEVBUWhCLFNBUmdCLEVBU2hCLE9BVGdCLEVBVWhCLGdCQVZnQixFQVdoQixpQkFYZ0I7QUFoQnBCLENBRGtCLEVBK0JsQjtBQUNFUixNQUFJLEVBQUUsdUJBRFI7QUFFRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxtQkFEQztBQUVQQyxPQUFHLEVBQUU7QUFGRSxHQUZYO0FBTUVDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUUsVUFERjtBQUVKQyxNQUFFLEVBQUU7QUFGQSxHQU5SO0FBVUVDLFFBQU0sRUFBRSxDQUNO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ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsQ0FERixDQUpGLENBcEZGLENBYkYsQ0FGRixDQUZGLENBREYsQ0FGRixDQURGO0FBNEhELENBOUhEOztLQUFNRixLO0FBZ0lTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTU5MTg3ZWFmZDg2ZTRmODYxMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlclBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJwYWdlXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnQvcHJvZmlsZVwiO1xyXG5pbXBvcnQgU3VtbWFyeSBmcm9tIFwiLi4vY29tcG9uZW50L3N1bW1hcnlcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudC9leHBlcmllbmNlXCI7XHJcbmltcG9ydCBTa2lsbCBmcm9tIFwiLi4vY29tcG9uZW50L3NraWxsXCI7XHJcbmltcG9ydCBCYWRnZVNraWxsIGZyb20gXCIuLi9jb21wb25lbnQvYmFkZ2Vza2lsbFwiO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnQvZWR1Y2F0aW9uXCI7XHJcblxyXG5jb25zdCBleHBlcmllbmNlcyA9IFtcclxuICB7XHJcbiAgICByb2xlOiBcIlNlbmlvciAuTkVUIERldmVsb3BlclwiLFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICBuYW1lOiBcImludmVydGlyT25saW5lLmNvbVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9pbnZlcnRpcm9ubGluZS5jb21cIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGZyb206IFwiTUFZIDIwMTlcIixcclxuICAgICAgdG86IFwiUFJFU0VOVFwiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkNyZWF0aW9uIG9mIGZpbmFuY2lhbCBwcm9kdWN0cy5cIixcclxuICAgICAgXCJDYXNoIChJTi9PVVQpIG1vdmVtZW50cyBhdXRvbWF0aW9uLlwiLFxyXG4gICAgICBcIlRoaXJkLVBhcnR5IEFQSSBJbnRlZ3JhdGlvbi5cIixcclxuICAgICAgXCJEZXZlbG9wbWVudCBieSBpdGVyYXRpb25zLCBhZ2lsZSBtZXRob2RvbG9naWVzLlwiXHJcbiAgICBdLFxyXG4gICAgdGVjaG5vbG9naWVzVXNlZDogW1xyXG4gICAgICBcIkMjXCIsXHJcbiAgICAgIFwiQVNQLk5FVCBNVkNcIixcclxuICAgICAgXCJXZWIgQVBJXCIsXHJcbiAgICAgIFwiLk5FVCBDb3JlXCIsXHJcbiAgICAgIFwiQVdTXCIsXHJcbiAgICAgIFwiTWljcm9zb2Z0IFNRTCBTZXJ2ZXJcIixcclxuICAgICAgXCJNeVNRTFwiLFxyXG4gICAgICBcIk1vbmdvREJcIixcclxuICAgICAgXCJSZWRpc1wiLFxyXG4gICAgICBcIk1lc3NhZ2UgUXVldWVzXCIsXHJcbiAgICAgIFwiV29ya2VyIFNlcnZpY2VzXCIsXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb2xlOiBcIkp1bmlvciAuTkVUIERldmVsb3BlclwiLFxyXG4gICAgY29tcGFueToge1xyXG4gICAgICBuYW1lOiBcIklUIFJlc291cmNlcyBTLkEuXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pdHJzYS5jb20uYXIvXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBmcm9tOiBcIkFVRyAyMDE3XCIsXHJcbiAgICAgIHRvOiBcIk1BWSAyMDE5IOKAoiAxeXIgOW1vXCIsXHJcbiAgICB9LFxyXG4gICAgZHV0aWVzOiBbXHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgYW5kIG1haW50ZW5hbmNlIG9mIENSTSAvIEVSUCBmb3IgY2xpZW50cyBvZiB0aGUgc29mdHdhcmUgZmFjdG9yeS5cIlxyXG4gICAgXSxcclxuICAgIHRlY2hub2xvZ2llc1VzZWQ6IFtcclxuICAgICAgXCJDI1wiLFxyXG4gICAgICBcIkFTUC5ORVQgTVZDXCIsXHJcbiAgICAgIFwiQVNQIFdlYiBGb3Jtc1wiLFxyXG4gICAgICBcIkphdmFTY3JpcHRcIixcclxuICAgICAgXCJTQVAgSW50ZWdyYXRpb25zXCIsXHJcbiAgICAgIFwiRW50aXR5IEZyYW1ld29ya1wiLFxyXG4gICAgICBcIk1pY3Jvc29mdCBTUUwgU2VydmVyXCIsXHJcbiAgICAgIFwiQXp1cmUgQ2xvdWRcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogXCJTeXN0ZW1zIEF1ZGl0b3JcIixcclxuICAgIGNvbXBhbnk6IHtcclxuICAgICAgbmFtZTogXCJCZXJ0b3JhICYgQXNvY2lhZG9zXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5jcm93ZS5jb20vYXIvYWJvdXQtdXMvbnVlc3RyYXMtb2ZpY2luYXNcIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGZyb206IFwiTk9WIDIwMTZcIixcclxuICAgICAgdG86IFwiQVVHIDIwMTcg4oCiIDltb1wiLFxyXG4gICAgfSxcclxuICAgIGR1dGllczogW1xyXG4gICAgICBcIkludGVybmFsIGFuZCBFeHRlcm5hbCBTeXN0ZW1zIEF1ZGl0LlwiLFxyXG4gICAgICBcIlByb3RlY3Rpb24gb2YgSVQgYXNzZXRzLlwiLFxyXG4gICAgICBcIkFuYWx5c2lzIG9mIGN5Y2xlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBFbnRpdHkncyBidXNpbmVzcyBmcmFtZXdvcmssIGRldGVjdGlvbiBhbmQgZXZhbHVhdGlvbiBvZiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBjb250cm9scy5cIixcclxuICAgICAgXCJDb21wbGlhbmNlIHJldmlldyBvZiBDb21tdW5pY2F0aW9ucyBcXFwiQVxcXCIgNDYwOSBhbmQgNTM3NCBvZiB0aGUgQ2VudHJhbCBCYW5rIG9mIEFyZ2VudGluYS5cIixcclxuICAgICAgXCJDb21wdXRlciBBc3Npc3RlZCBBdWRpdCBUZWNobmlxdWVzIChDQUFUcykuXCJcclxuICAgIF0sXHJcbiAgICB0ZWNobm9sb2dpZXNVc2VkOiBbXHJcbiAgICAgIFwiQUNMXCIsXHJcbiAgICAgIFwiRXhjZWxcIlxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IHNraWxscyA9IFtcclxuICBiYWNrZW5kW1xyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJDI1wiLFxyXG4gICAgICBwZXJjZW50YWplOiBcIjkwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmd1YWdlOiBcIkFTUC5ORVQgRnJhbWV3b3JrXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiODBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiQVNQLk5FVCBDb3JlIChXZWJBcGkpXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiODVcIlxyXG4gICAgfVxyXG4gIF0sXHJcblxyXG4gIGZyb250ZW5kW1xyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiNzVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiUmVhY3RcIixcclxuICAgICAgcGVyY2VudGFqZTogXCIyNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5ndWFnZTogXCJBbmd1bGFyXCIsXHJcbiAgICAgIHBlcmNlbnRhamU6IFwiMzBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ3VhZ2U6IFwiSFRNTC9DU1NcIixcclxuICAgICAgcGVyY2VudGFqZTogXCI5NVwiXHJcbiAgICB9XHJcbiAgXSxcclxuXTtcclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyUGFnZSB0aXRsZT1cIkx1Y2EgUHJvdmVuemFubyB8IC5ORVQgRGV2ZWxvcGVyXCI+PC9IZWFkZXJQYWdlPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyZXN1bWUtd3JhcHBlciB0ZXh0LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXdyYXBwZXItaW5uZXIgbXgtYXV0byB0ZXh0LWxlZnQgYmctd2hpdGUgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtYm9keSBwLTVcIj5cclxuICAgICAgICAgICAgPFN1bW1hcnkgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBleHBlcmllbmNlLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBXb3JrIEV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2VzLm1hcCgodmFsdWUsIGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXhwZXJpZW5jZSBrZXk9e2luZGV4fSBqb2IgPSB7dmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIHNraWxscy1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxzICZhbXA7IFRvb2xzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVNraWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24gZWR1Y2F0aW9uLXNlY3Rpb24gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBwYi0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb25cclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uIHJlZmVyZW5jZS1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQXdhcmRzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXNlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIHJlc3VtZS1hd2FyZHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTIgcGwtNCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1pY29uIGZhcyBmYS10cm9waHkgcG9zaXRpb24tYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmEtdHJhbnNmb3JtPVwic2hyaW5rLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1uYW1lXCI+QXdhcmQgTmFtZSBMb3JlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1hd2FyZC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXdhcmQgZGVzYyBnb2VzIGhlcmUsIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZSBldSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhIHF1aXMgZW5pbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEb25lYyBwZWRlIGp1c3RvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMCBwbC00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLWljb24gZmFzIGZhLXRyb3BoeSBwb3NpdGlvbi1hYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mYS10cmFuc2Zvcm09XCJzaHJpbmstMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLW5hbWVcIj5Bd2FyZCBOYW1lIElwc3VtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWF3YXJkLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBd2FyZCBkZXNjIGdvZXMgaGVyZSwgdWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBsYW5ndWFnZS1zZWN0aW9uIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQgcGItMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcmVzdW1lLWxhbmctbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzdW1lLWxhbmctbmFtZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoTmF0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yIGFsaWduLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXN1bWUtbGFuZy1uYW1lIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGcmVuY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKFByb2Zlc3Npb25hbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3VtZS1sYW5nLW5hbWUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNwYW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKFByb2Zlc3Npb25hbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbiBpbnRlcmVzdHMtc2VjdGlvbiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXN1bWUtc2VjdGlvbi10aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIHBiLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEludGVyZXN0c1xyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5DbGltYmluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiPlNub3dib2FyZGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiPkNvb2tpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=