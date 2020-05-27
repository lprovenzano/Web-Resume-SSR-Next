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
  var SocialProfile = [{
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
    text: "Resume"
  }];
  return __jsx("header", {
    className: "resume-header pt-4 pt-md-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "media flex-column flex-md-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "mr-3 img-fluid picture mx-auto",
    src: __webpack_require__(/*! ../assets/images/profile.jpg */ "./assets/images/profile.jpg"),
    alt: "Luca Provenzano profile photo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "primary-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "name mt-0 mb-1 text-white text-uppercase text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Luca Provenzano"), __jsx("div", {
    className: "title mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, ".NET Developer"), __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "far fa-envelope fa-fw mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "mailto:lucaeprov@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "lucaeprov[at]gmail.com")))), __jsx("div", {
    className: "secondary-info ml-md-auto mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "resume-social list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, SocialProfile.map(function (value, key) {
    return __jsx(_social__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      iconclass: value.iconclass,
      link: value.link,
      text: value.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiU29jaWFsUHJvZmlsZSIsImljb25jbGFzcyIsImxpbmsiLCJ0ZXh0IiwicmVxdWlyZSIsIm1hcCIsInZhbHVlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUVwQixNQUFNQyxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsYUFBUyxFQUFFLDBCQURiO0FBRUVDLFFBQUksRUFBRyw0Q0FGVDtBQUdFQyxRQUFJLEVBQUc7QUFIVCxHQURvQixFQU1wQjtBQUNFRixhQUFTLEVBQUUseUJBRGI7QUFFRUMsUUFBSSxFQUFFLCtCQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTm9CLEVBV3BCO0FBQ0VGLGFBQVMsRUFBRSxhQURiO0FBRUVDLFFBQUksRUFBRyxHQUZUO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBWG9CLENBQXRCO0FBbUJBLFNBQ0U7QUFBUSxhQUFTLEVBQUMsNEJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZ0NBRFo7QUFFRSxPQUFHLEVBQUVDLG1CQUFPLENBQUMsaUVBQUQsQ0FGZDtBQUdFLE9BQUcsRUFBQywrQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFLLGFBQVMsRUFBQywrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixFQUtFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsUUFBSSxFQUFDLDRCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkYsQ0FERixDQUxGLENBREYsRUFlRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWU7QUFDOUIsV0FBTyxNQUFDLCtDQUFEO0FBQVEsU0FBRyxFQUFJQSxHQUFmO0FBQ0MsZUFBUyxFQUFFRCxLQUFLLENBQUNMLFNBRGxCO0FBRUMsVUFBSSxFQUFFSyxLQUFLLENBQUNKLElBRmI7QUFHQyxVQUFJLEVBQUVJLEtBQUssQ0FBQ0gsSUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFLSCxHQU5BLENBREgsQ0FERixDQWZGLENBTkYsQ0FERixDQURGO0FBc0NELENBM0REOztLQUFNSixPO0FBNkRTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmUzMzk0MGM2ZWI0MjkzN2I2MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb2NpYWwgZnJvbSBcIi4vc29jaWFsXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBTb2NpYWxQcm9maWxlID0gW1xyXG4gICAge1xyXG4gICAgICBpY29uY2xhc3M6IFwiZmFiIGZhLWxpbmtlZGluLWluIGZhLWZ3XCIsXHJcbiAgICAgIGxpbms6ICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wcm92ZW56YW5vbHVjYVwiLFxyXG4gICAgICB0ZXh0OiAgXCJwcm92ZW56YW5vbHVjYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpY29uY2xhc3M6IFwiZmFiIGZhLWdpdGh1Yi1hbHQgZmEtZndcIixcclxuICAgICAgbGluazogXCJodHRwOi8vZ2l0aHViLmNvbS9scHJvdmVuemFub1wiLFxyXG4gICAgICB0ZXh0OiBcImxwcm92ZW56YW5vXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb25jbGFzczogXCJmYXIgZmEtZmlsZVwiLFxyXG4gICAgICBsaW5rOiAgXCIjXCIsXHJcbiAgICAgIHRleHQ6IFwiUmVzdW1lXCJcclxuICAgIH0sXHJcbiAgXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVzdW1lLWhlYWRlciBwdC00IHB0LW1kLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTMgaW1nLWZsdWlkIHBpY3R1cmUgbXgtYXV0b1wiXHJcbiAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUuanBnXCIpfVxyXG4gICAgICAgICAgYWx0PVwiTHVjYSBQcm92ZW56YW5vIHByb2ZpbGUgcGhvdG9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IHAtNCBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbXgtYXV0byBteC1sZy0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmFtZSBtdC0wIG1iLTEgdGV4dC13aGl0ZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgIEx1Y2EgUHJvdmVuemFub1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTNcIj4uTkVUIERldmVsb3BlcjwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGUgZmEtZncgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bHVjYWVwcm92QGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICBsdWNhZXByb3ZbYXRdZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW5mbyBtbC1tZC1hdXRvIG10LTJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlc3VtZS1zb2NpYWwgbGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgIHtTb2NpYWxQcm9maWxlLm1hcCgodmFsdWUsIGtleSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8U29jaWFsIGtleSA9IHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbmNsYXNzPXt2YWx1ZS5pY29uY2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17dmFsdWUubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt2YWx1ZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=