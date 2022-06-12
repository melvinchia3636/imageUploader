"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);\nuuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    try {\n        const imageFile = data.files.file;\n        const imagePath = imageFile.filepath;\n        const pathToWriteImage = `./public/uploads/${(0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()}.${imageFile.originalFilename.split(\".\").pop()}`;\n        const image = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(imagePath);\n        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile(pathToWriteImage, image);\n        //store path in DB\n        res.status(200).json({\n            message: \"success\",\n            path: pathToWriteImage.slice(1).replace(\"/public\", \"\")\n        });\n    } catch (error) {\n        res.status(500).json({\n            message: error.message\n        });\n        return;\n    }\n};\n;\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTjtBQUNWO0FBRVgsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxJQUFJLEdBQUcsTUFBTSxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7UUFDbEQsTUFBTUMsSUFBSSxHQUFHLElBQUlYLG9EQUFZLEVBQUU7UUFDL0JXLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLEVBQUUsQ0FBQ1EsR0FBRyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssR0FBSztZQUN0QyxJQUFJRixHQUFHLEVBQUUsT0FBT0gsTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQztZQUM1QkosT0FBTyxDQUFDO2dCQUFFSyxNQUFNO2dCQUFFQyxLQUFLO2FBQUUsQ0FBQyxDQUFDO1NBQzVCLENBQUMsQ0FBQztLQUNKLENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxHQUFHVCxJQUFJLENBQUNRLEtBQUssQ0FBQ0UsSUFBSTtRQUNqQyxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0csUUFBUTtRQUNwQyxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDLGlCQUFpQixFQUFFakIsd0NBQUUsRUFBRSxDQUFDLENBQUMsRUFBRWEsU0FBUyxDQUFDSyxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLE1BQU1DLEtBQUssR0FBRyxNQUFNdEIsaURBQVcsQ0FBQ2dCLFNBQVMsQ0FBQztRQUMxQyxNQUFNaEIsa0RBQVksQ0FBQ2tCLGdCQUFnQixFQUFFSSxLQUFLLENBQUMsQ0FBQztRQUM1QyxrQkFBa0I7UUFDbEJsQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsU0FBUztZQUFFQyxJQUFJLEVBQUVWLGdCQUFnQixDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQUUsQ0FBQyxDQUFDO0tBQ3RHLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2QzQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ0osT0FBTztTQUFFLENBQUMsQ0FBQztRQUNqRCxPQUFPO0tBQ1I7Q0FDRjs7QUFFTSxNQUFNSyxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5jb21pbmdGb3JtIH0gZnJvbSAnZm9ybWlkYWJsZSc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEluY29taW5nRm9ybSgpO1xuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpbWFnZUZpbGUgPSBkYXRhLmZpbGVzLmZpbGU7IFxuICAgIGNvbnN0IGltYWdlUGF0aCA9IGltYWdlRmlsZS5maWxlcGF0aDtcbiAgICBjb25zdCBwYXRoVG9Xcml0ZUltYWdlID0gYC4vcHVibGljL3VwbG9hZHMvJHt2NCgpfS4ke2ltYWdlRmlsZS5vcmlnaW5hbEZpbGVuYW1lLnNwbGl0KCcuJykucG9wKCl9YDtcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGZzLnJlYWRGaWxlKGltYWdlUGF0aCk7XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKHBhdGhUb1dyaXRlSW1hZ2UsIGltYWdlKTtcbiAgICAvL3N0b3JlIHBhdGggaW4gREJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiLCBwYXRoOiBwYXRoVG9Xcml0ZUltYWdlLnNsaWNlKDEpLnJlcGxhY2UoXCIvcHVibGljXCIsIFwiXCIpIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTsiXSwibmFtZXMiOlsiSW5jb21pbmdGb3JtIiwicHJvbWlzZXMiLCJmcyIsInY0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiaW1hZ2VGaWxlIiwiZmlsZSIsImltYWdlUGF0aCIsImZpbGVwYXRoIiwicGF0aFRvV3JpdGVJbWFnZSIsIm9yaWdpbmFsRmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsImltYWdlIiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInBhdGgiLCJzbGljZSIsInJlcGxhY2UiLCJlcnJvciIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();