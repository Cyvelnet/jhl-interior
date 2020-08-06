(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      statistics: {
        "total": 0,
        "ongoing": 0,
        "ongoing_percent": 0,
        "completed": 0,
        "completed_percent": 0,
        "published": 0,
        "published_percent": 0
      }
    };
  },
  props: {
    userName: {
      required: true
    }
  },
  methods: {},
  computed: {},
  components: {},
  watch: {},
  created: function created() {
    var _this = this;

    axios.get("/api/admin/v1/projects/statistics", {
      params: {}
    }).then(function (response) {
      _this.statistics = response.data;
    })["finally"](function () {
      _this.isLoading = false;
    });
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/index.vue?vue&type=template&id=4db8f5fb&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/index.vue?vue&type=template&id=4db8f5fb&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "p",
      {
        staticClass: "alert bg-success alert-success text-white mb-30",
        attrs: { role: "alert" }
      },
      [_vm._v("\n        Welcome back, " + _vm._s(_vm.userName) + "\n    ")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card proj-progress-card" }, [
          _c("div", { staticClass: "card-block" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xl-3 col-md-6" }, [
                _c("h6", [_vm._v("Total Projects")]),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    staticClass: "mb-30 fw-700",
                    domProps: { textContent: _vm._s(_vm.statistics.total) }
                  },
                  [_vm._v("89%")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass: "progress-bar bg-green",
                    style: { width: "100%" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-3 col-md-6" }, [
                _c("h6", [_vm._v("Published Projects")]),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    staticClass: "mb-30 fw-700",
                    domProps: { textContent: _vm._s(_vm.statistics.published) }
                  },
                  [_vm._v("532")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass: "progress-bar bg-blue",
                    style: { width: _vm.statistics.published_percent + "%" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-3 col-md-6" }, [
                _c("h6", [_vm._v("Ongoing Projects")]),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    staticClass: "mb-30 fw-700",
                    domProps: { textContent: _vm._s(_vm.statistics.ongoing) }
                  },
                  [_vm._v("365")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass: "progress-bar bg-yellow",
                    style: { width: _vm.statistics.ongoing_percent + "%" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-3 col-md-6" }, [
                _c("h6", [_vm._v("Completed Projects")]),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    staticClass: "mb-30 fw-700",
                    domProps: { textContent: _vm._s(_vm.statistics.completed) }
                  },
                  [_vm._v("4,569")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass: "progress-bar bg-red",
                    style: { width: _vm.statistics.completed_percent + "%" }
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/vue/index.vue":
/*!************************************!*\
  !*** ./resources/js/vue/index.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4db8f5fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4db8f5fb&scoped=true& */ "./resources/js/vue/index.vue?vue&type=template&id=4db8f5fb&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/vue/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4db8f5fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4db8f5fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4db8f5fb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/vue/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/index.vue?vue&type=template&id=4db8f5fb&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/vue/index.vue?vue&type=template&id=4db8f5fb&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4db8f5fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4db8f5fb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/index.vue?vue&type=template&id=4db8f5fb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4db8f5fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4db8f5fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);