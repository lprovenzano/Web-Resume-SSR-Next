webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/profile.js":
/*!******************************!*\
  !*** ./component/profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social */ "./component/social.js");


var _this = undefined,
    _jsxFileName = "C:\\Luca\\Next-Resume-Luca\\component\\profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Profile = function Profile() {
  var SocialProfile = [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    iconclass: "fab fa-linkedin-in fa-fw",
    link: "https://www.linkedin.com/in/provenzanoluca"
  }, "link", "provenzanoluca"), {
    iconclass: "fab fa-github-alt fa-fw",
    link: "http://github.com/lprovenzano",
    text: "lprovenzano"
  }, {
    iconclass: "fab fa-file-alt fa-fw",
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
    return __jsx(_social__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlNvY2lhbFByb2ZpbGUiLCJpY29uY2xhc3MiLCJsaW5rIiwidGV4dCIsInJlcXVpcmUiLCJtYXAiLCJ2YWx1ZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFcEIsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFFbkJDLGFBQVMsRUFBRSwwQkFGTztBQUdsQkMsUUFBSSxFQUFHO0FBSFcsYUFJWCxnQkFKVyxHQU1wQjtBQUNFRCxhQUFTLEVBQUUseUJBRGI7QUFFRUMsUUFBSSxFQUFFLCtCQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTm9CLEVBV3BCO0FBQ0VGLGFBQVMsRUFBRSx1QkFEYjtBQUVFQyxRQUFJLEVBQUcsR0FGVDtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQVhvQixDQUF0QjtBQW1CQSxTQUNFO0FBQVEsYUFBUyxFQUFDLDRCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGdDQURaO0FBRUUsT0FBRyxFQUFFQyxtQkFBTyxDQUFDLGlFQUFELENBRmQ7QUFHRSxPQUFHLEVBQUMsK0JBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsK0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsRUFLRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw0QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLFFBQUksRUFBQyw0QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLENBREYsQ0FMRixDQURGLEVBZUU7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFlO0FBQzlCLFdBQU8sTUFBQywrQ0FBRDtBQUFRLFNBQUcsRUFBSUEsR0FBZjtBQUNDLGVBQVMsRUFBRUQsS0FBSyxDQUFDTCxTQURsQjtBQUVDLFVBQUksRUFBRUssS0FBSyxDQUFDSixJQUZiO0FBR0MsVUFBSSxFQUFFSSxLQUFLLENBQUNILElBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBS0gsR0FOQSxDQURILENBREYsQ0FmRixDQU5GLENBREYsQ0FERjtBQXNDRCxDQTNERDs7S0FBTUosTztBQTZEU0Esc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTE5N2U5NDUxMzZjZjEyYzExNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb2NpYWwgZnJvbSBcIi4vc29jaWFsXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBTb2NpYWxQcm9maWxlID0gW1xyXG4gICAge1xyXG4gICAgICBpY29uY2xhc3M6IFwiZmFiIGZhLWxpbmtlZGluLWluIGZhLWZ3XCIsXHJcbiAgICAgIGxpbms6ICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wcm92ZW56YW5vbHVjYVwiLFxyXG4gICAgICBsaW5rOiAgXCJwcm92ZW56YW5vbHVjYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpY29uY2xhc3M6IFwiZmFiIGZhLWdpdGh1Yi1hbHQgZmEtZndcIixcclxuICAgICAgbGluazogXCJodHRwOi8vZ2l0aHViLmNvbS9scHJvdmVuemFub1wiLFxyXG4gICAgICB0ZXh0OiBcImxwcm92ZW56YW5vXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb25jbGFzczogXCJmYWIgZmEtZmlsZS1hbHQgZmEtZndcIixcclxuICAgICAgbGluazogIFwiI1wiLFxyXG4gICAgICB0ZXh0OiBcIlJlc3VtZVwiXHJcbiAgICB9LFxyXG4gIFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlc3VtZS1oZWFkZXIgcHQtNCBwdC1tZC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIGltZy1mbHVpZCBwaWN0dXJlIG14LWF1dG9cIlxyXG4gICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLmpwZ1wiKX1cclxuICAgICAgICAgIGFsdD1cIkx1Y2EgUHJvdmVuemFubyBwcm9maWxlIHBob3RvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keSBwLTQgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG14LWF1dG8gbXgtbGctMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmltYXJ5LWluZm9cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5hbWUgbXQtMCBtYi0xIHRleHQtd2hpdGUgdGV4dC11cHBlcmNhc2UgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICBMdWNhIFByb3Zlbnphbm9cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBtYi0zXCI+Lk5FVCBEZXZlbG9wZXI8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlIGZhLWZ3IG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmx1Y2FlcHJvdkBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgbHVjYWVwcm92W2F0XWdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWluZm8gbWwtbWQtYXV0byBtdC0yXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZXN1bWUtc29jaWFsIGxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICB7U29jaWFsUHJvZmlsZS5tYXAoKHZhbHVlLCBrZXkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFNvY2lhbCBrZXkgPSB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb25jbGFzcz17dmFsdWUuaWNvbmNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3ZhbHVlLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dmFsdWUudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwic291cmNlUm9vdCI6IiJ9