webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/profile.js":
/*!******************************!*\
  !*** ./component/profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social */ "./component/social.js");
var _this = undefined,
    _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Profile = function Profile() {
  return __jsx("header", {
    className: "resume-header pt-4 pt-md-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "media flex-column flex-md-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "mr-3 img-fluid picture mx-auto",
    src: __webpack_require__(/*! ../assets/images/profile.jpg */ "./assets/images/profile.jpg"),
    alt: "Luca Provenzano profile photo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "primary-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "name mt-0 mb-1 text-white text-uppercase text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Luca Provenzano"), __jsx("div", {
    className: "title mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, ".NET Developer"), __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "far fa-envelope fa-fw mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "mailto:lucaeprov@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "lucaeprov[at]gmail.com")))), __jsx("div", {
    className: "secondary-info ml-md-auto mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "resume-social list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, SocialProfile.map(function (value, key) {
    return __jsx(_social__WEBPACK_IMPORTED_MODULE_1__["default"], {
      keu: key,
      iconclass: value.iconclass,
      link: value.link,
      text: value.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 26
      }
    });
  }))))));
};

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicmVxdWlyZSIsIlNvY2lhbFByb2ZpbGUiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImljb25jbGFzcyIsImxpbmsiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUdwQixTQUNFO0FBQVEsYUFBUyxFQUFDLDRCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGdDQURaO0FBRUUsT0FBRyxFQUFFQyxtQkFBTyxDQUFDLGlFQUFELENBRmQ7QUFHRSxPQUFHLEVBQUMsK0JBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsK0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsRUFLRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw0QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLFFBQUksRUFBQyw0QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLENBREYsQ0FMRixDQURGLEVBZUU7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsYUFBYSxDQUFDQyxHQUFkLENBQWtCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFlO0FBQzlCLFdBQU8sTUFBQywrQ0FBRDtBQUFRLFNBQUcsRUFBSUEsR0FBZjtBQUNDLGVBQVMsRUFBRUQsS0FBSyxDQUFDRSxTQURsQjtBQUVDLFVBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUZiO0FBR0MsVUFBSSxFQUFFSCxLQUFLLENBQUNJLElBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBS0gsR0FOQSxDQURILENBREYsQ0FmRixDQU5GLENBREYsQ0FERjtBQXNDRCxDQXpDRDs7S0FBTVIsTztBQTJDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgzNGM2MzJhZTI4ZWNkNjA4ZTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU29jaWFsIGZyb20gXCIuL3NvY2lhbFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZXN1bWUtaGVhZGVyIHB0LTQgcHQtbWQtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMyBpbWctZmx1aWQgcGljdHVyZSBteC1hdXRvXCJcclxuICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5qcGdcIil9XHJcbiAgICAgICAgICBhbHQ9XCJMdWNhIFByb3Zlbnphbm8gcHJvZmlsZSBwaG90b1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgcC00IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBteC1hdXRvIG14LWxnLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJuYW1lIG10LTAgbWItMSB0ZXh0LXdoaXRlIHRleHQtdXBwZXJjYXNlIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgTHVjYSBQcm92ZW56YW5vXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItM1wiPi5ORVQgRGV2ZWxvcGVyPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZSBmYS1mdyBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpsdWNhZXByb3ZAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgIGx1Y2FlcHJvdlthdF1nbWFpbC5jb21cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeS1pbmZvIG1sLW1kLWF1dG8gbXQtMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzdW1lLXNvY2lhbCBsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAge1NvY2lhbFByb2ZpbGUubWFwKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTb2NpYWwga2V1ID0ge2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uY2xhc3M9e3ZhbHVlLmljb25jbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt2YWx1ZS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3ZhbHVlLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==