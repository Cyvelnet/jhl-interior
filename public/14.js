(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/projects/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorHandling */ "./resources/js/vue/ErrorHandling.vue");
/* harmony import */ var vue_upload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-upload-image */ "./node_modules/vue-upload-image/dist/upload_image.vue");
/* harmony import */ var _components_images_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/images/image-gallery */ "./resources/js/vue/components/images/image-gallery.vue");
/* harmony import */ var _components_images_simple_image_uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/images/simple-image-uploader */ "./resources/js/vue/components/images/simple-image-uploader.vue");
/* harmony import */ var _components_froala_editor_froala__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/froala-editor/froala */ "./resources/js/vue/components/froala-editor/froala.vue");
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
  "extends": _ErrorHandling__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      isLoadingCategories: false,
      project: {
        "name": '',
        "is_published": true,
        "highlight": '',
        "description": '',
        "value": '',
        "progress": 'on-going',
        "client_name": '',
        "client_website": '',
        "date": '',
        "location": '',
        "category": null,
        "images": {
          "data": []
        }
      },
      optCategories: [],
      froalaConfig: {
        // key: 'AV:4~?3xROKLJKYHROLDXDR@d2YYGR_Bc1A8@5@4:1B2D2F2F1?1?2A3@1C1',
        heightMin: 300,
        //enter: 'enter_div',
        placeholderText: 'Detail information to your authiences',

        /*toolbarButtons: {
            moreText: {
                buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
                align: 'left',
                buttonsVisible: 3
            },
            moreParagraph: {
                buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
                align: 'left',
                buttonsVisible: 3
            },
            moreRich: {
                buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
                align: 'left',
                buttonsVisible: 3
            },
            moreMisc: {
                buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
                align: 'right',
                buttonsVisible: 2
            }
        },*/

        /*toolbarButtons: ['bold', 'italic', 'underline', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'paragraphFormat', 'lineHeight', 'outdent', 'indent',  'insertLink','insertImage', 'fullscreen'],*/
        toolbarButtons: ['bold', 'italic', 'underline', '|', 'color', 'align', 'paragraphFormat', 'lineHeight', 'outdent', 'indent', '|', 'insertLink', 'insertImage', 'insertVideo', 'clearFormatting', 'fullscreen']
      }
    };
  },
  props: {},
  methods: {
    save: function save() {
      var _this = this;

      this.isSaving = true;
      axios.post("/api/admin/v1/projects", this.project).then(function (response) {
        _this.showSuccess(response.data.message);

        _this.$router.push({
          name: 'projects.index'
        });
      })["catch"](function (error) {
        return _this.handleError(error);
      })["finally"](function () {
        return _this.isSaving = false;
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      this.isLoadingCategories = true;
      axios.get("/api/admin/v1/data/categories", {
        params: {}
      }).then(function (response) {
        _this2.optCategories = response.data.data;
      })["finally"](function () {
        _this2.isLoadingCategories = false;
      });
    },
    addProjectImage: function addProjectImage(data) {
      this.project.images.data.push(data);
    },
    removeImage: function removeImage(image) {
      var found = this.project.images.data.find(function (i) {
        return i.file === image.file;
      });

      if (found) {
        this.project.images.data.splice(this.project.images.data.indexOf(found), 1);
      }
    },
    updateImageRef: function updateImageRef(image) {
      var found = this.project.images.data.find(function (i) {
        return i.file === image.file;
      });

      if (found) {
        var newImage = JSON.parse(JSON.stringify(found));
        newImage.url = image.new_file_url;
        newImage.cover_url = image.new_cover_url;
        newImage.ext = image.new_ext;
        newImage.file = image.new_file;
        newImage.filename = image.new_filename;
        this.project.images.data.splice(this.project.images.data.indexOf(found), 1, newImage);
      }
    }
  },
  computed: {},
  components: {
    VueSelect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a,
    ImageGallery: _components_images_image_gallery__WEBPACK_IMPORTED_MODULE_3__["default"],
    SimpleImageUploader: _components_images_simple_image_uploader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Froala: _components_froala_editor_froala__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    this.getCategories();
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".multiselect {\n  /* .multiselect__content-wrapper {\n       display: block !important;\n   }*/\n}\n.multiselect .multiselect__placeholder {\n  margin-top: 0;\n  color: #6c757d;\n  margin-left: 2px;\n  font-size: 13px;\n}\n.multiselect .multiselect__input::-moz-placeholder {\n  color: #6c757d !important;\n  font-size: 13px;\n}\n.multiselect .multiselect__input:-ms-input-placeholder {\n  color: #6c757d !important;\n  font-size: 13px;\n}\n.multiselect .multiselect__input::-ms-input-placeholder {\n  color: #6c757d !important;\n  font-size: 13px;\n}\n.multiselect .multiselect__input::placeholder {\n  color: #6c757d !important;\n  font-size: 13px;\n}\n.multiselect .multiselect__tags {\n  min-height: 35px;\n  height: 35px;\n  padding: 4px 40px 0 8px;\n  font-size: 13px;\n  border-radius: 0.25em;\n}\n.multiselect .multiselect__select {\n  height: 35px;\n}\n.multiselect .multiselect__input {\n  padding-left: 3px;\n}\n.multiselect .multiselect__option {\n  line-height: 10px;\n  height: 35px;\n  min-height: 35px;\n}\n.multiselect .multiselect__single {\n  font-size: 13px;\n  line-height: 25px;\n}\n.multiselect .multiselect__option::after {\n  line-height: 35px;\n}\n.multiselect .multiselect__option--selected::after {\n  font-weight: 600;\n}\n.multiselect .multiselect__option {\n  font-size: 13px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=template&id=08a2509a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/projects/create.vue?vue&type=template&id=08a2509a& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("page-header", { attrs: { title: "New Project" } }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-outline-info mb-3",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.$router.back()
            }
          }
        },
        [
          _c("i", { staticClass: "ik ik-chevron-left" }),
          _vm._v("\n        Back")
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("alert", {
            attrs: { type: _vm.serverMessageType, messages: _vm.serverMessages }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "ul",
              {
                staticClass: "nav nav-tabs",
                attrs: { id: "myTab", role: "tablist" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        id: "profile-tab",
                        "data-toggle": "tab",
                        href: "#profile",
                        role: "tab",
                        "aria-controls": "profile",
                        "aria-selected": "false"
                      }
                    },
                    [
                      _vm._v("Gallery "),
                      _c(
                        "span",
                        {
                          staticClass: "badge badge-primary badge-pill",
                          staticStyle: {
                            "font-size": "10px",
                            padding: "2px 3px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.project.images.data.length))]
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-content", attrs: { id: "myTabContent" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade show active",
                    attrs: {
                      id: "home",
                      role: "tabpanel",
                      "aria-labelledby": "home-tab"
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mt-3" },
                      [
                        _c("ValidationObserver", {
                          ref: "observer",
                          attrs: { tag: "form" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var handleSubmit = ref.handleSubmit
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return handleSubmit(_vm.save)
                                        }
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-md-3" }, [
                                          _c("h6", [
                                            _vm._v("Project Information")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-9" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-8" },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Project Name"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Project Name"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .name,
                                                                    expression:
                                                                      "project.name"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .name
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "name",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Category"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Category"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("vue-select", {
                                                                attrs: {
                                                                  options:
                                                                    _vm.optCategories,
                                                                  label: "name",
                                                                  "track-by":
                                                                    "id",
                                                                  searchables: true,
                                                                  loading:
                                                                    _vm.isLoadingCategories
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.project
                                                                      .category,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "category",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "project.category"
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Description"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Description"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("froala", {
                                                                attrs: {
                                                                  configs:
                                                                    _vm.froalaConfig
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.project
                                                                      .description,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "description",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "project.description"
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: { name: "Highlight" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Highlight"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("textarea", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .highlight,
                                                                    expression:
                                                                      "project.highlight"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  name:
                                                                    "highlight",
                                                                  id:
                                                                    "ta_highlight",
                                                                  placeholder:
                                                                    "Brief description about project ...",
                                                                  rows: "3"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .highlight
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "highlight",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Value"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Value"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .value,
                                                                    expression:
                                                                      "project.value"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .value
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "value",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Location"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Project Location"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .location,
                                                                    expression:
                                                                      "project.location"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .location
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "location",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Date"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [_vm._v("Date")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .date,
                                                                    expression:
                                                                      "project.date"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "date"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .date
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "date",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Project Progress"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Project Progress"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "custom-control custom-radio custom-control-inline"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              _vm
                                                                                .project
                                                                                .progress,
                                                                            expression:
                                                                              "project.progress"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "custom-control-input",
                                                                        attrs: {
                                                                          type:
                                                                            "radio",
                                                                          id:
                                                                            "rad_progress-ongoing",
                                                                          name:
                                                                            "progress",
                                                                          value:
                                                                            "on-going"
                                                                        },
                                                                        domProps: {
                                                                          checked: _vm._q(
                                                                            _vm
                                                                              .project
                                                                              .progress,
                                                                            "on-going"
                                                                          )
                                                                        },
                                                                        on: {
                                                                          change: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.$set(
                                                                              _vm.project,
                                                                              "progress",
                                                                              "on-going"
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "label",
                                                                      {
                                                                        staticClass:
                                                                          "custom-control-label",
                                                                        attrs: {
                                                                          for:
                                                                            "rad_progress-ongoing"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                                On Going\n                                                            "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "custom-control custom-radio custom-control-inline"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              _vm
                                                                                .project
                                                                                .progress,
                                                                            expression:
                                                                              "project.progress"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "custom-control-input",
                                                                        attrs: {
                                                                          type:
                                                                            "radio",
                                                                          id:
                                                                            "rad_progress-completed",
                                                                          name:
                                                                            "progress",
                                                                          value:
                                                                            "completed"
                                                                        },
                                                                        domProps: {
                                                                          checked: _vm._q(
                                                                            _vm
                                                                              .project
                                                                              .progress,
                                                                            "completed"
                                                                          )
                                                                        },
                                                                        on: {
                                                                          change: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.$set(
                                                                              _vm.project,
                                                                              "progress",
                                                                              "completed"
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "label",
                                                                      {
                                                                        staticClass:
                                                                          "custom-control-label",
                                                                        attrs: {
                                                                          for:
                                                                            "rad_progress-completed"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Completed"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Publish Project")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    [
                                                      _c("toggle-button", {
                                                        attrs: {
                                                          sync: true,
                                                          color: {
                                                            checked: "#26C281"
                                                          },
                                                          width: 55,
                                                          labels: {
                                                            checked: "Yes",
                                                            unchecked: "No"
                                                          },
                                                          height: 25
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.project
                                                              .is_published,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.project,
                                                              "is_published",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "project.is_published"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-md-3" }, [
                                          _c("h6", [
                                            _vm._v("Client Information")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-9" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-8" },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Client Name"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Client Name"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .client_name,
                                                                    expression:
                                                                      "project.client_name"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .client_name
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "client_name",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Client Website"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Client Website"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .client_website,
                                                                    expression:
                                                                      "project.client_website"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .client_website
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "client_website",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: {
                                                    type: "submit",
                                                    disabled:
                                                      invalid || _vm.isSaving
                                                  }
                                                },
                                                [
                                                  _vm.isSaving
                                                    ? _c("span", [
                                                        _vm._v("Saving...")
                                                      ])
                                                    : _c("span", [
                                                        _vm._v("Save")
                                                      ])
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: {
                      id: "profile",
                      role: "tabpanel",
                      "aria-labelledby": "profile-tab"
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mt-3" },
                      [
                        _c("ValidationObserver", {
                          ref: "observer",
                          attrs: { tag: "form" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var handleSubmit = ref.handleSubmit
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return handleSubmit(_vm.save)
                                        }
                                      }
                                    },
                                    [
                                      _c("simple-image-uploader", {
                                        attrs: {
                                          "upload-url":
                                            "/api/admin/v1/projects/images/upload",
                                          name: "files"
                                        },
                                        on: { uploaded: _vm.addProjectImage }
                                      }),
                                      _vm._v(" "),
                                      _c("image-gallery", {
                                        attrs: {
                                          images: _vm.project.images.data
                                        },
                                        on: {
                                          remove: _vm.removeImage,
                                          cropped: _vm.updateImageRef
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "submit",
                                            disabled: invalid || _vm.isSaving
                                          }
                                        },
                                        [
                                          _vm.isSaving
                                            ? _c("span", [_vm._v("Saving...")])
                                            : _c("span", [_vm._v("Save")])
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            id: "home-tab",
            "data-toggle": "tab",
            href: "#home",
            role: "tab",
            "aria-controls": "home",
            "aria-selected": "true"
          }
        },
        [_vm._v("Project Information")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/vue/projects/create.vue":
/*!**********************************************!*\
  !*** ./resources/js/vue/projects/create.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_08a2509a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=08a2509a& */ "./resources/js/vue/projects/create.vue?vue&type=template&id=08a2509a&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/vue/projects/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_08a2509a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_08a2509a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/projects/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/projects/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/vue/projects/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/vue/projects/create.vue?vue&type=template&id=08a2509a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/vue/projects/create.vue?vue&type=template&id=08a2509a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_08a2509a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=08a2509a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/create.vue?vue&type=template&id=08a2509a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_08a2509a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_08a2509a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);