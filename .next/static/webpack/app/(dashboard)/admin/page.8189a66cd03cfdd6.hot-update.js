"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/admin/page",{

/***/ "(app-pages-browser)/./src/components/EventCalander.tsx":
/*!******************************************!*\
  !*** ./src/components/EventCalander.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendar */ \"(app-pages-browser)/./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"(app-pages-browser)/./node_modules/react-calendar/dist/Calendar.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst event = [\n    {\n        id: 1,\n        title: \"Lorem ipsum dolor\",\n        time: \"12:00 PM - 4:00 PM\",\n        description: \"Talk is cheap show me your code....\"\n    },\n    {\n        id: 2,\n        title: \"Lorem ipsum dolor\",\n        time: \"12:00 PM - 4:00 PM\",\n        description: \"Talk is cheap show me your code....\"\n    },\n    {\n        id: 3,\n        title: \"Lorem ipsum dolor\",\n        time: \"12:00 PM - 4:00 PM\",\n        description: \"Talk is cheap show me your code....\"\n    },\n    {\n        id: 4,\n        title: \"Lorem ipsum dolor\",\n        time: \"12:00 PM - 4:00 PM\",\n        description: \"Talk is cheap show me your code....\"\n    }\n];\nconst EventCalander = ()=>{\n    _s();\n    const [value, onChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-4 rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onChange: onChange,\n                value: value\n            }, void 0, false, {\n                fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-semibold my-5 \",\n                    children: \"Event\"\n                }, void 0, false, {\n                    fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\",\n                children: event.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 rounded-md border-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: e.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: e.time\n                                    }, void 0, false, {\n                                        fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: e.description\n                            }, void 0, false, {\n                                fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, e.id, true, {\n                        fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/menimesh/Documents/school_management_system/next-dashboard-ui/src/components/EventCalander.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EventCalander, \"DQgK+Tjy3CpWvhZj4nuXkkLAGxU=\");\n_c = EventCalander;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCalander);\nvar _c;\n$RefreshReg$(_c, \"EventCalander\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0V2ZW50Q2FsYW5kZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSWlDO0FBQ0s7QUFDSTtBQUkxQyxNQUFNRSxRQUFRO0lBQ1o7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0NBQ0Q7QUFDRCxNQUFNQyxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUSxJQUFJVTtJQUU5QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNYLHNEQUFRQTtnQkFBQ1EsVUFBVUE7Z0JBQVVELE9BQU9BOzs7Ozs7MEJBQ3JDLDhEQUFDRztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQThCOzs7Ozs7Ozs7OzswQkFFOUMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVixNQUFNWSxHQUFHLENBQUMsQ0FBQ0Msa0JBQ1YsOERBQUNKO3dCQUFlQyxXQUFVOzswQ0FDeEIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0M7a0RBQUlFLEVBQUVYLEtBQUs7Ozs7OztrREFDWiw4REFBQ1k7a0RBQU1ELEVBQUVWLElBQUk7Ozs7Ozs7Ozs7OzswQ0FFZiw4REFBQ1k7MENBQUdGLEVBQUVULFdBQVc7Ozs7Ozs7dUJBTFRTLEVBQUVaLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXeEI7R0F0Qk1JO0tBQUFBO0FBdUJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0V2ZW50Q2FsYW5kZXIudHN4PzhkMTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHRpbWUgfSBmcm9tIFwiY29uc29sZVwiO1xuaW1wb3J0IHsgdGl0bGUgfSBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwicmVhY3QtY2FsZW5kYXJcIjtcbmltcG9ydCBcInJlYWN0LWNhbGVuZGFyL2Rpc3QvQ2FsZW5kYXIuY3NzXCI7XG50eXBlIFZhbHVlUGllY2UgPSBEYXRlIHwgbnVsbDtcblxudHlwZSBWYWx1ZSA9IFZhbHVlUGllY2UgfCBbVmFsdWVQaWVjZSwgVmFsdWVQaWVjZV07XG5jb25zdCBldmVudCA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yXCIsXG4gICAgdGltZTogXCIxMjowMCBQTSAtIDQ6MDAgUE1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWxrIGlzIGNoZWFwIHNob3cgbWUgeW91ciBjb2RlLi4uLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3JcIixcbiAgICB0aW1lOiBcIjEyOjAwIFBNIC0gNDowMCBQTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhbGsgaXMgY2hlYXAgc2hvdyBtZSB5b3VyIGNvZGUuLi4uXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvclwiLFxuICAgIHRpbWU6IFwiMTI6MDAgUE0gLSA0OjAwIFBNXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFsayBpcyBjaGVhcCBzaG93IG1lIHlvdXIgY29kZS4uLi5cIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yXCIsXG4gICAgdGltZTogXCIxMjowMCBQTSAtIDQ6MDAgUE1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWxrIGlzIGNoZWFwIHNob3cgbWUgeW91ciBjb2RlLi4uLlwiLFxuICB9LFxuXTtcbmNvbnN0IEV2ZW50Q2FsYW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgb25DaGFuZ2VdID0gdXNlU3RhdGU8VmFsdWU+KG5ldyBEYXRlKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZFwiPlxuICAgICAgPENhbGVuZGFyIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBteS01IFwiPkV2ZW50PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIHtldmVudC5tYXAoKGUpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ZS5pZH0gY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtbWQgYm9yZGVyLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMT57ZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8c3Bhbj57ZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+e2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q2FsYW5kZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYWxlbmRhciIsImV2ZW50IiwiaWQiLCJ0aXRsZSIsInRpbWUiLCJkZXNjcmlwdGlvbiIsIkV2ZW50Q2FsYW5kZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiRGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZSIsInNwYW4iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/EventCalander.tsx\n"));

/***/ })

});